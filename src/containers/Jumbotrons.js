import React, { useState } from "react";
import { Jumbotron, Container, Row, Col, Image } from "react-bootstrap";

const Jumbotrons = () => {
  return (
    <div>
      
      <Jumbotron >
        <Container >
          <Row>
            <Col>
              <Image
                src="https://vidyanidhi.com/images/vita12.jpg"
                style={{ height: 300, width: 500 }}
              />
            </Col>
            <Col>
              <Row>
                <h1>Why choose SMVITA</h1>
              </Row>
              <Row>
                <h5>
                  Our institute has been present for over 20 years in the
                  market. We make the most of all our students.
                </h5>
              </Row>
              <Row>
                <h4>* Best in class Infrastructure</h4>
              </Row>
              <Row>
                <h4>* Best Faculty / Teachers Best</h4>
              </Row>
              <Row>
                <h4>* Best Learning Methodology</h4>
              </Row>
              <Row>
                <h4>* More than 95% Placement for 10 Consecutive batches</h4>
              </Row>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbotrons;
