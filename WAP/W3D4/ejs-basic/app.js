const express = require('express');
const app = express();
var cookieParser = require('cookie-parser');

let obj = { name: ' ', skills: ['Java', 'Javascript'] };

app.listen(3000, () => {
  console.log('Your Server is started running on port 3000');
});

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//EJS Engine
app.set('view engine', 'ejs');
app.set('views', 'views');
// app.set('views', path.join(__dirname,"myDir"));

app.get('/', (req, res, next) => {
  res.render('index', { path: '/', obj: obj });
});
app.post('/', (req, res, next) => {
  console.log(' POST ', req.body);
  res.cookie('name', req.body.name);
  res.cookie('skill', req.body.skills);

  res.redirect('/preview');
});

app.get('/preview', (req, res, next) => {
  console.log(' PREVIEW ', req.cookies);
  console.log(' PREVIEW req', req.body);
  res.render('preview', { name: req.cookies.name, skill: req.cookies.skill });
});
