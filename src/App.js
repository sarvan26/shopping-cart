import './App.css';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route} from "react-router-dom";
import Login from './pages/login';
import Cart from './pages/cart';
import Dashboard from './pages/dashboard';

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

//Import the pages

// import Page1 from "./Components/page1"
// import Page2 from "./Components/page2"
// import Page3 from "./Components/page3"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="dashboard" element={<Dashboard />} />
          <Route exact path="cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


