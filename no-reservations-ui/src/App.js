import React from 'react';
import './App.css';
import Header from "./Header/Header";
import AppContainer from "./AppContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <div className="App">
            <div className="App-container">
                <div className="App-header">
                    <Header/>
                </div>
                <div className="App-content">
                    <AppContainer/>
                </div>
            </div>
        </div>
    </Router>
  );
}

export default App;
