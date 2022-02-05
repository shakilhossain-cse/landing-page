import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import style from "../styles/card.module.css";

const Service = () => {
  return (
    <Container className="my-5">
      <Row xs={1} md={3} className="g-4">
        <Col>
          <Card className={style.card}>
            <Card.Body className="px-4">
              <Card.Img
                variant="top"
                src="https://n.foxdsgn.com/deva/wp-content/uploads/2020/10/level-up-1-1.png"
                className="w-50 my-3"
              />
              <h1 className="my-4">Services</h1>
              <Card.Text className="text-muted">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus quod.
              </Card.Text>
              <h6 className="text-primary my-4">Read More</h6>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card className={style.card}>
            <Card.Body className="px-4">
              <Card.Img
                variant="top"
                src="https://n.foxdsgn.com/deva/wp-content/uploads/2020/10/videogame-1-2.png"
                className="w-50 my-3"
              />
              <h1 className="my-4">Tutorial</h1>
              <Card.Text className="text-muted">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus quod.
              </Card.Text>
              <h6 className="text-primary my-4">Watch video</h6>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card className={style.card}>
            <Card.Body className="px-4">
              <Card.Img
                variant="top"
                src="https://n.foxdsgn.com/deva/wp-content/uploads/2020/10/customer-support-1-1.png"
                className="w-50 my-3"
              />
              <h1 className="my-4">Support</h1>
              <Card.Text className="text-muted">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus quod.
              </Card.Text>
              <h6 className="text-primary my-4">Contact Us</h6>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Service;
