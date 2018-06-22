import React from "react";
import Link from "gatsby-link";

const Header = ({ siteTitle }) => (
  <div>
    <div class="site-title">
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
    <div class="navigation">
      <Link to="/about-us/">About</Link>
      <br />
      <Link to="/contact/">Contact Us</Link>
      <br />
      <Link to="/sign-up/">Sign Up</Link>
    </div>
  </div>
);

export default Header;
