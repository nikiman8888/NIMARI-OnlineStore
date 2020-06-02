import React, { Component } from "react";
import "./DropdownServices.css";
import { Link } from "react-router-dom";

class  DropdownServices extends Component {
  render() {
    return (
      <div className="dropdown-wrapper">
        <div className="shoes-content">
          <ul>
            <li>
              <Link to="/" />
              service 1
            </li>
            <li>
              <Link to="/" />
              service 2
            </li>
            <li>
              <Link to="/" />
              service 3
            </li>
            <li>
              <Link to="/" />
              service 4
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

export default DropdownServices;
