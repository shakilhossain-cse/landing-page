import React from "react";
import {Container } from "react-bootstrap";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="mt-5 py-4" style={{ backgroundColor: "#ddd" }}>
      <Container className="mt-5">
            <img src="https://n.foxdsgn.com/deva/wp-content/uploads/2020/10/Group-100-9.png" alt="" />
            <span className="mx-5">Made by Shakil © {year}</span>
      </Container>
    </div>
  );
};

export default Footer;
