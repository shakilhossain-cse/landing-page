import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  const [changeHeader, setChangeHeader] = useState(false);
  //header change function
  const onChangeHeader = () => {
    if (window.scrollY >= 50) {
      setChangeHeader(true);
    } else {
      setChangeHeader(false);
    }
  };

  //change header by scrolling
  window.addEventListener("scroll", onChangeHeader);
  return (
    <>
      <Navbar bg={changeHeader && "white"} expand="lg" fixed="top" className="mb-5">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="https://n.foxdsgn.com/deva/wp-content/uploads/2020/10/Group-100-9.png"
              width="90"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Button variant="danger" className="mx-3 my-3">
                GET STARTED
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
