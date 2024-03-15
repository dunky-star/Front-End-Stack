const express = require('express');

const router = express.Router();

let flowers = [];

router.get('/', (req, res, next) => {
  res.render('home', { flowers: flowers, path: '/', pageTitle: 'Home page' });
});

router.post('/', (req, res, next) => {
  console.log('In the middleware!', req.body);

  flowers.push(req.body.flowers);

  res.redirect('back');
});
module.exports = router;
