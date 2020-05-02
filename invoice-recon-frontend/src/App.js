import React from "react";
import Dashboard from "./components/Layout/WelcomePage/Dashboard";
import Header from "./components/Layout/WelcomePage/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Dashboard />
      </div>
    </Router>
  );
}

export default App;
