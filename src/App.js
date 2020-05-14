import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Long from "./components/Long/Long";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return  (
    <Router>
      <Route path = "/" exact component = {Home}/>
      <Route path="/long" component= {Long}/>
    </Router>
  )
}

export default App;
