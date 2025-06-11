import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../assets/styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top shadow-sm">
      <div className="container d-flex align-items-center justify-content-between">
        <Link className="custom-nav navbar-brand" to="/">
          Presento<span className="text-danger">.</span>
        </Link>

        <div className="d-lg-none me-1">
          <Link to="/get-started" className="btn btn-danger px-3 py-2">
            Get Started
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <NavLink className="nav-link" end to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/team">Team</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog">Blog</NavLink>
            </li>
            <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#!"
        id="dropdownMenu"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown
      </a>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
        {/* First level dropdown item with nested submenu */}
        <li className="dropdown-submenu">
          <a
            className="dropdown-item dropdown-toggle"
            href="#!"
            id="dropdownSubMenu1"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown 1
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/dropdown2">Sub Item 1</Link></li>
            <li><Link className="dropdown-item" to="/dropdown2">Sub Item 2</Link></li>
            <li><Link className="dropdown-item" to="/dropdown2">Sub Item 3</Link></li>
          </ul>
        </li>
        {/* Second regular item */}
        <li><Link className="dropdown-item" to="/dropdown2">Dropdown 2</Link></li>
      </ul>
    </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item d-none d-lg-block ms-lg-3">
              <Link to="/get-started" className="btn btn-danger px-3 py-2">
                Get Started
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
