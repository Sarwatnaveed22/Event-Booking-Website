import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import events from '../events'; // Ensure this path is correct
import logo from '../images/logo.png'; // Ensure this path is correct
import '../style/HomePage.css'; // Assuming you have this path correct
import '../style/BrowseEvents.css'; // Assuming you have this path correct

export default function BrowseEventsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Dynamically generate categories from the events data
    const categories = ['All', ...new Set(events.map(event => event.category))];

    const filteredEvents = events.filter(event => {
        const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              event.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="browse-events-page">
            {/* Navbar */}
            <header className="navbar">
                <div className="navbar-left">
                    {/* Fallback for logo if image is not found */}
                    <img src={logo} className="logo-img" alt="Eventify Logo" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/50x50/aabbcc/ffffff?text=Logo"; }} />
                    <span className="brand-name">Eventify</span>
                </div>
                <nav className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/browse-events">Browse Events</Link>
                    {/* Assuming these are sections on your homepage, hence the hash links */}
                    <Link to="/#how-it-works">How it Works</Link>
                    <Link to="/#about">About</Link>
                    <Link to="/#contact">Contact</Link>
                </nav>
                <div className="auth-buttons">
                    <Link to="/login"><button className="login-btn">Login</button></Link>
                    <Link to="/signup"><button className="signup-btn">Signup</button></Link>
                </div>
            </header>

            {/* Hero Section */}
            <section className="browse-hero">
                <div className="browse-hero-content">
                    <h1>Explore All Events</h1>
                    <p>Find the perfect event that matches your interests and schedule.</p>
                </div>
            </section>

            {/* Search and Filter */}
            <section className="search-filter-section">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search events by title or description..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="search-btn">Search</button>
                </div>
                <div className="filter-options">
                    <label htmlFor="category-filter">Filter by Category:</label>
                    <select
                        id="category-filter"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
            </section>

            {/* Events List */}
            <section className="events-listing">
                <h2>Upcoming Events</h2>
                {filteredEvents.length > 0 ? (
                    <div className="event-grid">
                        {filteredEvents.map((event) => (
                            <div className="event-card" key={event.id}>
                                {/* Event Image */}
                                <div className="event-image-container">
                                    <img
                                        src={event.imageUrl}
                                        alt={event.title}
                                        className="event-image"
                                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x250/cccccc/333333?text=No+Image"; }} // Fallback image
                                    />
                                </div>
                                <div className="event-card-content">
                                    <h3>{event.title}</h3>
                                    <p className="event-category">{event.category}</p>
                                    <p className="event-description">{event.description}</p>
                                    <p className="event-info">📅 {event.date} {event.time && `- ${event.time}`}</p>
                                    <p className="event-info">📍 {event.location}</p>
                                    <Link to={`/events/${event.id}`}>
                                        <button className="details-btn">View Details</button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="no-events-message">No events found matching your criteria.</p>
                )}
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-columns">
                    <div>
                        <h3>Eventify</h3>
                        <p>Your gateway to unforgettable events and workshops.</p>
                    </div>
                    <div>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/browse-events">Events</Link></li>
                            <li><Link to="/#how-it-works">How it Works</Link></li>
                            <li><Link to="/#about">About</Link></li>
                            <li><Link to="/#contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Account</h4>
                        <ul>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/signup">Signup</Link></li>
                            <li><a href="#">My Bookings</a></li> {/* Optional future fix */}
                        </ul>
                    </div>
                    <div>
                        <h4>Contact</h4>
                        <p>Email: support@eventify.com</p>
                        <p>Phone: +92 (305) 1235678</p>
                        <p>Location: GIFT University, Gujranwala</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Eventify. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
