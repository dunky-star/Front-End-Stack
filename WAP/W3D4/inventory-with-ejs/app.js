const express = require('express');

const app = express();

//Custome imports
const homeRoute = require('./routes/homeroute');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Templating engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Custom route
app.use(homeRoute);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Not found page' });
});
app.use((err, req, res, next) => {
  console.log(err.toString());
  res.status(505).send('Oops! An error occurred');
});
app.listen(3000, () => console.log('Server started and running on port 3000'));
