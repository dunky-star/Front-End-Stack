const express = require('express');
var path = require("path");
const router = express.Router();

router.get("/", function (req, res, next) {
    res.render("index", { apis: ['AccuWeatherAPI', 'VisualCrossingAPI'] });
})

router.post("/update", function (req, res, next) {
    let oldWeather = req.cookies.weather;
    setArrayCookie(req,res,{ source: req.body.source, weather: req.body.weather }, 'history')
    setArrayCookie(req,res,req.body.weather, 'weather')
    res.send('done')
});

function setArrayCookie(req,res,newValue, cookieName) {
    let prev = req.cookies[cookieName]
    if (!prev || prev.length == 0)
        res.cookie(cookieName, [newValue])
    else {
        prev.push(newValue);
        res.cookie(cookieName, prev)
    }
}

router.get('/findAverage', function (req, res, next) {
    let array = req.cookies.weather;
    let sum = array.reduce((prev, ele) => parseInt(ele) + parseInt(prev));
    res.send("" + sum / array.length);
});

router.get('/history', function (req, res, next) {
    res.send(req.cookies.history);
});

router.get("/show", function (req, res, next) {
    res.send(req.cookies)
})
module.exports = router;
