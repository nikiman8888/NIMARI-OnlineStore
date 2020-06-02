import React, { Component } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import DropdownShoes from "../DropdownShoes/DropdownShoes";
import DropdownPants from "../DropdownPants/DropdownPants";
import DropdownClothes from "../DropdownClothes/DropdownClothes";
import DropdownDresses from "../DropdownDresses/DropdownDresses";
import DropdownMaterials from "../DropdownMaterials/DropdownMaterials";
import DropdownServices from "../DropdownServices/DropdownServices";
import nameChecker from "../../utils/clasnameHolder";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownShoes: false,
      dropdownPants: false,
      dropdownClothes: false,
      dropdownDresses: false,
      dropdownMaterials: false,
    };
    //this.onClickHandler = this.onClickHandler.bind(this);
  }
  onClickHandler = () => {
    this.openedNavChecker();
  };

  openedNavChecker = () => {
    // if find  opened dropdown it close it
    for (const key in this.state) {
      if (this.state[key] === true) {
        this.setState({ [key]: false });

        break;
      }
    }
  };

  onHoverHandler = (e) => {
    const { className } = e.target;
    if (nameChecker().includes(className)) {
      console.log(className);
      //if includes need to close the open dropdown,if not do nothing

      this.openedNavChecker();
      this.setState({ [className]: true });
    }
  };

  render() {
    let {
      dropdownShoes,
      dropdownPants,
      dropdownClothes,
      dropdownDresses,
      dropdownMaterials,
      dropdownServices,
    } = this.state;

    return (
      <div className="navigation-wrapper">
        <div className="left-part-navigation">
          <ul className="left-ul">
            <li onMouseMove={this.openedNavChecker}>
              <Link to="/" className="home-link">
                НАЧАЛО
              </Link>
            </li>
            <li onMouseOver={this.onHoverHandler}>
              <Link to="/shoes" className="dropdownShoes">
                ОБУВКИ
              </Link>
              {dropdownShoes && (
                <DropdownShoes onClickHandler={this.onClickHandler} />
              )}
            </li>
            <li onMouseOver={this.onHoverHandler}>
              <Link to="/pants" className="dropdownPants">
                ПАНТАЛОНИ
              </Link>
              {dropdownPants && (
                <DropdownPants onClickHandler={this.onClickHandler} />
              )}
            </li>
            <li onMouseOver={this.onHoverHandler}>
              <Link to="/clothes" className="dropdownClothes">
                ДРЕХИ
              </Link>
              {dropdownClothes && (
                <DropdownClothes onClickHandler={this.onClickHandler} />
              )}
            </li>
            <li onMouseOver={this.onHoverHandler}>
              <Link to="/dresses" className="dropdownDresses">
                РОКЛИ
              </Link>
              {dropdownDresses && (
                <DropdownDresses onClickHandler={this.onClickHandler} />
              )}
            </li>
            <li onMouseOver={this.onHoverHandler}>
              <Link to="/materials" className="dropdownMaterials">
                МАТЕРИАЛИ
              </Link>
              {dropdownMaterials && (
                <DropdownMaterials onClickHandler={this.onClickHandler} />
              )}
            </li>
            <li onMouseOver={this.onHoverHandler}>
              <Link to="/dress" className="dropdownServices">
                ШИВАШКИ УСЛУГИ
              </Link>
              {dropdownServices && (
                <DropdownServices onClickHandler={this.onClickHandler} />
              )}
            </li>
          </ul>
        </div>
        <div className="right-part-navigation">
          <ul>
            <li onMouseMove={this.openedNavChecker}>
              <Link to="/">КОНТАКТИ</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
