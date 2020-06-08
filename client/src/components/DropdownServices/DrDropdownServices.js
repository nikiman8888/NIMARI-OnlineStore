import React, { Component } from "react";
import "./DropdownServices.css";
import { Link } from "react-router-dom";
import servicesFoto from "../../images/services1.png";

class DropdownServices extends Component {
  render() {
    return (
      <div className="dropdown-wrapper">
        <h1 className ="sewing-services">Шивашки услуги</h1>
        <div className="content-img-wrapper">
          <div className="first section">
            <h3>Basic </h3>
            <hr/>
            <ul>
              <li>
                <Link to="/" />
                Service 1
              </li>
              <hr/>
              <li>
                <Link to="/" />
                Service 2
              </li>
              <hr/>
              <li>
                <Link to="/" />
                Service 3
              </li>
              <hr/>
              <li>
                <Link to="/" />
                Service 4
              </li>
              <hr/>
            </ul>
          </div>
          <div className="second section">
            <h3>VIP</h3>
            <hr/>
            <ul>
              <li>
                <Link to="/" />
                Service 1
              </li>
              <hr/>
              <li>
                <Link to="/" />
                Service 2
              </li>
              <hr/>
              <li>
                <Link to="/" />
                Service 3
              </li>
              <hr/>
              <li>
                <Link to="/" />
                Service 4
              </li>
              <hr/>
            </ul>
          </div>

          <img src={servicesFoto} />
        </div>

        <button type="button" onClick={this.props.onClickHandler}>
          ЗАТВОРИ
        </button>
      </div>
    );
  }
}

export default DropdownServices;
