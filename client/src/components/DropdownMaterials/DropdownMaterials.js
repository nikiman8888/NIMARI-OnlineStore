import React, { Component } from "react";
import "./DropdownMaterials.css";
import { Link } from "react-router-dom";

class  DropdownMaterials extends Component {
  render() {
    return (
      <div className="dropdown-wrapper">
        <div className="shoes-content">
          <ul>
            <li>
              <Link to="/" />
              MATERIAL 1
            </li>
            <li>
              <Link to="/" />
              MATERIAL 2
            </li>
            <li>
              <Link to="/" />
              MATERIAL 3
            </li>
            <li>
              <Link to="/" />
              MATERIAL 4
            </li>
          </ul>
        </div>
        <div className="shoes-img"></div>
        <button type="button" onClick={this.props.onClickHandler}>
          Click
        </button>
      </div>
    );
  }
}

export default DropdownMaterials;
