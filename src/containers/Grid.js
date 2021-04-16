import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Jumbotrons from "./Jumbotrons";

const Grid = () => {
  return (
   
    <Container>
      <h1 style={{ textAlign: "center" }}>Our Recruiters</h1>
      <br></br>
      <Row>
        <Col sm>
          <Image src="https://vidyanidhi.com/images/atos.png" thumbnail />
        </Col>
        <Col sm>
          <Image src="https://vidyanidhi.com/images/nse.png" thumbnail />
        </Col>
        <Col sm>
          <Image src="https://vidyanidhi.com/images/capg.png" thumbnail />
        </Col>
        <Col sm>
          <Image src="https://vidyanidhi.com/images/tata.png" thumbnail />
        </Col>
        <Col sm>
          <Image src="https://vidyanidhi.com/images/cybage.png" thumbnail />
        </Col>
        <Col sm>
          <Image src="https://vidyanidhi.com/images/cdac.png" thumbnail />
        </Col>
      </Row>
      <br></br>
      <br></br>
      <Row>
        <Col sm>
          <Image src="https://vidyanidhi.com/images/morningstar.png" thumbnail />
        </Col>
        <Col sm>
          <Image src="https://vidyanidhi.com/images/sapiens.png" thumbnail />
        </Col>
        <Col sm>
          <Image src="https://vidyanidhi.com/images/intellect.png" thumbnail />
        </Col>
        <Col sm>
          <Image src="https://vidyanidhi.com/images/greenpoint.png" thumbnail />
        </Col>
        <Col sm>
          <Image src="https://vidyanidhi.com/images/infintus.png" thumbnail />
        </Col>
        <Col sm>
          <Image src="https://vidyanidhi.com/images/jio.png" thumbnail />
        </Col>
      </Row>
      <br></br>
      <br></br>
      <br></br>
    </Container>
    
  );
};

export default Grid;
