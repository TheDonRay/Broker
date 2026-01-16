const express = require("express");
const organizeandsend = express.Router(); 
const oasController = require('../controller/organizesend.controller.js'); 

// get requeuest becase we are getting the data 
organizeandsend.get('/analysis', oasController); 

module.exports = organizeandsend;
