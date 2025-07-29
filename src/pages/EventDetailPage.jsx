import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import events from '../events'; // Ensure this path is correct
import logo from '../images/logo.png'; // Ensure this path is correct
import '../style/HomePage.css'; // Assuming you have this path correct
import '../style/EventDetail.css'; // Assuming you have this path correct
import BookEventPanel from './BookEventPanel'; // <- Import booking panel

export default function EventDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [showBookingPanel, setShowBookingPanel] = useState(false); // <- State for panel

    const event = events.find(e => e.id === parseInt(id));

    if (!event) {
        return (
            <div className="event-detail-page">
                <header className="navbar">
                    <div className="navbar-left">
                        {/* Fallback for logo if image is not found */}
                        <img src={logo} className="logo-img" alt="Eventify Logo" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/50x50/aabbcc/ffffff?text=Logo"; }} />
                        <span className="brand-name">Eventify</span>
                    </div>
                    <nav className="nav-links">
                        <Link to="/">Home</Link>
                        <Link to="/browse-events">Browse Events</Link>
                        <a href="/#how-it-works">How it Works</a>
                        <a href="/#about">About</a>
                        <a href="/#contact">Contact</a>
                    </nav>
                    <div className="auth-buttons">
                        <Link to="/login"><button className="login-btn">Login</button></Link>
                        <Link to="/signup"><button className="signup-btn">Signup</button></Link>
                    </div>
                </header>

                <div className="event-not-found">
                    <h2>Event Not Found</h2>
                    <p>The event you are looking for does not exist.</p>
                    <button onClick={() => navigate('/browse-events')} className="primary-btn">
                        Go to Browse Events
                    </button>
                </div>

                <footer className="footer">
                    <div className="footer-columns">
                        <div><h3>Eventify</h3><p>Your gateway to unforgettable events and workshops.</p></div>
                        <div><h4>Quick Links</h4><ul><li><Link to="/">Home</Link></li><li><Link to="/browse-events">Events</Link></li><li><a href="#">How it Works</a></li><li><a href="#">Contact</a></li></ul></div>
                        <div><h4>Account</h4><ul><li><Link to="/login">Login</Link></li><li><Link to="/signup">Signup</Link></li><li><a href="#">My Bookings</a></li></ul></div>
                        <div><h4>Contact</h4><p>Email: support@eventify.com</p><p>Phone: +92 (305) 1235678</p><p>Location: GIFT University, Gujranwala</p></div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} Eventify. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        );
    }

    const handleBookEvent = () => {
        setShowBookingPanel(true); // <- Show booking panel
    };

    return (
        <div className="event-detail-page">
            <header className="navbar">
                <div className="navbar-left">
                    {/* Fallback for logo if image is not found */}
                    <img src={logo} className="logo-img" alt="Eventify Logo" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/50x50/aabbcc/ffffff?text=Logo"; }} />
                    <span className="brand-name">Eventify</span>
                </div>
                <nav className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/browse-events">Browse Events</Link>
                    <a href="/#how-it-works">How it Works</a> {/* Corrected hash link */}
                    <a href="/#about">About</a> {/* Corrected hash link */}
                    <a href="/#contact">Contact</a> {/* Corrected hash link */}
                </nav>
                <div className="auth-buttons">
                    <Link to="/login"><button className="login-btn">Login</button></Link>
                    <Link to="/signup"><button className="signup-btn">Signup</button></Link>
                </div>
            </header>

            <section className="event-details-section">
                <div className="detail-card">
                    <button onClick={() => navigate(-1)} className="back-btn">
                        &larr; Back to Events
                    </button>
                    {/* Event Image */}
                    <div className="detail-image-container">
                        <img
                            src={event.imageUrl} // Make sure event data includes imageUrl
                            alt={event.title}
                            className="detail-image"
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x450/cccccc/333333?text=Event+Image"; }} // Fallback image
                        />
                    </div>

                    <div className="detail-content">
                        <h1 className="detail-title">{event.title}</h1>
                        <p className="detail-category">{event.category}</p>
                        <p className="detail-description">{event.description}</p>
                        <div className="detail-info">
                            <p><strong>📅 Date:</strong> {event.date}</p>
                            <p><strong>⏰ Time:</strong> {event.time || 'Not specified'}</p>
                            <p><strong>📍 Location:</strong> {event.location}</p>
                            {event.price && <p><strong>💲 Price:</strong> ${event.price}</p>} {/* Display price if available */}
                        </div>
                        <button onClick={handleBookEvent} className="book-event-btn">
                            Book This Event
                        </button>
                    </div>
                </div>
            </section>

            {/* Booking Panel */}
            {showBookingPanel && (
                <BookEventPanel
                    event={{
                        name: event.title,
                        location: event.location,
                        price: event.price || 1000, // Default price if not specified
                    }}
                    onClose={() => setShowBookingPanel(false)}
                />
            )}

            <footer className="footer">
                <div className="footer-columns">
                    <div><h3>Eventify</h3><p>Your gateway to unforgettable events and workshops.</p></div>
                    <div><h4>Quick Links</h4><ul><li><Link to="/">Home</Link></li><li><Link to="/browse-events">Events</Link></li><li><a href="/#how-it-works">How it Works</a></li><li><a href="/#about">About</a></li><li><a href="/#contact">Contact</a></li></ul></div>
                    <div><h4>Account</h4><ul><li><Link to="/login">Login</Link></li><li><Link to="/signup">Signup</Link></li><li><a href="#">My Bookings</a></li></ul></div>
                    <div><h4>Contact</h4><p>Email: support@eventify.com</p><p>Phone: +92 (305) 1235678</p><p>Location: GIFT University, Gujranwala</p></div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Eventify. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
