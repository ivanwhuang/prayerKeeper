const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Prayer = require('../../models/Prayer');
const User = require('../../models/User');

// @route   POST api/prayers
// @desc    Create a prayer request
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('text', 'Text is required for a post')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');
      const newPrayer = new Prayer({
        user: req.user.id,
        name: user.name,
        text: req.body.text
      });

      const prayer = await newPrayer.save();
      res.json(prayer);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   GET api/prayers
// @desc    Get all prayers
// @access  Private
// router.get('/', auth, async (req, res) => {
//   try {
//     const prayers = await Prayer.find().sort({ date: -1 });
//     res.json(prayers);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// @route   GET api/prayers/:id
// @desc    Get prayer request by ID
// @access  Private
router.get('/:id', auth, async (req, res) => {
  try {
    const prayer = await Prayer.findById(req.params.id);
    if (!prayer) {
      return res.status(404).json({ msg: 'Prayer request not found' });
    }
    res.json(prayer);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Prayer not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   GET api/prayers/
// @desc    Get all prayer requests belonging to current user
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const prayers = await Prayer.find({ user: req.user.id }).sort({ date: -1 });

    res.json(prayers);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Prayer not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   GET api/prayers/user/:id
// @desc    Get all prayer requests belonging to a user
// @access  Private
router.get('/user/:id', auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found ' });
    }
    const prayers = await Prayer.find({ user: user.id }).sort({ date: -1 });

    res.json(prayers);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Prayer not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/prayers/:id
// @desc    Delete a prayer
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const prayer = await Prayer.findById(req.params.id);
    if (!prayer) {
      return res.status(404).json({ msg: 'Prayer request not found' });
    }

    // check if post belong's to the authenticated user
    if (prayer.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized ' });
    }

    prayer.remove();
    res.json({ msg: 'Prayer request removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Prayer request not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;
