import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/companydetails.css';


export default function CompanyDetails() {




  return (
  <>
    <div className="page-wrapper">
      <div className="content">
        {/* ✅ Navbar */}
        <nav className="navbar">
          <div className="navbar-left">
            <h1>StayFinder</h1>
          </div>
          <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>

        {/* ✅ Company Details Section */}
        <section className="details">
          <h2>📄 Company Details</h2>
          <p><strong>Provider of Website:</strong> StayFinder India</p>
          <p><strong>Directors:</strong> Prodipta Chakraborty</p>
          <p><strong>VAT ID:</strong> ABCD1234</p>
          <p><strong>Trade Register:</strong> West Bengal Company</p>

          <h3>📬 Contact Us</h3>
          <p><strong>Email Address:</strong> <a href="mailto:stayfinder@gmail.com">stayfinder@gmail.com</a></p>
          <p><strong>StayFinder Support:</strong> <a href="https://www.stayfinder.co.in/help/contact_us" target="_blank" rel="noopener noreferrer">https://www.stayfinder.co.in/help/contact_us</a></p>
        </section>
      </div>

      {/* ✅ Footer */}
      <footer className="footer">
        <p>2025 StayFinder, Inc. All rights reserved.</p>
      </footer>
    </div>
  </>
);

}
