const express = require('express');
const router = express.Router();

// @route   GET api/prayerKeeper
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Prayer Keeper Route'));

module.exports = router;
