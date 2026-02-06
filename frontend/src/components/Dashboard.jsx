import { useState, useEffect } from 'react';
import '../styles/Dashboard.css';

export default function Dashboard() {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState('');

  const exampleTickers = ['AAPL', 'GOOG', 'NFLX', 'TSLA', 'AMZN'];

  useEffect(() => {
    setLoading(true);
    const storedUsername = localStorage.getItem('username');

    if (storedUsername) {
      setUsername(storedUsername);
    }
    setLoading(false);
  }, []);

  const handleUserInput = (event) => {
    setUserInput(event.target.value); // handles what the user writes in the search box. 
  }

  const handleTickerClick = (ticker) => {
    setUserInput(ticker);
  }

  const handleSubmit = (event) => {
    event.preventDefault();  

    // start of with a base case here as such 
    if (userInput.trim() === ""){ 
      alert('Please Enter a Stock Ticker'); 
    } 

    if (userInput.length > 4){ 
      alert('Please enter a valid Stock Ticker'); 
    } 

    // begin the try and catch case to actually send it to the backend here as such 
    
  }

  return(
    <div className='dashboard-container'>
      <div className='heading-div'>
        <h1 className='dashtitle'>Ready to Invest, <span>{username}</span></h1>
      </div>

      <div className='userinputcontainer'>
        <div className='search-card'>
          <label className='search-label'>
            Enter a stock ticker symbol
          </label>
          <form onSubmit={handleSubmit}>
            <div className='search-input-wrapper'>
              <input
                type='text'
                className='stock-input'
                placeholder='e.g. AAPL, GOOG, TSLA'
                value={userInput}
                onChange={handleUserInput}
              />
              <button type='submit' className='search-btn'>
                Search
              </button>
            </div>
          </form>
          <div className='ticker-examples'>
            {exampleTickers.map((ticker) => (
              <span
                key={ticker}
                className='ticker-tag'
                onClick={() => handleTickerClick(ticker)}
              >
                {ticker}
              </span>
            ))}
          </div>
        </div>
      </div> 

      {/*Output Div your AI analysis */} 

      {/*Output of analysis of those stock prices and their mapped calculations so users can see the calculations */}
    </div>
  )
}