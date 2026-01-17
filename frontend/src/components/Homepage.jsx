import React from "react"; 
import { useNavigate } from 'react-router-dom'; 
import "../styles/Homepage.css";

export default function Homepage() { 

    function signUpPage() { 

    }
  return (
    <>
      <div className="login">
        <h2 className="login-title">Welcome To Broker</h2>
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
                    className="textinput" 
                />
            </div> 
            <div className='Text-area'>  
                <input 
                    type="password" 
                    id="password"  
                    name="Password" 
                    placeholder="Password" 
                    className="textinput"
                /> 
            </div> 
            <input 
                type="submit" 
                value="Login" 
                className="btn" 
            /> 
 
            <input 
                type="submit" 
                value="Sign Up" 
                className="btn" 
            />
        </form>
      </div>
    </>
  );
}
