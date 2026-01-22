import React from "react";
import { useNavigate } from 'react-router-dom'; 
import { useState } from 'react'; 
import "../styles/Homepage.css";

export default function Homepage() { 

    const [username, setUsername] = useState('');  
    const [password, setPassword] = useState(''); 
    const navigate = useNavigate();
    function signUpPage() {
        navigate('/signup');
    }  

  // TODO: Implement the login feature here as such 
    const handleLogin = async (e) => { 
      e.preventDefault();   

      // implement try and catch case to handle the input for the login and sign up ->  

    }
  return (
    <div className="homepage-container">
      <div className="info-section">
        <h1 className="info-title">Broker</h1>
        <p className="info-description">
          Your intelligent stock analysis companion. Get real-time insights,
          market trends, and data-driven recommendations without overthinking a stock. 
        </p>
        <ul className="info-features">
          <li>Real-time market analysis</li>
          <li>AI-powered stock recommendations</li>
          <li>AI-driven calculations—evaluating volatility, price changes, volume strength, and daily range </li>
        </ul>
      </div>

      <div className="login">
        <h2 className="login-title">Welcome Back</h2>
        <p className="subtextabout-broker">
          Hesitant on a stock? Let Broker break the hesitation.
        </p>
        <form>
            <div className="Text-area">
                <input
                    type="text"
                    id="username"
                    name="Username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="textinput"
                />
            </div>
            <div className='Text-area'>
                <input
                    type="password"
                    id="password"
                    name="Password"
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="textinput"
                />
            </div>
            <input
                type="submit"
                value="Login"
                className="btn"
            />

            <input
                type="button"
                value="Sign Up"
                onClick={signUpPage}
                className="btn"
            />
        </form>
      </div>
    </div>
  );
}
