//import the service function here as such
const { fetchStockData } = require("../services/marketstack.service.js");

const stockdata = async (req, res) => {
  // if you are wondering its like server to server communication in a way where it seems like we are making a frontend call but in our backend.
  // implement the try and catch here as such
  try {
    // this is going to be a body request depending on what the user inputs as a ticketer of the stock they want.
    // start of with a base case here as such
    const { stockTicketer } = req.body;

    if (!stockTicketer || stockTicketer.trim() === "") {
      return res.status(400).json({
        Error:
          "Invalid stockTicketer or no stockTicketer inputed from request made",
      });
    }
    // implement the backend function to actually handle the request
    const response = await fetchStockData(stockTicketer);

    //send the res here
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error retrieving the data from externalAPI", error);
    return res.status(500).json({
      error: "Internal Error fetching data from Market Stack",
    });
  }
};

module.exports = stockdata;
