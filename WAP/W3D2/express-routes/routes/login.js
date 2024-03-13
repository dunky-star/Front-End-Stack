const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/login', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'login.html'));
});

router.post('/login', (req, res, next) => {
  res.send({
    username: req.body.username,
    password: req.body.password,
  });
  res.redirect('/add-user');
});

module.exports = router;
