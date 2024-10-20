const express = require('express');

const router = express.Router();

let users = [
  { username: 'opiyog', password: 'kaligs' },
  { username: 'okot', password: '123' },
  { username: 'geoffrey', password: 'qwerty' },
];

router.get('/login', (req, res, next) => {
  res.render('login', { path: '/login', pageTitle: 'Login page' });
});

router.post('/login', (req, res, next) => {
  console.log('In the middleware', req.body);
  const username = req.body.username;
  const password = req.body.password;
  for (let user of users) {
    if (user.username === username && user.password === password) {
      req.session.isLoggedIn = true;
      res.redirect('/');
    } else {
      res.render('login', { error: 'Invalid username or password.' });
    }
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();

  res.redirect('/');
});

module.exports = router;
