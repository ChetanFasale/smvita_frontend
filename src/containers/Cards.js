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
