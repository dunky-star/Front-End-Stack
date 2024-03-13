const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use routes defined in routes.js
app.use('/', routes);

app.listen(3000, () => {
  console.log('the server is started and running on the port 3000');
});
