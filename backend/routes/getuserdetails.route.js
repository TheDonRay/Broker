/*This route is to basically retrieve the user data so that we can call it upon the frontend page rendering in order to show the user username when they enter the dashboard */ 

const express = require('express');  
const userinfo = express.Router();  
const userinfoController = require('../controller/userinfo.controller.js'); 

//going to be a get request route 
userinfo.get('/userdetails', userinfoController); 

module.exports = userinfo;