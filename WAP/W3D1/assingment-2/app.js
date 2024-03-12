const express = require('express');

const path = require('path');

const app = express();

const myData = [];

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/add-data', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', 'formControl.html'));
});

app.post('/add-data', (req, res, next) => {
  res.send({
    textbox: req.body.textbox,
    radio: req.body.radio,
    checkbox: req.body.checkbox,
    textarea: req.body.textarea,
    select: req.body.select,
    multiple: req.body.multiple,
    multipleOptGroup: req.body.multipleOptGroup,
  });
  res.redirect('/');
});

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname('views', '404.html')));
});

app.listen('3000', () =>
  console.log('Server started and running on port 3000')
);
