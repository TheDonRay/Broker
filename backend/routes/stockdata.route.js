const express = require('express');  
const stockdata = express.Router();    
//import the controller 
const stockdatacontroller = require('../controller/stockdata.controller.js'); 

stockdata.post('/stockdata', stockdatacontroller); 

module.exports = stockdata; 