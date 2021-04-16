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
              text="This includes Core Java and Mobile and Wireless Technologies modules"
              label="PGDMC"
              path="/services"
            />
            <CardItem
              src="images/4.png"
              text="The admission to all PG Courses by
              C-DAC ACTS is through an All-India
              C-DAC Common Admission Test"
              label="Pre CAT"
              path="/services"
            />
            <CardItem
              src="images/7.jpg"
              text=" IoT aims to groom the students to enable them to work on current technology scenarios"
              label="PG DIoT"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TheCard;
