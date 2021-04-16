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