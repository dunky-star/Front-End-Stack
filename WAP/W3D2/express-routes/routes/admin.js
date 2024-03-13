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
  res.sendFile(path.join(__dirname, '../', 'views', 'add-user.html'));
});
router.post('/add-user', (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
  let role = req.body.role;
  for (let user of users) {
    if (
      users.username === username &&
      users.password === password &&
      users.role === role
    ) {
      res.send('User already exist');
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
