const mongoose = require('mongoose'); 


// keep in mind this is where the collection (users) is going to be stored inside the cluster. 
const users = new mongoose.Schema({ 
    //defining the schema here which is going to get imported into one of the controllers.  
    Username: { 
        required: true, 
        type: String, 
        minlength: 5, 
        maxlength: 30, 
        trim: true
    }, 
    Password: { 
        required: true, 
        type: String, 
        minlength: 8
    }
}); 

module.exports = mongoose.model('usersdatabase', users); 