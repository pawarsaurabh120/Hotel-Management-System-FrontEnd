import React from 'react';
import { Link } from 'react-router-dom'; 
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-logo"></Link>
        
            <p className="navbarMenu"><Link to="/">Home</Link></p>
            <p className="navbarMenu"><Link to="/login">LogIn</Link></p>
            <p className="navbarMenu"><Link to="/showroom">Room</Link></p>

      </div>
    </nav>
  );
}

export default Navbar;