import React from "react";
import "./header.css";
import CTA from "./CTA";

function Header() {
  return (
    <header>
      <div className="container header-container">
        <h5>Bonjour nous sommes là</h5>
        <h1>JMC Team Dev</h1>
        <h5>Développement Web Pro</h5>
        <CTA />
      </div>
    </header>
  );
}

export default Header;
