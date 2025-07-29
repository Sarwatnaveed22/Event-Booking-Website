// src/components/ArtBookingPanel.jsx
import React, { useState } from 'react';
import '../style/ArtBookingPanel.css';

export default function ArtBookingPanel({ event, onClose }) {
  const [quantity, setQuantity] = useState(1);
  const pricePerTicket = event.price;
  const totalPrice = quantity * pricePerTicket;

  return (
    <div className="booking-panel">
      <div className="booking-header">
        <h2>🎨 Book {event.name} Event</h2>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>

      <form className="booking-form">
        <label>
          Name:
          <input type="text" placeholder="Enter your name" required />
        </label>
        <label>
          Email:
          <input type="email" placeholder="Enter your email" required />
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

        <button type="submit" className="confirm-btn">Confirm Booking</button>
      </form>
    </div>
  );
}
