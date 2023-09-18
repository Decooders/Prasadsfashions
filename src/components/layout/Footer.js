import React from "react";
import {
  FaInstagramSquare,
  FaFacebookF,
  FaTwitter,
  FaTelegramPlane,
  FaPhone,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import "./Footer.css";
import { Link } from "react-router-dom";
import FooterLogo from "../../assets/Logo.png";
import Policy from "./../../pages/Policy";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 ft-1">
            {/* <a className="navbar-brand" href="/"> */}
            <img src={FooterLogo} className="footer-logo" alt="footerlogo" />
            <h5>PRASAD'S FASHIONS</h5>
            {/* </a> */}
          </div>
          <div className="col-lg-12 col-sm-12 ft-2">
            <ul className="footer-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/policy" className="nav-link">
                  Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-12 col-sm-12 ft-3">
            <div className="footer-images">
              <a href="/" className="footer-icons">
                <FaInstagramSquare />
              </a>
              <a href="/" className="footer-icons">
                <FaFacebookF />
              </a>
              <a href="/" className="footer-icons">
                <FaTwitter />
              </a>
              <a href="/" className="footer-icons">
                <FaTelegramPlane />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="registration">
        <p className="footer-text">
          Copyright © 2023 | PrasadsFashions.com (PF Group)
        </p>
      </div>
    </div>
  );
};

export default Footer;
