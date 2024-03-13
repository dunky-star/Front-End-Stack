const express = require('express');

const path = require('path');

// Custom routes
const homeRoute = require('./homeroute');
const reviewRoute = require('./reviewroute');
const noSelection = require('./noselectionroute');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// App routes

app.use(homeRoute);
app.use(noSelection);
app.use(reviewRoute);

// Default error pages
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname('views', '404.html')));
});

app.use((err, req, res, next) => {
  console.log(err.toString());
  res.status(500).send('<h1>Oops! An error occured.</h1>');
});

app.listen('3000', () =>
  console.log('Server started and running on port 3000')
);
