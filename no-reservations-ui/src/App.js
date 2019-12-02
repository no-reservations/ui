import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Restaurant from "./Restaurants/Restaurant";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Reservations from "./Reservations/Reservations";

function App() {
  return (
    <Router>
        <div className="App">
            <div className="App-container">
                <div className="App-header">
                    <Header/>
                </div>
                <div className="App-content">
                    <Route path="/restaurants" component={Restaurant}/>
                    <Route path="/reservations" component={Reservations}/>
                </div>
            </div>
        </div>
    </Router>
  );
}

export default App;
