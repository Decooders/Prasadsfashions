import React from "react";
import Layout from "../components/layout/Layout";
import "./Policy.css";

const Policy = () => {
  return (
    <Layout title={"Privacy Policies"}>
      <section className="Policy">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 prvcystrp">
              <div
                className="Policy-Headingmain"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                Privacy Policy
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="Policy-text">
                PRASADS FASHIONS is committed to protecting your privacy and
                ensuring the security of your personal information. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your personal data when you visit our website, purchase our
                clothing garments, or interact with our services. Information We
                Collect We may collect the following types of information when
                you interact with our website or services:
                <div className="textbold">Personal Information:</div>
                <div className="txt-2">
                  This may include your name, email address, postal address,
                  phone number, and payment information when you make a
                  purchase.
                </div>
                <div className="textbold">Browsing Information:</div>
                <div className="txt-2">
                  We may collect data such as your IP address, browser type,
                  device information, and cookies to enhance your experience on
                  our website and for analytics purposes.
                </div>
                <div className="textbold">Order History:</div>
                <div className="txt-2">
                  We maintain a record of your purchase history and preferences
                  to improve our products and services.
                </div>
                <div className="textbold">How We Use Your Information:</div>
                <div className="txt-2">
                  We may share your personal information with: Service
                  Providers: Third-party service providers who assist us in
                  operating our website and conducting our business.
                </div>
                <div className="textbold">Legal Requirements:</div>
                <div className="txt-2">
                  When required by law or to protect our rights, safety, or the
                  rights, safety, or property of others.
                </div>
                <div className="textbold">Your Choices: </div>
                <div className="txt-2">
                  You can choose not to provide certain personal information,
                  but it may limit your ability to use certain features of our
                  website or make purchases. You can opt out of receiving
                  marketing communications from us by following the instructions
                  provided in those communications.
                </div>
                <div className="textbold">Security: </div>
                <div className="txt-2">
                  We employ reasonable security measures to protect your
                  personal information from unauthorized access, disclosure,
                  alteration, or destruction.
                </div>
                <div className="textbold">Cookies: </div>
                <div className="txt-2">
                  We use cookies and similar technologies to enhance your
                  browsing experience. You can manage your cookie preferences
                  through your browser settings.
                </div>
                <div className="textbold"> Children's Privacy: </div>
                <div className="txt-2">
                  Our website is not intended for individuals under the age of
                  13. We do not knowingly collect personal information from
                  children. Changes to this Privacy Policy We may update this
                  Privacy Policy to reflect changes in our practices. Please
                  review this policy periodically for any updates.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Policy;
