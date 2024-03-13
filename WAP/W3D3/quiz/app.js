const express = require('express');
const app = express();
var router = require('./routes');
app.listen(80, () => {
    console.log('Your Server is running on 80');
})

//using Router
app.use(router);
//Error page
// app.use((req, res, next) => {
//     res.send("<h1>Login Unsuccessful page cannot be reached</h1>")
// })

app.use('/*', (req, res, next) => {
    res.send('<h3>Site cannot be found 404</h3>')
})