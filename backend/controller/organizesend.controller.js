//import the data from the service folder that calls the external api here as such
const { fetchStockData } = require("../services/marketstack.service.js");
const OpenAi = require('openai'); 
const client = new OpenAi({ 
    apiKey: process.env.OPENAI_KEY
}); 

const organizeAnalysis = async (req, res) => { 
    // first i want to set up a try and catch case here 
}