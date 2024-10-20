const path = require('path');
const express = require('express');
const adminData = require('./admin');

const router = express.Router();

router.get('/login', (req, res, next) => {
  // console.log(`Cookie value:${req.get('Cookie').split('=')[1]}`);
  const isLoggedIn = req.get('Cookie').split('=')[1];
  console.log(`Is LoggedIn:${isLoggedIn}`);
  res.render('login', {
    path: '/login',
    pageTitle: 'Login page',
    isAuthenticated: isLoggedIn,
  });
});

router.post('/login', (req, res, next) => {
  // res.send({
  //   username: req.body.username,
  //   password: req.body.password,
  // });
  let username = req.body.username;
  let password = req.body.password;
  let rememberMe = req.body.remember;
  console.log(rememberMe);
  for (let user of adminData.users) {
    if (user.username === username && user.password === password) {
      //res.setHeader('Set-Cookie', 'loggedIn=true; httpOnly');
      res.cookie('loggedIn', true);
      //req.session.isLoggedIn = true;

      if (rememberMe === 'remember') {
        res.cookie('remember', 1);
      } else {
        res.clearCookie('remember');
      }

      res.redirect('/');
    } else {
      res.send('<h1>Wrong username /or password</h1>');
    }
  } // End of 'For' Loop
});

module.exports = router;
