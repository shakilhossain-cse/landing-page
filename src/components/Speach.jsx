import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "../styles/speach.module.css";
const Speach = () => {
  return (
    <div className={style.banner}>
      <Container className={style.bannerContainer}>
        <Row>
          <Col xs={12} md={7} className="d-flex justify-content-center flex-column px-5">
            <h3>
              “ <br /> It is really refreshing to work with this software which
              is truly helpful in the client’s needs and preferences.
            </h3>
            <h4 className="my-4">— Jack Calderon</h4>
            <p className="text-muted fs-5">Head of marketing, Apple Inc.</p>
          </Col>
          <Col>
            <img
              src="https://n.foxdsgn.com/deva/wp-content/uploads/2020/10/Group-90-1.png"
              alt=""
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Speach;
