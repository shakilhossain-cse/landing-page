import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/features.module.css";
import { FaArrowCircleRight } from "react-icons/fa";

const Features = () => {
  return (
    <Container style={{ marginTop: "8rem", marginBottom: "5rem" }}>
      <Row className="gx-5">
        <Col md={6} xs={12} className="my-5">
          <img
            src="https://n.foxdsgn.com/deva/wp-content/uploads/2020/10/Frame-11-1.png"
            alt=""
            className="img-fluid"
          />
        </Col>
        <Col md={6} xs={12} className="my-5">
          <div>
            <h1>Discover all our features and services</h1>
            <p className="text-muted fs-5 my-4">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus temporibus
              autem.
            </p>
            <div className="d-flex">
              <div
                style={{ width: "5rem", color: "goldenrod", fontSize: "2rem" }}
              >
                <FaArrowCircleRight />
              </div>
              <div>
                <h5 className="py-3">Ready-to-use templates</h5>
                <p className="text-muted">
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod.
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div
                style={{ width: "5rem", color: "goldenrod", fontSize: "2rem" }}
              >
                <FaArrowCircleRight />
              </div>
              <div>
                <h5 className="py-3">Custom advertisement</h5>
                <p className="text-muted">
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Features;
