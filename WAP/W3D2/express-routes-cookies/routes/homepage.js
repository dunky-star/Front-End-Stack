const path = require('path');
const express = require('express');

const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log(adminData.users);
  res.render('home-page', { path: '/', pageTitle: 'Home page' });
});

module.exports = router;
