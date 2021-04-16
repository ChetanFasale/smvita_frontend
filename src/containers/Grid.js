<<<<<<< HEAD
import React, { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const Grid = () => {
return (


<Container>
  <Row>
    {/* <Col xs ><img src="https://epic-bell-ae26f8.netlify.app/smvita-frontend/assets/img/slide/slide-1.jpg" /> </Col> */}
    <Col xs={{ order: 12 }}>Second, but last</Col>
    <Col xs={{ order: 1 }}>Third, but second</Col>
  </Row>
</Container>)}

export default Grid;
=======
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
>>>>>>> 2e463fc99271dfc65cbf4949daef2e877e69149f
