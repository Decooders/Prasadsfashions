import React from "react";
import {
  FaInstagramSquare,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import "./Footer.css";
import { Link } from "react-router-dom";
import FooterLogo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 ft-1">
            <a className="navbar-brand" href="/">
              <img src={FooterLogo} className="footer-logo" alt="footerlogo" />
            </a>
            <h5>PRASAD'S FASHIONS</h5>
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
                <Link to="/projects" className="nav-link">
                  Projects
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
              <a
                href="https://www.instagram.com/prasads_fashions"
                target="_blank"
                className="footer-icons"
              >
                <FaInstagramSquare />
              </a>
              <a
                href="https://www.facebook.com/PrasadsFashions?mibextid=b06tZ0"
                className="footer-icons"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.twitter.com/prasadsfashions"
                target="_blank"
                className="footer-icons"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/prasadsfashions"
                target="_blank"
                className="footer-icons"
              >
                <FaLinkedin />
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
