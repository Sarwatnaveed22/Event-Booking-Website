// src/pages/TechBookingEvent.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/TechBookingEvent.css";
import logo from "../images/logo.png";
import aiImage from "../images/ai.jpg";
import cybersecurityImage from "../images/cybersecurity.jpg";
import webDevImage from "../images/webdev.jpg";
import dataImage from "../images/data.jpg";
import techBanner from "../images/Tech_Banner.jpg";
// import TechBookingPanel from "./TechBookingPanel";
import UniversalBookingPanel from './UniversalBookingPanel';

const TechEvents = [
  {
    id: 1,
    name: "AI & Machine Learning Conference",
    date: "2025-09-15",
    location: "Nust Auditorium, Islamabad",
    price: 2000,
    image: aiImage,
    description: "Explore the latest trends in Artificial Intelligence and Machine Learning from top speakers across the globe."
  },
  {
    id: 2,
    name: "Cybersecurity Bootcamp",
    date: "2025-11-20",
    location: "Arfa Tower, Lahore",
    price: 1500,
    image: cybersecurityImage,
    description: "Hands-on ethical hacking sessions, security practices, and threat analysis in this intensive bootcamp."
  },
  {
    id: 3,
    name: "Full-Stack Web Dev Summit",
    date: "2025-10-05",
    location: "Expo Center, Karachi",
    price: 1800,
    image: webDevImage,
    description: "Frontend to backend — explore modern web dev stacks, frameworks and best practices."
  },
  {
    id: 4,
    name: "Data Science Expo",
    date: "2025-12-10",
    location: "FAST University, Lahore",
    price: 1700,
    image: dataImage,
    description: "Hands-on data analytics workshops, AI models and real-world case studies."
  }
];

export default function TechBookingEvent() {
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
    <div className="Tech-event-page">
      {/* ✅ Navbar */}
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
        </div>
      </header>
      

      {/* ✅ Hero Section */}
      <div className="tech-hero" style={{ backgroundImage: `url(${techBanner})` }}>
        <h2> Discover Top Tech Events Around You</h2>
      </div>

      {/* ✅ Available Events Heading */}
      <h2 className="available-heading3">Available Events</h2>

      {/* ✅ Event Cards */}
      <div className="Tech-card-grid">
        {TechEvents.map((event) => (
          <div className="tech-card" key={event.id}>
            <img src={event.image} alt={event.name} className="tech-img" />
            <div className="card-body">
              <h2>{event.name}</h2>
              <p>{event.description}</p>
              <p>📅 {formatDate(event.date)}</p>
              <p>📍 {event.location}</p>
              <p>🎫 Ticket: Rs. {event.price}</p>
              <button
                className="buy-btn"
                onClick={() => {
                  setSelectedEvent(event);
                  setShowPanel(true);
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Booking Side Panel */}
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
