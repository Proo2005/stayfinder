import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login';
import Register from './pages/Register';
import Book from './pages/book';
import Bookings from './pages/Bookings';
import CompanyDetails from './pages/companydetails';

// Add other routes for other pages like PropertyDetails, SearchResults when ready
// Add other imports like PropertyDetails, SearchResults when ready

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/book" element={<Book />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/companydetails" element={<CompanyDetails />} />

        {/* <Route path="/property/:id" element={<PropertyDetails />} /> */}
        {/* <Route path="/search" element={<SearchResults />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
