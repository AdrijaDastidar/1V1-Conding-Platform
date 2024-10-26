import React from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Coding Standoff</h1>
      </div>
      <div className="navbar-right">
        <Link to="/home">Home</Link> 
        <Link to="/training">Training</Link> 
        <Link to="/help">Help</Link> 
      </div>
    </nav>
  );
}

export default Navbar;
