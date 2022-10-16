import React from "react";
import "react-image-lightbox/style.css";
import logo from "./logo.svg";
import "./App.scss";
import Home from "./components/Home";
import AddNewProduct from "./components/AddNewProduct";
import Product from "./components/Product/Product";
import Nav from "./components/Navigation/Nav";
import Weather from "./components/Weather/Weather";
import OTP from "./components/OTP/OTP";
import WeatherByLocation from "./components/Weather/WeatherByLocation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <div className="App">
            <header className="App-header content-left">
              <div style={{ textAlign: "center" }}>
                {" "}
                <img src={logo} className="App-logo" alt="logo" />
              </div>

              <p>
                <span>React App</span>
              </p>
              <Home />
            </header>
            <div className="content-right">
              <AddNewProduct />
              <Product />
            </div>
          </div>
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/weather" exact>
          <Weather />
        </Route>
        <Route path="/otp">
          <OTP />
        </Route>
        <Route path="/weather/detail/:woeid">
          <WeatherByLocation/>
        </Route>
        <Route path="*">
          <div>404 NOT FOUND</div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
