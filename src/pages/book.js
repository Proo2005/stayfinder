// src/pages/Book.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/book.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Book() {
  const location = useLocation();
  const bnb = location.state?.bnb;
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  const navigate = useNavigate();

  const handleReserve = () => {
    const booking = {
      id: Date.now(), // unique ID
      hotel: bnb.name,
      guests,
      checkIn,
      checkOut,
      amount: bnb.price // optional: calculate price x nights
    };

    // Get existing bookings
    const existing = JSON.parse(localStorage.getItem('bookings')) || [];

    // Add new booking
    localStorage.setItem('bookings', JSON.stringify([...existing, booking]));

    // Navigate to bookings page
    navigate('/Bookings');
  };


  if (!bnb) {
    return <div className="book-container">Listing not found.</div>;
  }

  return (
    <div className="book-container">
      <h1 className="book-title">{bnb.name}</h1>
      <div className="book-content">
        <div className="left-section">
          <div className="image-gallery">
            <img src={bnb.image} alt={bnb.name} className="main-image" />
            <img src={bnb.image} alt="1" />
            <img src={bnb.image} alt="2" />
            <img src={bnb.image} alt="3" />
          </div>
          <div className="details-section">
            <p><strong>Location:</strong> Goa, India</p>
            <p><strong>Room Type:</strong> Entire Villa</p>
            <p><strong>Certifications:</strong></p>
            <ul>
              <li>Cleanliness Certified</li>
              <li>Verified Host</li>
              <li>24x7 Customer Support</li>
            </ul>
          </div>
        </div>
        <div className="right-section">
          <h3>Book Your Stay</h3>
          <label>Check-in</label>
          <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
          <label>Check-out</label>
          <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
          <label>Guests</label>
          <input type="number" min="1" max="10" value={guests} onChange={(e) => setGuests(e.target.value)} />
          <p><strong>Price:</strong> {bnb.price}</p>
          <button onClick={handleReserve}>Reserve</button>
        </div>

      </div>
    </div>
  );
}
