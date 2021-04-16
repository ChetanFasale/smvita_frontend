<<<<<<< HEAD
import React, { useState } from 'react';
import {Card,CardDeck} from 'react-bootstrap';

const Cards = () => {
return (
  <CardDeck>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
)}



export default Cards;
=======
import React, { useState } from "react";
import { Card, CardDeck } from "react-bootstrap";

const Cards = () => {
  return (
    <div>
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1 style={{ textAlign: "center" }}>Courses Offered</h1>
      </div>
      <CardDeck>
        <Card>
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              <h2>PG DAC</h2>
            </Card.Title>
            <div className>
              <Card.Text>
                <h4>
                  Post Graduate Diploma in Advanced Computing (PG DAC) grooms
                  engineers and IT professionals for a career in Software
                  Development.
                </h4>
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              <h2>PG DBDA</h2>
            </Card.Title>
            <div className>
              <Card.Text>
                <h4>
                  Post Graduate Diploma in Big Data Analytics (PG DBDA) enables
                  students to explore the fundamental concepts of big data
                  analytics.
                </h4>
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              <h2>PRE-CAT</h2>
            </Card.Title>
            <div className>
              <Card.Text>
                <h4>
                  The admission to all PG Courses by C-DAC ACTS is through an
                  All-India C-DAC Common Admission Test (C-CAT)
                </h4>
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Cards;
>>>>>>> 2e463fc99271dfc65cbf4949daef2e877e69149f
