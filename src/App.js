import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Restaurant from "./Restaurants/Restaurant";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Reservations from "./Reservations/Reservations";
import HomePage from "./Home/HomePage";

function App() {
  return (
    <Router>
        <div className="App">
            <div className="App-container">
                <div className="App-header">
                    <Header/>
                </div>
                <div className="App-content">
                    <Route path={"/"} exact={true} component={HomePage} />
                    <Route path={"/home"} exact={true} component={HomePage} />
                    <Route path="/restaurants" exact={true} component={Restaurant}/>
                    <Route path="/restaurants/:restaurant/reservations" exact={true} component={Reservations}/>
                </div>
            </div>
        </div>
    </Router>
  );
}

export default App;
