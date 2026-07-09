import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../style/aboutus.css";
import mission from "../images/mission.avif";
import vision from "../images/vision.jpg";
import journey from "../images/journey.jpg";
import about from "../images/about.avif";
import '../style/HomePage.css';
import '../style/BrowseEvents.css'; 
import Header from './Header';

export default function AboutUs() {
  const howItWorksRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToHowItWorks = () => {
    window.location.href = "/#how-it-works";
  };

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="aboutus-page">
      {/* --- Header/Navbar --- */}
      <Header />
      {/* --- Hero Section with Full Image and Blur --- */}
      <section className="about-hero">
        <div className="about-image-wrapper">
          <img src={about} alt="About Eventify" className="about-hero-bg" />
        </div>
        <div className="about-hero-text-overlay">
          <h1>About Eventify</h1>
          <p>
            Empowering students and professionals to discover, attend, and create unforgettable events.
          </p>
        </div>
      </section>

      {/* --- Story Section --- */}
      <section className="our-story">
        <div className="story-text">
          <h2>Our Story</h2>
          <p>
            Eventify was born out of a passion to make event discovery easier and more enjoyable.
            Whether it's tech summits, art symposiums, or entrepreneurial bootcamps—our platform
            connects you to experiences that matter. With a focus on GIFT University and surrounding
            communities, we bridge the gap between talent and opportunity.
          </p>
        </div>
        <div className="story-image">
          <img src={journey} alt="Our Journey" />
        </div>
      </section>

      {/* --- Mission / Vision Cards --- */}
      <section className="info-cards">
        <div className="info-card">
          <img src={mission} alt="Mission" />
          <h3>Our Mission</h3>
          <p>
            To inspire and connect learners by providing access to high-quality events and workshops that ignite passion and purpose.
          </p>
        </div>
        <div className="info-card">
          <img src={vision} alt="Vision" />
          <h3>Our Vision</h3>
          <p>
            Building a future where learning through events is seamless, engaging, and accessible to all.
          </p>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="footer" ref={contactRef}>
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
              <li><a onClick={scrollToHowItWorks} style={{ cursor: "pointer" }}>How it Works</a></li>
              <li><a onClick={scrollToContact} style={{ cursor: "pointer" }}>Contact</a></li>
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
