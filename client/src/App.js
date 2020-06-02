import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Logo from "./components/Logo/Logo";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

class App extends Component {
  state = {
    isScrowling:false
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  onScroll = () => {
    this.setState({ isScrolling: true });

    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.setState({ isScrolling: false });
    }, 200);
  };

  render (){
    let  {isScrowling} = this.state;
    return (
      <Router>
        <div className="app-wrapper">
          <Navigation />
          {!isScrowling && <Logo />}
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
 
}

export default App;
