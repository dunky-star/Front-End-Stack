const express = require('express');

const path = require('path');

const router = express.Router();

router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.get('/selection', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', 'homepage.html'));
});

router.post('/selection', (req, res, next) => {
  let checking = req.body.checkSelected;
  console.log(checking);
  if (!checking) {
    res.redirect('/noSelection');
  } else {
    res.redirect('/review');
  }
});

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', 'homepage.html'));
});

module.exports = router;
