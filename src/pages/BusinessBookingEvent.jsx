import React from "react";
import { Link } from "react-router-dom";
import "../style/BusinessBookingEvent.css";
import logo from "../images/logo.png";

export default function BusinessBookingEvent() {
    const scrollToHowItWorks = () => {
    howItWorksRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="business-event-page">

      {/* ✅ Navbar (Same as other pages) */}
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

      {/* ❗ Centered "No Event" Message */}
      <div className="no-event-message">
        <h2>No Business Events are available at the moment.</h2>
      </div>
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
