// src/pages/MusicEventPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/ArtBookingEvent.css";
import logo from "../images/logo.png";
import drawing1 from "../images/drawing.jpg";
import Sculpure from "../images/sculpting.jpg";
import bannerImg from "../images/aa.jpeg";
// import ArtBookingPanel from "../pages/ArtBookingPanel";
import cartIcon from "../images/shopping-cart.png";
import UniversalBookingPanel from './UniversalBookingPanel';
const ArtEvents = [
  {
    id: 1,
    name: "Drawing",
    date: "2025-10-31",
    location: "Lahore Expo Center",
    price: 1000,
    image: drawing1,
  },
  {
    id: 2,
    name: "Sculpure",
    date: "2025-12-12",
    location: "Karachi Arena",
    price: 1500,
    image: Sculpure,
  }
  
];

export default function ArtBookingEvent() {
  const [showPanel, setShowPanel] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    const day = d.toLocaleDateString("en-US", { weekday: "long" });
    return `${dateStr} (${day})`;
  };
   const scrollToHowItWorks = () => {
    howItWorksRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="Art-event-page">
      
      {/* ✅ Navbar inserted here */}
      <header className="navbar">
        <div className="navbar-left">
          <img src={logo} className="logo-img" alt="Eventify Logo" />
          <span className="brand-name">Eventify</span>
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/browse-events">Browse Events</Link>
          <a href="#">How it Works</a>
          <a href="#">About</a>
          <a href="#">Contact</a>

        </nav>
        <div className="auth-buttons">
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
          <Link to="/signup">
            <button className="signup-btn">Signup</button>
          </Link>
          <Link to="/cart" className="cart-icon-wrapper">
          <img src={cartIcon} alt="Cart" className="cart-icon" />
          </Link>
        </div>
      </header>

      {/* Hero section */}
      <div className="art-hero" style={{ backgroundImage: `url(${bannerImg})` }}>
        <h2>Explore Upcoming Art Events</h2>
      </div>
     {/* ✅ Available Events Heading */}
      <h2 className="available-heading">Available Events</h2>
      {/* Event cards */}
      <div className="Art-card-grid">
        {ArtEvents.map((art) => (
          <div className="art-card" key={art.id}>
            <img src={art.image} alt={art.name} className="artist-img" />
            <div className="card-body">
              <h2>{art.name}</h2>
              <p>📅 {formatDate(art.date)}</p>
              <p>📍 {art.location}</p>
              <p>🎫 Ticket: Rs. {art.price}</p>
              <button
                className="art-btn"
                onClick={() => {
                  setSelectedEvent(art);
                  setShowPanel(true);
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Side panel */}
      {showPanel && selectedEvent && (
        <UniversalBookingPanel
          event={selectedEvent}
          onClose={() => {
            setShowPanel(false);
            setSelectedEvent(null);
          }}
        />
      )}
       {/* ✅ Footer with scroll fix */}
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
                    <li>
                      <a onClick={scrollToHowItWorks} style={{ cursor: "pointer" }}>
                        How it Works
                      </a>
                    </li>
                    <li><a href="#">Contact</a></li>
                    
                  </ul>
                </div>
                <div>
                  <h4>Account</h4>
                  <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><a href="#">My Bookings</a></li>
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
