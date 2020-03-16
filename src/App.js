import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component.jsx";
import { Switch, Route, Link } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component.jsx";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/shop' component={ShopPage} />
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
