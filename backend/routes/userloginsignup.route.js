const express = require('express'); 
const users = express.Router(); 
const { usersignup, userlogin } = require('../controller/userloginsignup.controller.js'); 
//middleware function:  
const { checktoken } = require('../middleware/auth.middleware.js'); 


users.post('/signup', usersignup); 
users.post('/login', userlogin); 

users.get('/userprotected', checktoken, (req, res) => { 
    res.json({ 
        message: 'User details Protected',
        user: req.username
    })
})
module.exports = users; 