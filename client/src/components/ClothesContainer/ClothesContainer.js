import React, { Component } from "react";
import "./ClothesContainer.css";
import Clothes from "./Clothes/Clothes";
import clothNames from "../../utils/clothesHolder.js";
class ClothesContainer extends Component {
  render() {
    const items = clothNames.map((name) => 
     <Clothes key = {name} name = {name}/>);
    return (
      <div className="clothes-wrapper" onMouseOver={this.props.closeNav}>
        {items}
      </div>
    );
  }
}

export default ClothesContainer;
