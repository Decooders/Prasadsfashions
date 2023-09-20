import React from "react";
import Layout from "../components/layout/Layout.js";
import "./Contact.css";
import { FaMobileAlt } from "react-icons/fa";
import { FiMapPin, FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <Layout title={"PrasadsFashions/Contact"}>
      <section className="Contact-1">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 col-md-12 col-sm-12 cntc-map"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
            >
              <div
                className=" contact-heading1"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000"
              >
                Let’s make something Awesome
                <br />
                Together
                <p
                  className="contact-text1"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1000"
                >
                  We're here to assist you with any questions or concerns you
                  may have about our stylish and comfortable garments
                </p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-12 col-sm-12"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
            >
              <div className=" contact-heading2">
                Let’s Chat!
                <p
                  className="contact-text1"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1000"
                >
                  We would love to learn about your Projects
                </p>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div
                  className="col-lg-4 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1000"
                >
                  <div className="cnticons">
                    <FaMobileAlt />
                  </div>
                  <div className="imgname">
                    Mobile Number
                    <p className="textimage1">+91 92465 75140</p>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1000"
                >
                  <div className="cnticons">
                    <FiMapPin />
                  </div>
                  <div className="imgname">
                    Address
                    <p className="textimage1">
                      Hardy Complex, Shop No. 18, Ground Floor, Mahatma Gandhi
                      Rd, opposite Charmas, Kalasiguda, Secunderabad, Telangana
                      500003.
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1000"
                >
                  <div className="cnticons">
                    <FiMail />
                  </div>
                  <div className="imgname">
                    Email Id
                    <p className="textimage1">prasadsfashions1@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
