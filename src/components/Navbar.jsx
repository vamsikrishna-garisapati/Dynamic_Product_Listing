import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Assuming you create a CSS file for custom styles

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="/src/assets/logo.png" alt="Logo" className="logo" /> {/* Add your logo here */}
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse fs-4" id="navbarNav">
          <ul className="navbar-nav mx-auto"> 
            <li className="nav-item">
              <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className="nav-link" activeClassName="active">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;