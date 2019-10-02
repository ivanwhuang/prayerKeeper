const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const auth = require('../../middleware/auth');
const User = require('../../models/User');
const Keeper = require('../../models/Keeper');
const Profile = require('../../models/Profile');

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post(
  '/',
  [
    check('name', 'Name is requried')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      // Create new instance of a user
      user = new User({
        name,
        email,
        password
      });

      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // save new instane of user into mongoDB
      await user.save();

      // Create a new prayer Keeper
      const newKeeper = new Keeper({
        user: user.id
      });

      await newKeeper.save();

      // Create a new Profile
      const newProfile = new Profile({
        user: user.id
      });

      await newProfile.save();

      // return jsonwebtoken
      const payload = {
        user: {
          // Mongoose uses an abstraction for the id, so we don't need to access it by _id
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route   POST api/users/avatar
// @desc    Update Avatar icon
// @access  Private
router.post(
  '/avatar',
  [
    auth,
    [
      check('avatar', 'Avatar is requried')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { avatar } = req.body;

    try {
      // See if user exists
      let user = await User.findById(req.user.id);

      if (!user) {
        return res.status(404).json({ msg: 'User not found' });
      }

      user = await User.findOneAndUpdate(
        { _id: req.user.id },
        { $set: { avatar: avatar } },
        { new: true }
      );

      return res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
