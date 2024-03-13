const express = require('express');
const path = require('path');
const router = express.Router();

//User Array
let userArray = [{ "username": "guest", "password": "guest" }, { "username": "owner", "owner": "guest" }]

//body Parser
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

//Landing Page
router.get('/', (req, res, next) => {
    // console.log(__dirname);
    res.sendFile(path.join(__dirname, 'html', 'login.html'));
})

//view Page
router.get('/view', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'html', 'view.html'));
})

//post - submit
router.post('/submit', (req, res, next) => {
    if (req.body.username === 'guest' || req.body.username === 'owner') {
        if (req.body.password === 'guest' || req.body.password === 'owner') {
            res.redirect('/view');
        }
        else {
            next();
        }
    }
    else {
        next();
    }
}, (req, res, next) => {
    res.send("<h3>Login Unsuccessful page cannot be reached</h3>")
})

//post
router.post('/category',
    (req, res, next) => {
        req.body.role = 'viewer';
        next();
    },
    (req, res, next) => {
        if (req.body.role === 'viewer') {
            res.send("<h3>Welcome to category</h3>")
        }
        else {
            res.send("<h3>Unauthorized</h3>")
        }
    })


module.exports = router;