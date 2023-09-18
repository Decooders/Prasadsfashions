import React from "react";
import Layout from "../components/layout/Layout.js";
import "./About.css";
import Aboutimg from "../assets/smallbg1.jpg";

const About = () => {
  return (
    <Layout title={"PrasadsFashions/About"}>
      <section className="About">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="About-Headingmain">About</div>
              <div className="About-Textmain">
                Elevate your style. Embrace your individuality. Experience
                Prasads Fashions.
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="About-Heading">About Prasads Fashions</div>
              <div className="About-Text">
                Welcome to Prasads Fashions, where fashion meets elegance and
                style. We are more than just a clothing brand; we are the
                embodiment of self-expression through fashion. Our journey began
                with a passion for creating garments that empower individuals to
                embrace their uniqueness and confidently conquer the world.
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="About-Heading">Our Story</div>

              <div className="About-Text">
                Prasads Fashions was founded by Prasads in 2008. Our story is
                one of ambition, creativity, and a deep love for fashion. What
                started as a small boutique has grown into a brand that
                resonates with fashion enthusiasts worldwide.
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="About-Heading">Our Vision</div>

              <div className="About-Text">
                At Prasads Fashions, our vision is clear: we aim to redefine
                fashion by offering garments that not only make you look good
                but feel incredible too. We believe that every piece of clothing
                should tell a story, reflect personality, and boost confidence.
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img src={Aboutimg} alt="About-image" className="abtimg" />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="About-Heading">Quality Craftsmanship</div>

              <div className="About-Text">
                We take immense pride in the quality of our garments. Each piece
                is crafted with precision and attention to detail. From
                selecting the finest fabrics to perfecting every stitch, our
                commitment to quality is unwavering.
              </div>
              <div className="About-Heading">Sustainable Fashion</div>

              <div className="About-Text">
                We are committed to making a positive impact on the world.
                Sustainability is at the heart of what we do. We use
                eco-friendly materials, practice ethical manufacturing, and
                continually seek ways to reduce our environmental footprint.
              </div>
              <div className="About-Heading">Our Collections</div>

              <div className="About-Text">
                Explore our diverse collections that cater to various styles and
                occasions. From casual wear that's perfect for everyday comfort
                to exquisite pieces designed for special moments, we have
                something for everyone.
              </div>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="About-Heading">Join the Our Community</div>

              <div className="About-Text">
                We believe that fashion is not just about clothing; it's about
                creating a community of individuals who share a passion for
                style. Connect with us on social media, share your Prasads
                Fashions moments, and be a part of our growing family.
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="About-Heading">Contact Us</div>

              <div className="About-Text">
                We love hearing from you! If you have any questions, feedback,
                or just want to say hello, don't hesitate to reach out. Our
                dedicated customer support team is here to assist you. Thank you
                for choosing Prasads Fashions. We are thrilled to be a part of
                your fashion journey. Elevate your style. Embrace your
                individuality. Experience Prasads Fashions.
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
