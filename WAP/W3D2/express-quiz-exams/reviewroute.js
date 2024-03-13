const express = require('express');

const path = require('path');

const router = express.Router();

let reviewsAll = [];

router.get('/review', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', 'review.html'));
});

router.post('/review', (req, res, next) => {
  let selected = checkSelectd;
  let reviewRating = req.body.radio;
  let recommenadtion = req.body.recommendation;
  let comments = req.body.comments;
  if (selected) {
    reviewsAll.push(reviewRating, recommenadtion, comments);
  }
});

router.get('/', (req, res, next) => {
  res.redirect('/display-review');
});

module.exports = router;
