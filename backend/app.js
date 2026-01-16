const express = require('express'); 
const app = express(); 

app.use(express.json());  

// import the routes here 

//simple backend route to make sure backend is correctly running 
app.get('/', (req, res) => { 
    res.json({ 
        Server: 'Successfully Running'
    }); 
}); 

module.exports = app; 