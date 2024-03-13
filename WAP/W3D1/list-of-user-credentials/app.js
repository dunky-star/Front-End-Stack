const express = require('express');
const app = express();
const path = require('path');

//Read the parameters from post request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let array = ['apple', 'banana'];

let credentials = [
  { username: 'geoffrey', password: 'wap' },
  { username: 'johndoe', password: '123' },
];

app.get('/add-user', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'html', 'add-user.html'));
});

app.post('/add-user', (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;

  for (let cred of credentials) {
    if (cred.username == username && cred.password == password)
      res.send('User Already exists');
  }
  credentials.push({ username: username, password: password });
  res.send('success');
});

app.get('/add', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'html', 'addToList.html'));
});
app.post('/add', (req, res, next) => {
  let fruit = req.body.fruit;
  if (array.indexOf(fruit) < 0 && fruit) array.push(fruit);
  res.send(array);
});

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'html', 'home.html'));
});

app.use((req, res, next) => {
  console.log(' Here ');
  res.status(404).send('<h1>Oop! the page not found</h1>');
});

app.use((err, req, res, next) => {
  console.log(err.toString());
  res.status(500).send('Oops! Something went wrong');
});

app.listen(3000, () => {
  console.log('Your Server is running on 3000');
});
