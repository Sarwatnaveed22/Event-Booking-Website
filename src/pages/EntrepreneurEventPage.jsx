import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../style/EntrepreneurEvent.css";
import logo from "../images/logo.png";
import bannerImg from "../images/entrepreneur_banner.jpg";
import womenImg from "../images/Women_confrence.jpg";
import pitchImg from "../images/StartUpPitch.jpg";
import bootcampImg from "../images/Entrepenur.jpg";
import EntrepreneurBookingPanel from "./EntrepreneurBookingPanel";

const entrepreneurEvents = [
  {
    id: 1,
    name: "Women in Entrepreneurship",
    date: "2025-08-30",
    location: "Lahore Expo Center",
    price: 0,
    image: womenImg,
    description:
      "An empowering event spotlighting women-led businesses. Network, learn, and grow with inspiring female founders.",
  },
  {
    id: 2,
    name: "Startup Pitch Night",
    date: "2025-09-05",
    location: "Karachi Innovation Hub",
    price: 500,
    image: pitchImg,
    description:
      "Pitch your startup idea to investors and mentors. A perfect chance to get funding and valuable feedback.",
  },
  {
    id: 3,
    name: "From Idea to Launch: Startup Bootcamp",
    date: "2025-10-01",
    location: "Gaddafi Auditorium, Lahore",
    price: 1000,
    image: bootcampImg,
    description:
      "A practical bootcamp to turn ideas into startups. Learn, build, and launch with expert guidance.",
  },
];

export default function EntrepreneurEventPage() {
  const [showPanel, setShowPanel] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const howItWorksRef = useRef(null);

  const scrollToHowItWorks = () => {
    howItWorksRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    const day = d.toLocaleDateString("en-US", { weekday: "long" });
    return `${dateStr} (${day})`;
  };

  return (
    <div className="entrepreneur-event-page">
      {/* ✅ Navbar */}
      <header className="navbar">
        <div className="navbar-left">
          <img src={logo} className="logo-img" alt="Eventify Logo" />
          <span className="brand-name">Eventify</span>
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/browse-events">Browse Events</Link>
          <a onClick={scrollToHowItWorks} style={{ cursor: "pointer" }}>
            How it Works
          </a>
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

      {/* ✅ Hero section */}
      <div
        className="entrepreneur-hero"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <h2> Explore Entrepreneurial Opportunities</h2>
      </div>

      <h2 className="available-heading1">Available Events</h2>

      {/* ✅ Event Cards */}
      <div className="entrepreneur-card-grid">
        {entrepreneurEvents.map((event) => (
          <div className="entrepreneur-card" key={event.id}>
            <img src={event.image} alt={event.name} className="artist-img" />
            <div className="card-body">
              <div className="card-content">
                <h2>{event.name}</h2>
                <p>{event.description}</p>
                <p>📅 {formatDate(event.date)}</p>
                <p>📍 {event.location}</p>
                <p>🎫 Ticket: {event.price === 0 ? "Free" : `Rs. ${event.price}`}</p>
              </div>
              <button
                className="entrepreneur-btn"
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
        <EntrepreneurBookingPanel
          event={selectedEvent}
          onClose={() => {
            setShowPanel(false);
            setSelectedEvent(null);
          }}
        />
      )}

      {/* ✅ Footer */}
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
