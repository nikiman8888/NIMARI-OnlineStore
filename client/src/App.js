import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Logo from "./components/Logo/Logo";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Logo />
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shoes" component={Home} />
          <Route path="/dress" component={Home} />
          <Route path="/pants" component={Home} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
