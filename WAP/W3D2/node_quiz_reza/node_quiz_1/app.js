const express = require('express');
const app = express();
var path = require("path");
let obj = {};
var road = [];
app.listen(80, function() {
    console.log('Your Server is running on 3000');
});


//Read the parameters from post request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/",function(req, res){
    res.sendFile(path.join(__dirname,"view","index.html"));
});

app.post("/review",function(req,res){
    if(req.body.road == null){
        res.sendFile(path.join(__dirname,"view","message.html"));
    }else{
        road = req.body.road;
        console.log(road);
        res.sendFile(path.join(__dirname,"view","review.html"));
    }

});

app.post("/reviewdata",function(req,res){
    console.log(req.body);
    
});