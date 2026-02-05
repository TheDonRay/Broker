import { useState, useEffect } from 'react';
import '../styles/Dashboard.css';

export default function Dashboard() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return(
    <>
      <div>
        <h1 className='dashtitle'>Ready to Invest, {username}</h1>
      </div>
    </>
  )
}