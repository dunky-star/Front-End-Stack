const path = require('path');
const express = require('express');

const adminData = require('./admin');

const router = express.Router();

router.use('/', (req, res, next) => {
  console.log(adminData.users);
  res.sendFile(path.join(__dirname, '../', 'views', 'home-page.html'));
  res.redirect('/');
});

module.exports = router;
