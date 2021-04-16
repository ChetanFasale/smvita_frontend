import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Cards from "src/containers/Cards";
import Carousels from "src/containers/Carousel";
import Grid from "src/containers/Grid";
import Jumbotrons from "src/containers/Jumbotrons";
import TheFooter from "src/containers/TheFooter";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Carousels />
        <Cards />
        <Jumbotrons />
        <Grid />
        <TheFooter />
      </div>
    );
  }
}
