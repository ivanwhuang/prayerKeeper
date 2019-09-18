const express = require('express');
const router = express.Router();

// @route   GET api/prayerRequest
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Prayer Request Route'));

module.exports = router;
