import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboardpage() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProtectedData = async () => {
            try {
                const token = localStorage.getItem('authToken');
                
                if (!token) {
                    setError('No authentication token found. Please login first.');
                    setLoading(false);
                    setTimeout(() => navigate('/'), 2000);
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
                    setUserData(data.user);
                } else {
                    setError(data.Error || 'Failed to fetch user data');
                    setTimeout(() => navigate('/'), 2000);
                }
            } catch (error) {
                setError('Error fetching user data');
                console.error(error);
                setTimeout(() => navigate('/'), 2000);
            } finally {
                setLoading(false);
            }
        };

        fetchProtectedData();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/');
    };

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return (
        <div>
            <h1>Welcome, {userData?.username}!</h1>
            <p>You are successfully logged in.</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}