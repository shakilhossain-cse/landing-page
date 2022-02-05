import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import style from "../styles/faq.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Faq = () => {
  useEffect(()=>{
    AOS.init();
  },[]);
  return (
    <div className={style.banner}>
      <Container>
        <Row>
          <Col md={7} xs={12} className="my-5" data-aos="zoom-in-right">
            <img
              src="https://n.foxdsgn.com/deva/wp-content/uploads/2020/10/downloading.png"
              className="w-75"
              alt=""
            />
          </Col>
          <Col md={5} xs={12} className="my-5">
            <h1 className="mb-5">We propose quality solution for any business</h1>
            <Accordion>
              <Accordion.Item eventKey="0" className="p-4 shadow-lg mb-3" data-aos="fade-up"
     data-aos-anchor-placement="top-center">
                <Accordion.Header>Management System</Accordion.Header>
                <Accordion.Body className="text-muted">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="p-4 shadow-lg mb-3" data-aos="fade-up"
     data-aos-anchor-placement="top-center">
                <Accordion.Header>Pricing System</Accordion.Header>
                <Accordion.Body className="text-muted">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Faq;
