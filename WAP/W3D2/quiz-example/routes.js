const express = require('express');
const router = express.Router();
const path = require('path');

// Object to store quantities of each flavor
let flavourQuantities = {};

// Index route
router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/home.html'));
});

// Post Flavour route
router.get('/postFlavour', (req, res) => {
  res.sendFile(path.join(__dirname, '/postFlavour.html'));
});
let lastSelectedFlavor;
// Select Quantity route
router.post('/selectQuantity', (req, res, next) => {
  const vanila = req.body.vanila;
  const chocolate = req.body.chocolate;
  const pistachio = req.body.pistachio;
  const mango = req.body.mango;

  // Update quantities of selected flavors
  if (vanila) {
    if (flavourQuantities.vanila > 0) {
    } else {
      flavourQuantities.vanila = 0;
      lastSelectedFlavor = 'vanila';
    }
  }
  if (chocolate) {
    if (flavourQuantities.chocolate > 0) {
    } else {
      flavourQuantities.chocolate = 0;
      lastSelectedFlavor = 'chocolate';
    }
  }
  if (pistachio) {
    if (flavourQuantities.pistachio > 0) {
    } else {
      flavourQuantities.pistachio = 0;
      lastSelectedFlavor = 'pistachio';
    }
  }
  if (mango) {
    if (flavourQuantities.mango > 0) {
    } else {
      flavourQuantities.mango = 0;
      lastSelectedFlavor = 'mango';
    }
  }
  if (!chocolate && !pistachio && !mango && !vanila) {
    res.redirect('/postFlavour');
  } else {
    res.sendFile(path.join(__dirname, '/selectQuantity.html'));
  }
});

router.get('/postFlavour', (req, res) => {
  res.sendFile(path.join(__dirname, '/postFlavour.html'));
});

router.get('/thankYou', (req, res) => {
  res.send(flavourQuantities);
});

// Post Quantity route
router.post('/postQuantity', (req, res) => {
  const quantity = req.body.quantity;

  // Update quantity of the last selected flavor
  if (lastSelectedFlavor) {
    flavourQuantities[lastSelectedFlavor] = parseInt(quantity);
    //lastSelectedFlavor = null;
  }

  if (!quantity || isNaN(quantity) || quantity <= 0) {
    res.sendFile(path.join(__dirname, '/postQuantity.html'));
  } else {
    res.redirect('/thankYou');
  }
});

//404 Page handling
router.get('*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '/404.html'));
});

// Export router
module.exports = router;
