// src/pages/Bookings.js
import React, { useEffect, useState } from 'react';
import '../styles/bookings.css';
import { Link } from 'react-router-dom';

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(data);
  }, []);

  const handleDelete = (id) => {
    const updated = bookings.filter(b => b.id !== id);
    localStorage.setItem('bookings', JSON.stringify(updated));
    setBookings(updated);
  };

  return (
    <div className="bookings-container">
      {/* ✅ Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <h1>StayFinder</h1>
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>

      <h2 className="booking-title">My Bookings</h2>

      <div className="booking-list">
        {bookings.length === 0 ? (
          <p>No bookings found.</p>
        ) : (
          bookings.map((booking) => (
            <div className="booking-card" key={booking.id}>
              <h3>{booking.hotel}</h3>
              <p><strong>Guests:</strong> {booking.guests}</p>
              <p><strong>Check-in:</strong> {booking.checkIn}</p>
              <p><strong>Check-out:</strong> {booking.checkOut}</p>
              <p><strong>Amount:</strong> ₹{booking.amount}</p>
              <button className="delete-button" onClick={() => handleDelete(booking.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
