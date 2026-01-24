require('dotenv').config(); 
const mongoose = require('mongoose'); 

const MONGO_URI = process.env.MONGODB_URI; 
// create the connection function here as such 
const brokerclusterconnection = async () => { 
    // implement a try and catch case here as such 
    try { 
        await mongoose.connect(MONGO_URI); 
        console.log('Connected to MongoDB successfully');  
        return true; 
    } catch (error) { 
        console.error('Error connecting to MongoDB:', error.message);  
        return false; 
        process.exit(1); 
    }
} 

//export the connection 
module.exports = brokerclusterconnection; 