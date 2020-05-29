import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation-wrapper">
      <div className="left-part-navigation">
        <ul className = 'left-ul'>
          <li>
            <Link to="/">НАЧАЛО</Link>
          </li>
          <li>
            <Link to="/shoes">ОБУВКИ</Link>
          </li>
          <li>
            <Link to="/pants">ПАНТАЛОНИ</Link>
          </li>
          <li>
            <Link to="/dress">ДРЕХИ</Link>
          </li>
          <li>
            <Link to="/dress">РОКЛИ</Link>
          </li>
          <li>
            <Link to="/dress">МАТЕРИАЛИ</Link>
          </li>
          <li>
            <Link to="/dress">ШИВАШКИ УСЛУГИ</Link>
          </li>
        </ul>
      </div>
      <div className ='right-part-navigation'>
      <ul>
          <li>
            <Link to="/">КОНТАКТИ</Link>
          </li>     
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
