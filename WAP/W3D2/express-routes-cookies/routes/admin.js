const path = require('path');
const express = require('express');
// const options = {
//   caseSensitive: false,
//   strict: false,
// };
const router = express.Router();

const users = [
  { username: 'geoffrey', password: 'qwerty', role: 'admin' },
  { username: 'brio', password: '123456', role: 'user' },
];

router.get('/add-user', (req, res, next) => {
  res.render('add-user', { path: '/add-user', pageTitle: 'Add user page' });
});
router.post('/add-user', (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
  let role = req.body.role;
  for (let user of users) {
    if (
      user.username === username &&
      user.password === password &&
      user.role === role
    ) {
      res.send('<h1>User already exist</h1>');
    }
  }

  users.push({
    username,
    password,
    role,
  });

  res.redirect('/');
});

exports.routes = router;
exports.users = users;
