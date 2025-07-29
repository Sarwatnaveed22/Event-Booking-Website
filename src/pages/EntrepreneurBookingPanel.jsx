// src/pages/EntrepreneurBookingPanel.jsx
import React, { useState } from 'react';
import '../style/EntrepreneurBookingPanel.css';

export default function EntrepreneurBookingPanel({ event, onClose }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const pricePerTicket = event.price;
  const totalPrice = quantity * pricePerTicket;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    // Show success popup
    setShowSuccess(true);

    // Hide popup after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className="booking-panel">
      <div className="booking-header">
        <h2>🚀 Register for {event.name}</h2>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>

      <form className="booking-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            placeholder="Enter your name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Event Name:
          <input type="text" value={event.name} readOnly />
        </label>
        <label>
          Location:
          <input type="text" value={event.location} readOnly />
        </label>
        <label>
          Tickets:
          <div className="ticket-counter">
            <button type="button" onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
            <span>{quantity}</span>
            <button type="button" onClick={() => setQuantity(q => q + 1)}>+</button>
          </div>
        </label>
        <label>
          Total Price:
          <input type="text" value={`Rs. ${totalPrice}`} readOnly />
        </label>

        <button type="submit" className="confirm-btn">Confirm Registration</button>
      </form>

      {showSuccess && (
        <div className="success-popup">
          ✅ Registration successfully confirmed!
        </div>
      )}
    </div>
  );
}
