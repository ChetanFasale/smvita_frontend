import React, { Component } from "react";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from "react-bootstrap";
import Cards from "src/containers/Cards";
import Carousels from "src/containers/Carousel";
import Grid from "src/containers/Grid";
import Jumbotrons from "src/containers/Jumbotrons";
import TheCard from "src/containers/TheCard";
import TheFooter from "src/containers/TheFooter";
import Newnavbar from "src/containers/Newnavbar";

export default class Home extends Component {
  render() {
    return (
      <div>
  
        <Carousels />
     
        <TheCard />
        <Jumbotrons />
        <Grid />
      
      </div>
    );
  }
}
