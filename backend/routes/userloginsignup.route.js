const express = require('express'); 
const users = express.Router(); 
const userController = require('../controller/userloginsignup.controller.js'); 
//middleware function: 

users.post('/userinformation', userController); 

module.exports = users; 