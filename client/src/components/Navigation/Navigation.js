import React, { Component } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import DropdownAccesories from "../DropdownAccesories/DropdownAccesories";
import DropdownKinkaleri from "../DropdownKinkaleri/DropdownKinkaleri";
import DropdownClothes from "../DropdownClothes/DropdownClothes";
import DropdownServices from "../DropdownServices/DrDropdownServices";
import nameChecker from "../../utils/clasnameHolder";

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  onClickHandler = () => {
    this.props.closeNav(); //we call the props function(from App component) to close opened dropdown
  };

  onHoverHandler = (e) => {
    const { className } = e.target;

    if (nameChecker().includes(className)) {
      //if includes we call openNavChecker to close the open Nav
      this.props.closeNav();
      this.props.updateState(className); //and we setState in parent func
    }
  };

  render() {
    let {
      dropdownAccesories,
      dropdownKinkaleri,
      dropdownClothes,
      dropdownServices,
    } = this.props.state;

    return (
      <div className="navigation-wrapper">
        <div className="left-part-navigation">
          <ul className="left-ul">
            <li onMouseMove={this.props.closeNav}>
              <Link to="/" className="home-link">
                НАЧАЛО
              </Link>
            </li>
            <li onMouseOver={this.onHoverHandler} onClick = {this.onClickHandler}>
              <Link to="/services" className="dropdownServices">
                ШИВАШКИ УСЛУГИ
              </Link>
              {dropdownServices && (
                <DropdownServices onClickHandler={this.props.closeNav} />
              )}
            </li>
            <li onMouseOver={this.onHoverHandler}>
              <Link to="/clothes" className="dropdownClothes">
                ДРЕХИ
              </Link>
              {dropdownClothes && (
                <DropdownClothes onClickHandler={this.props.closeNav} />
              )}
            </li>
            <li onMouseOver={this.onHoverHandler}>
              <Link to="/accesories" className="dropdownAccesories">
              АКСЕСОАРИ
              </Link>
              {dropdownAccesories && (
                <DropdownAccesories onClickHandler={this.props.closeNav} />
              )}
            </li>
            <li onMouseOver={this.onHoverHandler}>
              <Link to="/pants" className="dropdownKinkaleri">
              КИНКАЛЕРИЯ
              </Link>
              {dropdownKinkaleri&& (
                <DropdownKinkaleri onClickHandler={this.props.closeNav} />
              )}
            </li>
          </ul>
        </div>
        <div className="right-part-navigation">
          <ul>
            <li onMouseMove={this.props.closeNav}>
              <Link to="/contacts">КОНТАКТИ</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
