const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const User = require('../../models/User');
const Prayer = require('../../models/Prayer');
const Keeper = require('../../models/Keeper');

// @route   POST api/keeper
// @desc    Add prayer request to a user's Prayer Keeper
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required for a post')
        .not()
        .isEmpty(),
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
      const keeper = await Keeper.findOne({ user: req.user.id });

      const newPrayer = {
        name: req.body.name,
        text: req.body.text
      };

      keeper.prayerList.unshift(newPrayer);

      await keeper.save();
      res.json(keeper.prayerList);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   POST api/keeper/:id
// @desc    Add an existing prayer request to a user's Prayer Keeper
// @access  Private
router.post('/:id', auth, async (req, res) => {
  try {
    const keeper = await Keeper.findOne({ user: req.user.id });
    const prayer = await Prayer.findById(req.params.id);

    if (!prayer) {
      return res.status(404).json({ msg: 'Prayer request not found' });
    }

    const newPrayer = {
      name: prayer.name,
      text: prayer.text
    };

    keeper.prayerList.unshift(newPrayer);

    await keeper.save();
    res.json(keeper.prayerList);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Prayer request not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   GET api/keeper/
// @desc    Get current user's prayer list from keeper
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const keeper = await Keeper.findOne({ user: req.user.id });
    res.json(keeper.prayerList);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/posts/:id
// @desc    Delete a prayer request from a user's keeper
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const keeper = await Keeper.findOne({ user: req.user.id });

    // Pull out comment
    const prayer = keeper.prayerList.find(
      prayer => prayer.id.toString() === req.params.id
    );

    // Check if comment exists
    if (!prayer) {
      return res.status(404).json({ msg: 'Prayer request does not exist' });
    }

    // Get remove Index
    const removeIndex = keeper.prayerList
      .map(prayer => prayer.id.toString())
      .indexOf(req.params.id);

    keeper.prayerList.splice(removeIndex, 1);

    await keeper.save();

    res.json(keeper.prayerList);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Prayer Request not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;
