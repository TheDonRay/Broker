import React from "react";
import { useNavigate } from 'react-router-dom'; 
import { useState } from 'react'; 
import "../styles/Homepage.css";

export default function Homepage() { 

    const [username, setUsername] = useState('');  
    const [password, setPassword] = useState(''); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    
    function signUpPage() {
        navigate('/signup');
    }  

    const handleLogin = async (e) => { 
      e.preventDefault();
      
      // Clear previous messages
      setError('');
      setSuccess('');
      
      // Input validation
      if (!username.trim() || !password.trim()) {
        setError('Please enter both username and password');
        return;
      }
      
      setLoading(true); // start loading here.
      
      try { 
        const sendDataToBackend = await fetch(`http://localhost:7898/api/v1/login`, { 
          method: "POST", 
          headers: { 
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ 
            username: username,
            password: password 
          })
        });  
        
        const backendResponse = await sendDataToBackend.json();
        
        // Check if login was successful
        if (sendDataToBackend.ok) {
          setSuccess('Login successful! Redirecting...');
          
          // Store token if backend provides one
          if (backendResponse.token) {
            localStorage.setItem('authToken', backendResponse.token);
          }
          
          // Redirect after short delay
          setTimeout(() => navigate('/dashboard'), 1500); // need to add this page. to the frontend.  
        } else {
          setError(backendResponse.error || 'Login failed. Please try again.');
        }
        
      } catch (error) { 
        setError('Error connecting to the server. Please try again.');
        console.error('Error sending data to the backend', error); 
      } finally {
        setLoading(false); // stops the loading. 
      }
    }

    const fetchProtectedData = async () => {
      try {
        const token = localStorage.getItem('authToken');
        
        if (!token) {
          setError('No authentication token found. Please login first.');
          return;
        }
        
        const response = await fetch(`http://localhost:7898/api/v1/userprotected`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        
        const data = await response.json();
        
        if (response.ok) {
          console.log('Protected data:', data);
          setSuccess(`Welcome, ${data.user.username}`);
        } else {
          setError(data.Error || 'Failed to fetch protected data');
        }
      } catch (error) {
        setError('Error fetching protected data');
        console.error(error);
      }
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
        
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
        
        <form onSubmit={handleLogin}>
            <div className="Text-area">
                <input
                    type="text"
                    id="username"
                    name="Username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="textinput"
                    disabled={loading}
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
                    disabled={loading}
                />
            </div>
            <input
                type="submit"
                value={loading ? "Logging in..." : "Login"}
                className="btn"
                disabled={loading}
            />

            <input
                type="button"
                value="Sign Up"
                onClick={signUpPage}
                className="btn"
                disabled={loading}
            />
        </form>
      </div>
    </div>
  );
}
