import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Logo from "./components/Logo/Logo";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Contacts from "./components/Contacts/Contacts";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownClothes: false,
      dropdownDresses: false,
      dropdownMaterials: false,
      dropdownServices: false,
      dropdownAccesories: false,
      dropdownKinkaleri: false,
    };
    //this.openedNavChecker = this.openedNavChecker.bind(this);
  }

  openedNavChecker = () => {
    // if find  opened dropdown it close it
    for (const key in this.state) {
      if (this.state[key] === true) {
        this.setState({ [key]: false });

        break;
      }
    }
  };
  updateStateFunc = (updated) =>{
    console.log(updated)
    this.setState({[updated]:true})
  }
  

  render() {
    return (
      <Router>
        <div className="app-wrapper">
          <Navigation closeNav={this.openedNavChecker} state={this.state} updateState = {this.updateStateFunc} />
          <Logo />
          <Switch>
            <Route path="/" exact render={(props) => <Home {...props} closeNav={this.openedNavChecker} />} />
            <Route path="/shoes" component={Home} />
            <Route path="/dress" component={Home} />
            <Route path="/pants" component={Home} />
            <Route path="/contacts" render={(props) => <Contacts {...props} closeNav={this.openedNavChecker} />}/>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
