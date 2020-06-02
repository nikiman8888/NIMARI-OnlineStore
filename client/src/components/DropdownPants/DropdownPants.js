import React, { Component } from "react";
import "./DropdownPants.css";
import { Link } from "react-router-dom";

class DropdownPants extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //console.log(this.props)
    return (
      <div className="dropdown-wrapper" >
        
        <div className="pants-content">
          <ul>
            <li>
              <Link to="/" />
              pants 1
            </li>
            <li>
              <Link to="/" />
              pants 2
            </li>
            <li>
              <Link to="/" />
              pants 3
            </li>
            <li>
              <Link to="/" />
              pants 4
            </li>
          </ul>
        </div>
        <div className="pants-img"></div>
      </div>
    );
  }
}

export default DropdownPants;


