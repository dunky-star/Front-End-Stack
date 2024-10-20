const path = require('path');
const express = require('express');

const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  let usersAdded = adminData.users;
  res.render('home-page', {
    users: usersAdded,
    path: '/',
    pageTitle: 'Home page',
    isAuthenticated: req.isLoggedIn,
  });
  console.log(`req.isLoggedIn: ${req.isLoggedIn}`);
});

module.exports = router;
