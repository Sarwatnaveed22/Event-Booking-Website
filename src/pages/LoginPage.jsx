import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from '../images/logo.png'; // Assuming you have this path correct
import '../style/Auth.css'; // Assuming you have this path correct

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(''); // State for messages
    const [messageType, setMessageType] = useState(''); // 'success' or 'error'
    const navigate = useNavigate(); // Initialize navigate hook

    const handleSubmit = async (e) => { // Made async to simulate API call
        e.preventDefault();
        setMessage(''); // Clear previous messages
        setMessageType('');

        // Basic validation
        if (!email || !password) {
            setMessage('Please enter both email and password.');
            setMessageType('error');
            return;
        }

        // Simulate login logic
        console.log('Login attempt with:', { email, password });

        try {
            // Simulate an API call for login
            // In a real application, you would make a fetch or axios call to your backend
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

            // Simulate successful login for specific credentials
            if (email === 'test@example.com' && password === 'password123') {
                setMessage('Login successful! Redirecting to home...');
                setMessageType('success');
                // Redirect to homepage after a short delay to show success message
                setTimeout(() => {
                    navigate('/'); // Navigate to the home page
                }, 1000);
            } else {
                setMessage('Invalid email or password. Please try again.');
                setMessageType('error');
            }
        } catch (error) {
            console.error('Login error:', error);
            setMessage('An error occurred during login. Please try again.');
            setMessageType('error');
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
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
