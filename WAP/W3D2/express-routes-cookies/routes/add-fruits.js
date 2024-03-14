const express = require('express');
const path = require('path');

const fruitArray = ['apple', 'banana', 'guava'];

const router = express.Router();

router.get('/add-fruits', (req, res, next) => {
  res.render('add-fruits', {
    path: '/add-fruits',
    pageTitle: 'Add fruits page',
  });
});

router.post('/add-fruits', (req, res, next) => {
  // const arr = [];
  let fruit = req.body.fruit;
  if (fruitArray.indexOf(fruit) < 0 && fruit) {
    fruitArray.push(fruit);
  }
  console.log(fruitArray);
  res.send(fruitArray);
});
module.exports = router;
