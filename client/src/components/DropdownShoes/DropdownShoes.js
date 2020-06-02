import React, { Component } from "react";
import "./DropdownShoes.css";
import { Link } from "react-router-dom";

class DropdownShoes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //console.log(this.props)
    return (
      <div className="dropdown-wrapper" >
        
        <div className="shoes-content">
          <ul>
            <li>
              <Link to="/" />
              ARTICLE 1
            </li>
            <li>
              <Link to="/" />
              ARTICLE 2
            </li>
            <li>
              <Link to="/" />
              ARTICLE 3
            </li>
            <li>
              <Link to="/" />
              ARTICLE 4
            </li>
          </ul>
        </div>
        <div className="shoes-img"></div>
      </div>
    );
  }
}

export default DropdownShoes;
