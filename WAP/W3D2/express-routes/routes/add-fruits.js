const express = require('express');
const path = require('path');

const fruits = ['apple', 'banana', 'guava'];

const router = express.Router();

router.get('/add-fruits', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'add-fruits.html'));
});

router.post('/add-fruits', (req, res, next) => {
  const arr = [];
  let fruit = res.body.fruit;
  if (arr.indexOf(fruit) < 0 && fruit) {
    arr.push(fruit);
  }
  res.send(array);
});
module.exports = router;
