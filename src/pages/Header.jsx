// src/components/Header.jsx
import React, { useRef, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import '../style/Header.css';
import logo from "../images/logo.png";
import cartIcon from "../images/cart-icon.png";
import profileIcon from "../images/profile-icon.png";

export default function Header() {
  const bookSectionRef = useRef(null);
  const howItWorksRef = useRef(null);
  const contactRef = useRef(null);

  const { userInfo, setuserInfo } = useAuth();
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Call backend to clear session
      await fetch("http://localhost:5000/api/logout", {
        method: "POST",
        credentials: "include",
      });

      // Clear frontend session
      localStorage.removeItem('user');
      setuserInfo(null);
      setShowPopup(false);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const scrollToHowItWorks = () => {
    howItWorksRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navbar">
      {/* Left logo and brand */}
      <div className="navbar-left">
        <img src={logo} className="logo-img" alt="Eventify Logo" />
        <span className="brand-name">Eventify</span>
      </div>

      {/* Center navigation links */}
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/browse-events">Browse Events</Link>
        <span onClick={scrollToHowItWorks} style={{ cursor: "pointer" }}>How it Works</span>
        <Link to="/about">About</Link>
        <span onClick={scrollToContact} style={{ cursor: "pointer" }}>Contact</span>
      </nav>

      {/* Right side: Auth & Profile */}
      <div className="auth-buttons">
        {userInfo && userInfo.name ? (
          <>
            <Link to="/cart" className="cart-icon-wrapper">
              <img src={cartIcon} alt="Cart" className="cart-icon" />
            </Link>
            <div style={{ position: 'relative' }}>
              <img
                src={profileIcon}
                alt="Profile"
                className="profile-icon"
                onClick={() => setShowPopup(!showPopup)}
                style={{ cursor: 'pointer' }}
              />
              {showPopup && (
                <div className="profile-popup">
                  <p>Good Morning, <strong>{userInfo.name}</strong>!</p>
                  <button className="logout-btn" onClick={handleLogout}>Sign Out</button>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="login-btn">Login</button>
            </Link>
            <Link to="/signup">
              <button className="signup-btn">Signup</button>
            </Link>
            <Link to="/signup" className="cart-icon-wrapper">
              <img src={cartIcon} alt="Cart" className="cart-icon" />
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
