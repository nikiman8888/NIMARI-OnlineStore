import React, { Component } from "react";
import "./ServicesContainer.css";
import foto1 from '../../images/services3.png';
import foto2 from '../../images/services4.jpg';
import foto3 from '../../images/services5.jpg';

class ServicesContainer extends Component {
  render() {
    return (
      <div className="services-wrapper" onMouseOver={this.props.closeNav}>
        <div className="services-content-wrapper">
          <h2>Uslugi</h2>
          <ul>
            <li>Usluga 1</li>
            <li>Usluga 2</li>
            <li>Usluga 3</li>
            <li>Usluga 4</li>
            <li>Usluga 5</li>
            <li>Usluga 6</li>
            <li>Usluga 7</li>
            <li>Usluga 8</li>
            <li>Usluga 9</li>
          </ul>
        </div>
        <div className="services-img-wrapper">
            <img src = {foto1}/>
            <img src = {foto2}/>
        </div>
      </div>
    );
  }
}
export default ServicesContainer;
