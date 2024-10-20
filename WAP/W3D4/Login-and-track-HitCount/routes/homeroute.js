const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  if (req.session.isLoggedIn) {
    const hitCount = req.session.hitCount || 0;

    req.session.hitCount = hitCount + 1;

    res.render('home', {
      hitCount: hitCount,
      path: '/',
      pageTitle: 'Home page',
    });
  }
});

router.post('/', (req, res, next) => {
  console.log('In the middleware', req.body);
});

module.exports = router;
