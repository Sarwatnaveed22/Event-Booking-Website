import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from '../images/logo.png'; // Assuming you have this path correct
import '../style/Auth.css'; // Assuming you have this path correct

export default function SignupPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); // Added for confirmation
    const [message, setMessage] = useState(''); // State for messages
    const [messageType, setMessageType] = useState(''); // 'success' or 'error'
    const navigate = useNavigate(); // Initialize navigate hook

    const handleSubmit = async (e) => { // Made async to simulate API call
        e.preventDefault();
        setMessage(''); // Clear previous messages
        setMessageType('');

        // Basic validation
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

        if (password.length < 6) { // Example: Minimum password length
            setMessage('Password must be at least 6 characters long.');
            setMessageType('error');
            return;
        }

        // Simulate signup logic
        console.log('Signup attempt with:', { name, email, password });

        try {
            // Simulate an API call for signup
            // In a real application, you would send this data to your backend
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

            // Simulate successful signup
            setMessage('Account created successfully! Redirecting to home...');
            setMessageType('success');
            // Clear form fields after successful signup
            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');

            // Redirect to homepage after a short delay to show success message
            setTimeout(() => {
                navigate('/'); // Navigate to the home page
            }, 1000);
        } catch (error) {
            console.error('Signup error:', error);
            setMessage('An error occurred during signup. Please try again.');
            setMessageType('error');
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
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
                    <div className="form-group"> {/* Added Confirm Password field */}
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
