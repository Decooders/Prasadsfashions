import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import ClipLoader from "react-spinners/ClipLoader";
import "../layout/Layout.css";

const Layout = ({ children, title, description, keywords, author }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <div className="Layout-load">
      {loading ? (
        <ClipLoader color={"B81F25"} loading={loading} size={60} />
      ) : (
        <div>
          <Helmet>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <title>{title}</title>
          </Helmet>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      )}
    </div>
  );
};
Layout.defaultProps = {
  title: "Prasad's Fashions",
  description: "Men's Casual & Formal Clothings Shipping All Over India",
  keywords: "mensware,dress,men's boutique,mens fashions",
};
export default Layout;
