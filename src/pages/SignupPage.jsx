import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import logo from '../images/logo.png';
import '../style/Auth.css'; 
import { useAuth } from '../contexts/authContext';
import { FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';

export default function SignupPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); 
    const [message, setMessage] = useState(''); 
    const [messageType, setMessageType] = useState(''); 
    const navigate = useNavigate(); 

    const { userInfo, setuserInfo } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setMessageType('');

        // Validation
        if (!name || !email || !password || !confirmPassword) {
            setMessage('All fields are required.');
            setMessageType('error');
            return;
        }

        if (password !== confirmPassword) {
            setMessage('Passwords do not match.');
            setMessageType('error');
            return;
        }

        if (password.length < 6) {
            setMessage('Password must be at least 6 characters long.');
            setMessageType('error');
            return;
        }

        try {
            const res = await axios.post('http://localhost:5000/api/users/signup', {
                name,
                email,
                password,
            });
            setuserInfo(res.data); 
            localStorage.setItem('userInfo', JSON.stringify(res.data)); 
            setMessage('Account created successfully! Redirecting to login...');
            setMessageType('success');

            setTimeout(() => {
                navigate('/login'); 
            }, 1000);
        } catch (error) {
  console.error('Registration failed:', error);
  const errMsg = error.response?.data?.error || 'Registration failed. Please try again.';
  setMessage(errMsg);
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
                    <h2>Join Eventify Today!</h2>
                    <p>Create an account to start booking amazing events.</p>
                </div>
                <form className="auth-form" onSubmit={handleSubmit}>
                    {message && (
                        <div className={`message-box ${messageType === 'error' ? 'error' : 'success'}`}>
                            {message}
                        </div>
                    )}
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
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
                            placeholder="Create a password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group"> 
                        {/* Added Confirm Password field */}
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input
                            type="password"
                            id="confirm-password"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="auth-btn">Sign Up</button>
                </form>
                <p className="auth-footer">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
}
