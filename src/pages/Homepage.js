import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Layout from "../components/layout/Layout.js";
import "./Homepage.css";
import heroimg from "../assets/Heroimage.png";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IoShirtOutline } from "react-icons/io5";
import {
  GiShirtButton,
  GiRolledCloth,
  GiWool,
  GiCottonFlower,
} from "react-icons/gi";
import {
  TbIroningSteam,
  TbPrinter,
  TbShirt,
  TbStarFilled,
} from "react-icons/tb";
import { CgScrollV } from "react-icons/cg";
import bannerimage from "../assets/bannerimage.png";
import Logo from "../assets/Logo.png";
import P1 from "../assets/p-1.png";
import P2 from "../assets/p-2.png";
import P3 from "../assets/p-3.png";
import P4 from "../assets/p-4.png";
import P5 from "../assets/p-5.png";
import P6 from "../assets/p-6.png";
import Map from "../assets/map.png";
// import About from "../assets/About.png";
import About from "../assets/About2.png";
import Men from "../assets/men.png";
import Coat from "../assets/coat.png";
import Jacket from "../assets/jacket.png";
import Pant from "../assets/pants.png";
import Shirt from "../assets/shirts.png";
import Person from "../assets/test-1.png";
import Person1 from "../assets/test-2.png";
import Person2 from "../assets/test-3.png";

const Result = () => {
  return (
    <p>Your Message has been successfully sent. I will Contact you Soon </p>
  );
};
const Homepage = () => {
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
    <>
      <Layout title={"Prasads Fashions"}>
        {/* Hero Banner */}
        <section className="Hero">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 col-md-6 col-sm-12"
                data-aos="zoom-in-right"
              >
                <div className="copy">
                  <div className="text-bold">Prasad's Fashions</div>
                  <div className="text-label">
                    Individual Men&#39;s <br />
                    Tailoring
                  </div>
                  <div className="text-hero-regular">
                    High-quality of tailoring men&#39;s clothing in a Short Time
                  </div>
                  <div className="scroll-text">
                    SCROLL DOWN
                    <span className="scrollimg">
                      <CgScrollV />
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-12"
                data-aos="zoom-in-left"
              >
                <img
                  src={heroimg}
                  alt="ModalImage"
                  className="hero-image w-100"
                />
              </div>
            </div>
          </div>
        </section>

        {/* lONGStrip Banner */}
        <section className="long-strip">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-4 col-md-6 col-sm-6"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000"
              >
                <div className="content-1">
                  <div className="longicons">
                    <GiShirtButton />
                  </div>
                  <h5>Excellent Material</h5>
                  <p className="content-text">
                    At Prasads Fashions, we believe that the quality of
                    materials is the foundation upon which exceptional projects
                    are built. Our materials are selected with the utmost care
                    and scrutiny.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1500"
              >
                <div className="content-1">
                  <div className="longicons">
                    <IoShirtOutline />
                  </div>

                  <h5>Quality Product</h5>
                  <p className="content-text">
                    Your satisfaction is our ultimate goal. We continuously
                    strive to understand your needs and preferences to deliver
                    products that resonate with you
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="2000"
              >
                <div className="content-1">
                  <div className="longicons">
                    <VscWorkspaceTrusted />
                  </div>
                  <h5>Trusted by Clients</h5>
                  <p className="content-text">
                    Our client-centric approach means that we prioritize our
                    clients' needs, actively listen to their feedback, and work
                    collaboratively to find the best solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About */}
        <section className="About1">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000"
              >
                <img src={About} alt="modal" className="Aboutimg w-100" />
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1500"
              >
                <div className="About-Text">
                  <div className="About-heading">ABOUT</div>
                  <div className="About-Lable">Prasad&#39;s Fashions</div>
                  <div className="About-content">
                    You Can Find All Kinds of Fabric Here
                  </div>

                  <div className="text-content">
                    Step into our specialized men's boutique, where
                    sophistication and style unite to create unforgettable
                    wedding ensembles and a versatile range of men's wear. Our
                    expert stylists are dedicated to helping you find the
                    perfect ensemble, offering personalized consultations and
                    tailored advice. Explore our extensive range of wedding
                    collections like designer
                    suites,blazers,Indo-western,Jodhpuri, chudidhar, Modi coat,
                    and accessories, designed to make a lasting impression at
                    any occasion. Indulge in luxurious fabrics sourced from
                    around the world, ensuring both comfort and sophistication
                    in every garment with reasonable prices. From classic
                    black-tie affairs to contemporary destination weddings, we
                    have the perfect outfit to match your unique wedding theme.
                  </div>
                  <div className="About-Button">
                    <a href="/about">
                      <button className="about-btn">View More</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Banner */}
        <section className="men-banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-6 col-sm-12">
                <div className="men-text">for</div>
                <div className="men-heading">Mens</div>
                <div className="Men-Cloths">
                  <div
                    className="col-lg-3 col-md-4 col-sm-12"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                  >
                    <img src={Coat} alt="men-cloths" className="cloths" />
                    <p className="men">Coats</p>
                  </div>
                  <div
                    className="col-lg-3 col-md-4 col-sm-12"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                  >
                    <img src={Jacket} alt="men-cloths" className="cloths" />
                    <p className="men">Jackets</p>
                  </div>
                  <div
                    className="col-lg-3 col-md-4 col-sm-12"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                  >
                    <img src={Pant} alt="men-cloths" className="cloths" />
                    <p className="men">Pants</p>
                  </div>
                  <div
                    className="col-lg-3 col-md-4 col-sm-12"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                  >
                    <img src={Shirt} alt="men-cloths" className="cloths" />
                    <p className="men">Shirts</p>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <div className="Men-Img">
                  <img src={Men} alt="map" className="Menimg" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Services */}
        <section className="Services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="Servicess-heading">
                  <div
                    className="Services-title"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                  >
                    Our Services
                  </div>
                  <div
                    className="Services-largetext"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                  >
                    What We Do?
                  </div>
                  <div
                    className="Services-description"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                  >
                    Our Clients send us bunch of smiles with our service and we
                    love them
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000"
              >
                <div className="Services-icon">
                  <GiRolledCloth />
                  <span className="icon-text">Fabric Dyeing</span>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1500"
              >
                <div className="Services-icon">
                  <GiWool />
                  <span className="icon-text">Satin Weaving</span>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="2000"
              >
                <div className="Services-icon">
                  <TbPrinter />
                  <span className="icon-text">Fabric Printing</span>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="2500"
              >
                <div className="Services-icon">
                  <TbShirt />
                  <span className="icon-text">Garment Stitching</span>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="3000"
              >
                <div className="Services-icon">
                  <GiCottonFlower />
                  <span className="icon-text">Linen Weaving</span>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="3000"
              >
                <div className="Services-icon">
                  <TbIroningSteam />
                  <span className="icon-text">Custom Apparel</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6"></div>
              <div className="col-lg-3 col-md-6 col-sm-6"></div>
            </div>
          </div>
        </section>
        {/* Production */}
        <section className="Products">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="Products-heading">
                  <div
                    className="Product-title"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="500"
                  >
                    Our Projects
                  </div>
                  <div
                    className="Procuct-largetext"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1000"
                  >
                    Some Of Our Projects
                  </div>
                  <div
                    className="Product-description"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1500"
                  >
                    These are custom-built suits for game-changers. It&#39;s
                    slim fit and has accentuated shoulders that give a classic
                    style.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div
                className="col-lg-3 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="500"
              >
                <img src={P1} alt="product-1" className="Productimage w-75" />
                <p className="P-title">Cotton Fabric</p>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000"
              >
                <img src={P2} alt="product-1" className="Productimage w-75" />
                <p className="P-title">Wool Fabric</p>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1500"
              >
                <img src={P3} alt="product-1" className="Productimage w-75" />
                <p className="P-title">Linen Fabric</p>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="2000"
              >
                <img src={P4} alt="product-1" className="Productimage w-75" />
                <p className="P-title">Georgette Fabric</p>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="2500"
              >
                <img src={P5} alt="product-1" className="Productimage w-75" />
                <p className="P-title">Denim Fabric</p>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="3000"
              >
                <img src={P6} alt="product-1" className="Productimage w-75" />
                <p className="P-title">Leather Material</p>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12"></div>
              <div className="col-lg-3 col-md-6 col-sm-12"></div>
            </div>
          </div>
        </section>
        {/* Testimonial*/}
        <section className="Testimonial">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="Testimonial-heading">
                  <div
                    className="Testimonial-title"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="500"
                  >
                    What Our Client Says
                  </div>
                  <div
                    className="Testimonial-para"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1000"
                  >
                    Our Clients send us bunch of smiles with our service and we
                    love them
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="Persons">
                        <img
                          src={Person}
                          alt="Person-1"
                          className="Person-1"
                          data-aos="fade-up"
                          data-aos-anchor-placement="top-bottom"
                          data-aos-duration="1000"
                        />
                        <div
                          className="Test-p"
                          data-aos="fade-up"
                          data-aos-anchor-placement="top-bottom"
                          data-aos-duration="1000"
                        >
                          Dhruv Jahagirdar
                        </div>
                        <div
                          className="Test-designation"
                          data-aos="fade-up"
                          data-aos-anchor-placement="top-bottom"
                          data-aos-duration="1000"
                        >
                          Software Engg
                        </div>
                        <div
                          className="Stars"
                          data-aos="fade-up"
                          data-aos-anchor-placement="top-bottom"
                          data-aos-duration="1000"
                        >
                          <TbStarFilled />
                          <TbStarFilled />
                          <TbStarFilled />
                          <TbStarFilled />
                          <TbStarFilled />
                        </div>
                        <div
                          className="Test-para"
                          data-aos="fade-up"
                          data-aos-anchor-placement="top-bottom"
                          data-aos-duration="1000"
                        >
                          I'm a regular customer of Prasad Fashions since 5-6
                          years. Mr Prasad is a very nice person, calm and cool.
                          Many big branded clothes are available in his shop and
                          he has his own stitching unit where I get stitched my
                          pants and shirts and rates are also very reasonable.
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="Persons">
                        <img
                          src={Person1}
                          alt="Person-1"
                          className="Person-1"
                        />
                        <div className="Test-p">Sushma Thakur</div>
                        <div className="Test-designation">Student</div>
                        <div className="Stars">
                          <TbStarFilled />
                          <TbStarFilled />
                          <TbStarFilled />
                          <TbStarFilled />
                          <TbStarFilled />
                        </div>
                        <div className="Test-para">
                          I've have been using his services for over 15+ yrs now
                          and I must say he has maintained his finesse,
                          professionalism and his "magic touch" over the years.
                          Prasad has improved over time and always stays
                          up-to-date with the latest fashion trends.
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="Persons">
                        <img
                          src={Person2}
                          alt="Person-1"
                          className="Person-1"
                        />
                        <div className="Test-p">Silas Jude</div>
                        <div className="Test-designation">Business</div>
                        <div className="Stars">
                          <TbStarFilled />
                          <TbStarFilled />
                          <TbStarFilled />
                          <TbStarFilled />
                        </div>
                        <div className="Test-para">
                          Prasad has been my tailor for the past 25 years..One
                          of the best tailors in the city.. Highly
                          proficient..uses good quality material....Sincere and
                          hard working..May GOD Bless his hard work and take him
                          to greater heights.. All the Best Prasad!!!
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Add Banner */}
        <section className="banner">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <div className="rightside">
                  <img src={Logo} className="Banner-logo" alt="logo" />
                  <h5 className="Banner-name">Prasads Fashions</h5>
                  <p className="Banner-text">
                    THAT FIT RIGHT IN TO
                    <br />
                    YOUR STYLE
                  </p>
                </div>
              </div>

              <div
                className="col-lg-6 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <img src={bannerimage} className="ban-img" alt="bannerimg" />
              </div>
            </div>
          </div>
        </section>
        {/* Contacts */}
        <section className="Contacts">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="Cantact-map" data-aos="zoom-out-right">
                  <img src={Map} alt="map" className="projectimg2" />
                </div>
              </div>

              <div
                className="col-lg-6 col-md-6 col-sm-12 "
                data-aos="zoom-out-left"
              >
                <div className="Cantact-form">
                  <div className="contact-heading">
                    Get In Touch
                    <p className="contact-text">
                      Fill in your details bellow to arrange a call back <br />
                      and discover more about our innovations.
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
        </section>
      </Layout>
    </>
  );
};

export default Homepage;
