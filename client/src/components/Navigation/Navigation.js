import React, { Component } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import DropdownShoes from "../DropdownShoes/DropdownShoes";
import DropdownPants from "../DropdownPants/DropdownPants";
import nameChecker from "../../utils/clasnameHolder";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownShoes: false,
      dropdownPants: false,
    };

  }
  openedNavChecker = ()=>{
    for (const key in this.state) {
      if (this.state[key] === true) {
        this.setState({ [key]: false });

        break;
      }
    }
  }
 
  onHoverHandler = (e,) => {   
    const { className } = e.target;
    if (nameChecker().includes(className)) {
      //if includes need to close the open dropdown,if not do nothing
      this.openedNavChecker();
      this.setState({ [className]: true });
    }
  };
 
  render() {
    let { dropdownShoes, dropdownPants } = this.state;
    return (
      <div className="navigation-wrapper">
        <div className="left-part-navigation">
          <ul className="left-ul">
            <li onMouseMove = {this.openedNavChecker}>
              <Link to="/" className="home-link">
                НАЧАЛО
              </Link>
            </li>
            <li onMouseOver={this.onHoverHandler} >
              <Link to="/shoes" className="dropdownShoes">
                ОБУВКИ
              </Link>
              {dropdownShoes && <DropdownShoes />}
            </li>
            <li onMouseOver={this.onHoverHandler}>
              <Link to="/pants" className="dropdownPants">
                ПАНТАЛОНИ
              </Link>
              {dropdownPants && <DropdownPants />}
            </li>
            <li>
              <Link to="/clothes" className="dropdownClothes">
                ДРЕХИ
              </Link>
            </li>
            <li>
              <Link to="/dresses" className="dropdownDresses">
                РОКЛИ
              </Link>
            </li>
            <li>
              <Link to="/materials" className="dropdownMaterials">
                МАТЕРИАЛИ
              </Link>
            </li>
            <li>
              <Link to="/dress">ШИВАШКИ УСЛУГИ</Link>
            </li>
          </ul>
        </div>
        <div className="right-part-navigation">
          <ul>
            <li>
              <Link to="/">КОНТАКТИ</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
