import React from "react";
import "./TheCards.css";
import CardItem from "./CardItem";

function TheCard() {
  return (
    <div className="cards">
      <h1>Courses Offered</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          
          <ul className="cards__items">
            <CardItem
              src="images/3.jpg"
              text="Post Graduate Diploma in Advanced Computing (PG DAC) grooms
              engineers and IT professionals for a career in Software
              Development."
              label="PG-DAC"
              path="/courses"
            />
            <CardItem
              src="images/4.png"
              text="Post Graduate Diploma in Big Data Analytics (PG DBDA) enables
              students to explore the fundamental concepts of big data
              analytics."
              label="PG-DBDA"
              path="/courses"
            />
            <CardItem
              src="images/7.jpg"
              text="The admission to all PG Courses by C-DAC ACTS is through an
              All-India C-DAC Common Admission Test (C-CAT)"
              label="PRE-CAT"
              path="/courses"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TheCard;