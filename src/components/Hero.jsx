import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import style from "../styles/hero.module.css";
import Header from "./Header";

const Hero = () => {
  return (
    <div className={style.banner}>
      <Header />
      <Container>
        <Row>
          <Col xs={12} md={7} className="mb-3">
            <div className="d-flex justify-content-center flex-column h-100">
              <h1 style={{fontSize:'4rem'}}>
                Software to increase your performance
              </h1>
              <p className="my-4">
                We’ve spent the last 5 years helping over 25,000 teams just like
                yourself create and sustain a successful online support.
              </p>
              <div className="d-flex">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="w-50"
                />
                <Button variant="danger" placeholder="Your Email">
                  Get Started
                </Button>
              </div>
              <p className="text-success text-sm">No credit card required</p>
            </div>
          </Col>
          <Col xs={12} md={5}>
            <div className="w-100">
              <img
                src="https://n.foxdsgn.com/deva/wp-content/uploads/2020/10/relationships-2.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
