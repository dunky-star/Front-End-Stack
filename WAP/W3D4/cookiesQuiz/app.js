const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// Middleware to parse cookies and request body
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', 'views');

// Products data
let products = [
  {
    img: 'https://m.media-amazon.com/images/I/71SKXw+9tCL._AC_SX679_.jpg',
    name: 'Winter Hanging Decor',
    price: '42',
  },
  {
    img: 'https://m.media-amazon.com/images/I/81Kng7krTwL._AC_SX679_.jpg',
    name: 'Fall Hanging Decor',
    price: '50',
  },
];

// Route to handle adding items to cart
app.post('/addToCart', (req, res) => {
  const productName = req.body.productName;
  let cart = req.cookies.cart || {};

  if (cart[productName]) {
    cart[productName]++;
  } else {
    cart[productName] = 1;
  }

  // Calculate total price
  let totalPrice = Object.keys(cart).reduce((acc, productName) => {
    let product = products.find(p => p.name === productName);
    return acc + (product ? parseInt(product.price) * cart[productName] : 0);
  }, 0);

  // Store cart in cookie
  res.cookie('cart', cart);
  res.cookie('totalPrice', totalPrice);

  res.redirect('/');
});

// Route to render the page
app.get('/', (req, res) => {
  let cart = req.cookies.cart || {};
  let totalPrice = req.cookies.totalPrice || 0;

  // Render the page with products and cart data
  res.render('index', { products, cart, totalPrice });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
