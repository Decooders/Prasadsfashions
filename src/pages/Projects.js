import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Layout from "../components/layout/Layout.js";
import "./Projects.css";
import prjimg2 from "../assets/prjimg2.png";

const Result = () => {
  return (
    <p>Your Message has been successfully sent. I will Contact you Soon </p>
  );
};
const Projects = () => {
  const [result, showResult] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j26a0g7",
        "template_e6zv9ex",
        form.current,
        "ffSefLeM35Sv0KWBr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };
  return (
    <Layout title={"PrasadsFashions/Projects"}>
      <section className="Project1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 prjimg">
              <div
                className="prj-Headingmain"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                Our Project
                <div
                  className="prj-Textmain"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1000"
                >
                  Consult With Us The Suitable Material for Your Project
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-6 col-sm-12 prjct">
              <div
                className="Prj-name"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                Consult With Us The Suitable Material For Your Project
              </div>
              <div
                className="prj-descrpt"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                Our experienced professionals take time to understand the unique
                requirements of your project. Whether you're designing clothing,
                crafting furniture, or working on an artistic masterpiece, we
                provide tailored material recommendations to suit your vision.
              </div>
            </div>
          </div>
        </div>
        <div className="imgform">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-md-6 col-sm-12"></div>
              <div className="col-lg-5 col-md-6 col-sm-12">
                <div className="Project-2" data-aos="zoom-out-right">
                  <img src={prjimg2} alt="map" className="projectimg2" />
                </div>
              </div>

              <div
                className="col-lg-5 col-md-6 col-sm-12"
                data-aos="zoom-out-left"
              >
                <div className="Cantact-form">
                  <div className="contact-heading">
                    Let's Talk
                    <p className="contact-text">
                      Fill in your details bellow to arrange a call back and
                      discover more about our innovative <br />
                      approach to Prasads Fashions
                    </p>
                  </div>
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="mb-3 form-input">
                      <input
                        type="text"
                        class="form-control"
                        id="username"
                        placeholder="Username"
                        name="from-name"
                      />
                    </div>
                    <div className="mb-3 form-input">
                      <input
                        type="email"
                        placeholder="Email"
                        class="form-control"
                        id="exampleInputEmail1"
                        name="from-email"
                      />
                    </div>
                    <div className="mb-3 form-input">
                      <textarea
                        type="text"
                        name="message"
                        class="form-control"
                        placeholder="message"
                      />
                    </div>
                    <div className="contact-btn">
                      <input type="submit" value="Send" className="btn" />
                    </div>
                    <div className="row">{result ? <Result /> : null}</div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
