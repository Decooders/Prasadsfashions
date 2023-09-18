import React from "react";
import { NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div
            className=" navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=" navbar-toggler-icon" />
            <MdMenu />
          </div>
          <div className="navbar-collapse" id="navbarTogglerDemo01">
            <NavLink to="*" className="navbar-brand">
              <b>PS</b>
            </NavLink>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className="nav-link">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className="nav-link">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-icons">
              <li className="nav-item">
                <a
                  href="https://www.instagram.com/prasads_fashions"
                  target="_blank"
                  className="navicons"
                >
                  <FaInstagram />
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.twitter.com/prasadsfashions"
                  target="_blank"
                  className="navicons"
                >
                  <FaTwitter />
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.linkedin.com/company/prasadsfashions"
                  target="_blank"
                  className="navicons"
                >
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
