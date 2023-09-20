import React from "react";
import Layout from "../components/layout/Layout.js";
import "./Services.css";
import { GiRolledCloth, GiWool, GiCottonFlower } from "react-icons/gi";
import { TbIroningSteam, TbPrinter, TbShirt } from "react-icons/tb";

const Services = () => {
  return (
    <Layout title={"PrasadsFashions/Services"}>
      <section className="Services1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 srcimg">
              <div
                className="Service-Headingmain"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                How We Work
                <div
                  className="Service-Textmain"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1000"
                >
                  Find The Fabric, Enjoy The Process and Shine with The Results
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-4 col-md-4 col-sm-6 srv1"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <div className="srv-icon">
                    <GiRolledCloth />
                  </div>
                  <div className="srv-head">Garment Sales:</div>
                  <div className="srv-text">
                    The core service is selling a wide range of clothing items,
                    including dresses, shirts, pants, jackets, and accessories,
                    either online or in a physical store.
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-4 col-sm-6 srv1"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                >
                  <div className="srv-icon">
                    <GiWool />
                  </div>
                  <div className="srv-head">Custom Garment Design:</div>
                  <div className="srv-text">
                    Provide customers with the option to order
                    <br /> custom-made clothing tailored to their measurements
                    and preferences. This could include bespoke suits,
                    <br /> wedding dresses, or unique designs.
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-4 col-sm-6 srv1"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                >
                  <div className="srv-icon">
                    <TbPrinter />
                  </div>
                  <div className="srv-head">Alterations and Tailoring:</div>
                  <div className="srv-text">
                    Offer alteration services to ensure a perfect <br />
                    fit for your customers' garments. This can include hemming,
                    <br /> resizing, and more complex alterations.
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-4 col-sm-6 srv1"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                >
                  <div className="srv-icon">
                    <TbShirt />
                  </div>
                  <div className="srv-head">Clothing Repair:</div>
                  <div className="srv-text">
                    Repair torn, ripped, or damaged garments. This <br />
                    service can extend the life of clothing and save customers
                    money on replacements.
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-4 col-sm-6 srv1"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                >
                  <div className="srv-icon">
                    <GiCottonFlower />
                  </div>
                  <div className="srv-head">
                    Styling & Fashion Consultation:
                  </div>
                  <div className="srv-text">
                    Employ stylists who can assist customers in <br />
                    selecting the right clothing items and accessories based
                    <br /> on their body type, style, and occasion.
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-4 col-sm-6 srv1"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                >
                  <div className="srv-icon">
                    <TbIroningSteam />
                  </div>
                  <div className="srv-head">Fabric Care and Cleaning:</div>
                  <div className="srv-text">
                    Offer cleaning and maintenance services to keep
                    <br /> clothing items in top condition. This can include
                    <br />
                    dry cleaning, laundering, and stain removal.
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

export default Services;
