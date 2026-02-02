import React from "react";
import { useState, useEffect } from 'react'; 

export default function DashboardPage() { 

  const [UserLoginInfo, SetUserLoginInfo] = useState('');  
  // get token data here from localstorage 
  const token = localStorage.getItem('authToken'); 

  // going to be a useEffect hook because once the page renders then we can show the users username. 
    useEffect(() => { 
    //implemenet a try and catch case here to actually call the route as such  
    const fetchuserData = async () => { 
      try { 
        // get the backend call here as such 
        const backendCall = await fetch(`http://localhost:7898/api/v1/userprotected`, { 
          method: "GET", 
          headers: {
            Authorization: `Bearer ${token}`
          }
        }); 
        //include some error handling here to check the response to the backend as well.  
        if (!backendCall.ok){ 
          console.log('fetching backend error check your fetch');  
        } 

        const responseFromBackend = await backendCall.json();  
        if (!responseFromBackend){ 
          console.log('Error retrieving the data'); 
        } 
        // once thats valid now we need to set the state here as such  
        SetUserLoginInfo(responseFromBackend.user); 
        console.log(`retrieved user's username: ${responseFromBackend.user}`); 
      } catch (error) { 
        console.error('There was an error retrieving the backend userdata', error); 
      }
    } 
    fetchuserData(); 
  },[token]); 

  return (
    <div className="container-welcome-div">
      {/*Gets the users credential specifically the username and displays onto the frontend for the dashboard. */} 
      <h1>Welcome {UserLoginInfo}</h1>
    </div>
  );
}