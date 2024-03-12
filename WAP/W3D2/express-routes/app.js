const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/add-user', (req, res, next) => {
  res.sendFile(path.join(__dirname, './', 'views', 'add-user.html'));
});
app.post('/add-user', (req, res, next) => {
  res.send({
    username: req.body.username,
    password: req.body.password,
    age: req.body.age,
  });
  res.redirect('/');
});

app.get('/login', (req, res, next) => {
  res.sendFile(path.join(__dirname, './', 'views', 'login.html'));
});

app.post('/login', (req, res, next) => {
  res.send({
    username: req.body.username,
    password: req.body.password,
  });
  res.redirect('/add-user');
});

app.use('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, './', 'views', 'index.html'));
});

app.use((req, res, next) => {
  res.sendFile(path.join('views', '404.html'));
});

app.use((err, req, res, next) => {
  console.log(err.toString());
  res.status(500).send('<h1>Oops! Something went wrong</h1>');
});

app.listen(3000, () => console.log('Server started and running on port 3000'));
