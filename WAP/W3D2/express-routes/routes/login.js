const path = require('path');
const express = require('express');
const adminData = require('./admin');

const router = express.Router();

router.get('/login', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'login.html'));
});

router.post('/login', (req, res, next) => {
  // res.send({
  //   username: req.body.username,
  //   password: req.body.password,
  // });
  let username = req.body.username;
  let password = req.body.password;
  let role = req.body.role;

  for (let user of adminData.users) {
    if (user.username === username && user.password === password) {
      res.redirect('/add-user');
    } else {
      res.send('<h1>Wrong username /or password</h1>');
    }
  } // End of 'For' Loop
});

module.exports = router;
