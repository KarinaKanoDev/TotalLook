import './App.css';
import './ComponentView/productPage/Product.css';
import React from "react";
import './ComponentView/homePage/Home.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import { Home } from "./ComponentView/homePage/Home";
import { Product } from "./ComponentView/productPage/Product";
import { ShoppingCar } from "./ComponentView/shoppingCar/ShoppingCar";
import {MenCategory} from './ComponentView/categoryPage/MenCategory'
import {WomenCategory} from './ComponentView/categoryPage/WomenCategory'
import {AllCategories} from './ComponentView/categoryPage/AllCategories'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/MenCategory">
            <MenCategory />
          </Route>
          <Route path="/WomenCategory">
            <WomenCategory />
          </Route>
          <Route path="/AllCategory">
            <AllCategories />
          </Route>
          <Route path="/Products">
            <Product />
          </Route>
          <Route path="/ShoppingCar">
            <ShoppingCar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
