const express = require('express');

const path = require('path');

const router = express.Router();

router.get('/no-selection', (req, res, next) => {
  res.send('Please go back and select an option');
});

// router.post('/no-selection', (req, res, next) => {

// });

module.exports = router;
