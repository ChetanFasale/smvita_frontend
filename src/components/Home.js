import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Cards from "src/containers/Cards";
import Carousels from "src/containers/Carousel";
import Grid from "src/containers/Grid";
import Jumbotrons from "src/containers/Jumbotrons";
import TheCard from "src/containers/TheCard";
import TheFooter from "src/containers/TheFooter";
// import Navbar from "src/containers/Navbar";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Carousels />
        {/* <Cards /> */}
        <TheCard />
        <Jumbotrons />
        <Grid />
        <TheFooter />
      </div>
    );
  }
}
