const express = require('express');

const router = express.Router();

let products = [];

router.get('/', (req, res, next) => {
  res.render('home', { products: products, path: '/', pageTitle: 'Home page' });
});

let id = 1;
router.post('/', (req, res, next) => {
  console.log('In the middleware!', req.body);
  if (req.body.action == 'add') {
    let product = {
      itemId: id++,
      itemName: req.body.itemName,
      itemPrice: req.body.itemPrice,
      itemQuantity: req.body.itemQuantity,
    };
    products.push(product);
  } else if (req.body.action == 'edit') {
    for (let product of products) {
      if (product.itemId == req.body.itemId) {
        product.itemName = req.body.itemName;
        product.itemPrice = req.body.itemPrice;
        product.itemQuantity = req.body.itemQuantity;
      }
    }
  } else {
    for (let i = 0; i < products.length; i++) {
      if (products[i].itemId == req.body.itemId) {
        products.splice(i, 1);
        break;
      }
    }
  }

  res.redirect('back');
});
module.exports = router;
