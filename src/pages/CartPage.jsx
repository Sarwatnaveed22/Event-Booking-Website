import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/cartContext';
import { Link } from 'react-router-dom';

import '../style/CartPage.css';

import logo from '../images/logo.png';
import Sculpture from "../images/sculpting.jpg";
import Drawing from "../images/drawing.jpg";
import aiImage from "../images/ai.jpg";
import cybersecurityImage from "../images/cybersecurity.jpg";
import webDevImage from "../images/webdev.jpg";
import dataImage from "../images/data.jpg";
import womenImg from "../images/Women_confrence.jpg";
import pitchImg from "../images/StartUpPitch.jpg";
import bootcampImg from "../images/Entrepenur.jpg";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [bookingDone, setBookingDone] = useState(false);

  // Scroll handlers for navbar links
  const scrollToHowItWorks = () => window.scrollTo({ top: 500, behavior: 'smooth' });
  const scrollToContact = () => window.scrollTo({ top: 1000, behavior: 'smooth' });

  const handleQuantityChange = (item, delta) => {
    const newQuantity = item.quantity + delta;
    if (newQuantity <= 0) {
      removeFromCart(item.name);
    } else {
      updateQuantity(item.name, newQuantity);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  };

  const getEventNames = () => {
    return cartItems.map(item => item.name).join(', ');
  };

  const imageMap = {
    sculpture: Sculpture,
    drawing: Drawing,
    ai: aiImage,
    cybersecurity: cybersecurityImage,
    webdev: webDevImage,
    data: dataImage,
    women: womenImg,
    pitch: pitchImg,
    bootcamp: bootcampImg,
  };

  const getImage = (imageKey) => {
    if (!imageKey) return null;
    let key = imageKey.toLowerCase();
    key = key.replace(/\.(jpg|jpeg|png|gif)$/i, '');
    const img = imageMap[key];
    if (img) return img;
    return imageKey;
  };

  const handleCheckout = () => setShowModal(true);

  const handleBooking = () => {
    setBookingDone(true);
    setTimeout(() => {
      localStorage.removeItem('cartItems');
      window.location.reload();
    }, 2000);
  };

  return (
    <>
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

      <div className="cart-wrapper">
        <div className="cart-container">
          <h2 className="cart-title">Your Cart</h2>

          {cartItems.length === 0 ? (
            <p className="empty-message">🛒 Your cart is empty.</p>
          ) : (
            <>
              {cartItems.map((item, index) => (
                <div className="simple-cart-item" key={index}>
                  <img src={getImage(item.image)} alt={item.name} />
                  <div className="cart-item-details">
                    <div className="item-title">{item.name}</div>
                    <div className="item-controls">
                      <button onClick={() => handleQuantityChange(item, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleQuantityChange(item, 1)}>+</button>
                    </div>
                  </div>
                  <div className="item-price">
                    ${item.totalPrice.toFixed(2)}
                    <button className="remove-btn" onClick={() => removeFromCart(item.name)}>Remove</button>
                  </div>
                </div>
              ))}

              <div className='heading1'>
                <h3 id='heading3'>Order Summary</h3>
              </div>

              <div className="summary-box">
                <div className="summary-row">
                  <span>Order Amount</span><span>${calculateTotal().toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Event Ticket Name</span><span>{getEventNames()}</span>
                </div>
                <div className="summary-row">
                  <span>Ticket Quantity</span><span>{getTotalQuantity()}</span>
                </div>
                <div className="summary-row total">
                  <span>Total</span><span>${calculateTotal().toFixed(2)}</span>
                </div>
                <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
              </div>
            </>
          )}
        </div>

        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              {bookingDone ? (
                <h3 className="success-message">✅ Ticket Booking Done!</h3>
              ) : (
                <>
                  <h2>Payment Method</h2>
                  <div className="payment-method">
                    <span className="circle"></span>
                    <span>Cash on Delivery</span>
                  </div>

                  <div className="summary-box checkout-summary">
                    <div className="summary-row">
                      <span>Order amount</span><span>${calculateTotal().toFixed(2)}</span>
                    </div>
                    <div className="summary-row total">
                      <span>Total</span><span>${(calculateTotal() + 2).toFixed(2)}</span>
                    </div>
                  </div>

                  <button className="book-now-btn" onClick={handleBooking}>Confirm Order</button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
