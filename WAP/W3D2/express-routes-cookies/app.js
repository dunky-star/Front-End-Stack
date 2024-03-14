const express = require('express');
const path = require('path');

const app = express();

// Custome routes
const adminData = require('./routes/admin');
const homeRoutes = require('./routes/homepage');
const loginRoutes = require('./routes/login');
const fruitRoutes = require('./routes/add-fruits');

// Templating engine
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(adminData.routes);
app.use(homeRoutes);
app.use(fruitRoutes);
app.use(loginRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Oops! Page not found' });
});

app.use((err, req, res, next) => {
  console.log(err.toString());
  res.status(500).send('<h1>Oops! Something went wrong</h1>');
});

app.listen(3000, () => console.log('Server started and running on port 3000'));
