import { useState, useEffect } from 'react';
import "../styles/Dashboard.css"; 

export default function DashboardPage() {

  const [userLoginInfo, setUserLoginInfo] = useState('');
  const token = localStorage.getItem('authToken');

  useEffect(() => {
    const fetchUserData = async () => {
      if (!token) {
        console.log('No auth token found');
        return;
      }

      try {
        const backendCall = await fetch(`http://localhost:7898/api/v1/userprotected`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}` // similar to an actual auth bearer token form to get the token.
          }
        });

        if (!backendCall.ok) {
          console.log('fetching backend error check your fetch');
          return;
        }

        const responseFromBackend = await backendCall.json();
        if (!responseFromBackend) {
          console.log('Error retrieving the data');
          return;
        }

        setUserLoginInfo(responseFromBackend.user); // set the state 
        console.log(`retrieved user's username: ${responseFromBackend.user}`);
      } catch (error) {
        console.error('There was an error retrieving the backend userdata', error);
      }
    };
    fetchUserData();
  }, [token]);

  return (
    <div className="container-welcome-div">
      <h1 className='title-user'>Welcome {userLoginInfo}</h1>
    </div>
  );
}