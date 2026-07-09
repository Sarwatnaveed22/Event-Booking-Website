import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import logo from '../images/logo.png'; 
import '../style/Auth.css'; 
import axios from 'axios';
import { useAuth } from '../contexts/authContext';
import { FaArrowLeft } from 'react-icons/fa';

export default function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');
    const navigate = useNavigate();

    const { userInfo, setuserInfo } = useAuth(); 


    const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setMessageType('');

    if (!email || !password) {
        setMessage('Please enter both email and password.');
        setMessageType('error');
        return;
    }

    // Define your hardcoded admin credentials
    const adminEmail = 'admin@example.com';
    const adminPassword = 'admin123';

    try {
        const res = await axios.post('http://localhost:5000/api/users/login', {
            email,
            password,
        });

        const user = res.data.user;
        setuserInfo(user);
        localStorage.setItem('userInfo', JSON.stringify(user));

        // Check if admin
        if (email === adminEmail && password === adminPassword) {
            setMessage('Admin login successful! Redirecting...');
            setMessageType('success');

            setTimeout(() => {
                navigate('/admin/dashboard'); // Redirect to Admin Dashboard
            }, 1000);
        } else {
            setMessage('Login successful! Redirecting...');
            setMessageType('success');

            setTimeout(() => {
                navigate('/'); // Regular user redirect
            }, 1000);
        }

    } catch (error) {
        console.error('Login failed:', error.response?.data?.message || error.message);

        if (email === adminEmail && password !== adminPassword) {
            setMessage('Incorrect admin password.');
        } else {
            setMessage('Login failed. Please check your credentials and try again.');
        }

        setMessageType('error');
    }
};


    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="back-arrow" onClick={() => navigate('/')}>
                    <FaArrowLeft style={{ marginRight: '8px' }} />
                    <span>Back</span>
                </div>
                <div className="auth-header">
                    {/* Fallback for logo if image is not found */}
                    <img src={logo} alt="Eventify Logo" className="auth-logo" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x100/aabbcc/ffffff?text=Logo"; }} />
                    <h2>Welcome Back!</h2>
                    <p>Login to discover and book exciting events.</p>
                </div>
                <form className="auth-form" onSubmit={handleSubmit}>
                    {message && (
                        <div className={`message-box ${messageType === 'error' ? 'error' : 'success'}`}>
                            {message}
                        </div>
                    )}
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="auth-btn">Login</button>
                </form>
                <p className="auth-footer">
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
            </div>
        </div>
    );
}