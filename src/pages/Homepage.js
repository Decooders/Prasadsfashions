import React from "react";
import Layout from "../components/layout/Layout";
import "./Homepage.css";
import heroimg from "../assets/Heroimage.png";
import logo from "../assets/Logo.png";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

const Homepage = () => {
  return (
    <>
      <Layout title={"Prasads Fashions"}>
        <section className="hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="copy">
                  <img src={logo} className="logo" alt="Prasad Fashions Logo" />
                  <div className="text-bold">
                    Stay Tuned
                    <br /> Our New Website is
                  </div>
                  <div className="text-label">Coming Soon</div>
                  <div className="text-hero-regular">
                    Step into our specialized men's boutique, where
                    sophistication and <br />
                    style unite to create unforgettable wedding ensembles and a
                    <br />
                    versatile range of men's wear
                  </div>
                  <div className="text-bold">Fallow Us on</div>
                </div>
                <div className="social-icons">
                  <a
                    href="https://www.instagram.com/prasads_fashions"
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/prasadsfashions"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </a>
                  <a href="/" target="_blank">
                    <FaFacebook />
                  </a>
                  <a
                    href="https://www.twitter.com/prasadsfashions"
                    target="_blank"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <img src={heroimg} alt="Cloths" className="hero-image" />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Homepage;
