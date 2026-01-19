require("dotenv").config();
const app = require("./app.js");

const PORT = process.env.PORT; 
// call the database here as such 
const brokerclusterconnection = require('./config/database.connection.js'); 
//invoke the function since the db function needs to be called when the server starts 
brokerclusterconnection(); 

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
