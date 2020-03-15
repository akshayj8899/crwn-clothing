import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component.jsx";
import { Switch, Route, Link } from "react-router-dom";


const HatsPage = () => (
  <div><h1>HATS PAGE!</h1><Link to='/'>Hello</Link></div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route path='/hats' component={HatsPage} />
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
