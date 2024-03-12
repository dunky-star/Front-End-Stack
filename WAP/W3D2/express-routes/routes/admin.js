const path = require('path');
const express = require('express');

const router = express.Router();

const users = [];

router.get('/add-user', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'add-user.html'));
});
router.post('/add-user', (req, res, next) => {
  users.push({
    username: req.body.username,
    password: req.body.password,
    age: req.body.age,
  });

  // res.send({
  //   username: req.body.username,
  //   password: req.body.password,
  //   age: req.body.age,
  // });
  // userData.push(req.body);
  res.redirect('/');
});

exports.routes = router;
exports.users = users;
