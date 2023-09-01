import React from "react";
import { Helmet } from "react-helmet";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <main>{children}</main>
    </div>
  );
};
Layout.defaultProps = {
  title: "Prasad's Fashions",
  description: "Men's Casual & Formal Clothings Shipping All Over India",
  keywords: "mensware,dress,men's boutique,mens fashions",
};
export default Layout;
