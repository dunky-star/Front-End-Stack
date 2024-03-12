const express = require('express');
const path = require('path');

const app = express();

// Custome routes
const adminData = require('./routes/admin');
const loginRoutes = require('./routes/login');
const homeRoutes = require('./routes/homepage');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/admin', adminData);

app.use(loginRoutes.route);
app.use(homeRoutes);

app.use((req, res, next) => {
  res.sendFile(path.join('views', '404.html'));
});

app.use((err, req, res, next) => {
  console.log(err.toString());
  res.status(500).send('<h1>Oops! Something went wrong</h1>');
});

app.listen(3000, () => console.log('Server started and running on port 3000'));
