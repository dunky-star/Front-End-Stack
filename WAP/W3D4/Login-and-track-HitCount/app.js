const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');

// Imports
const homeRoute = require('./routes/homeroute');
const loginRoute = require('./routes/loginroute');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: true,
  })
);

// Routes
app.use(homeRoute);
app.use(loginRoute);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Not found page' });
});

app.use((err, req, res, next) => {
  console.log(err.toString());
  res.status(505).send('<h1>Oops! An error occured!</h1>');
});

app.listen(3000, () => console.log('Server started and running on port 3000'));
