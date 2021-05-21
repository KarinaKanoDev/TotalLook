import './App.css';
import './ComponentView/shoppingCar/ShoppingCar.css'

import React from "react";
import './ComponentView/homePage/Home.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import {Home} from './ComponentView/homePage/Home';
import {Category} from './ComponentView/categoryPage/Category';
import {Product} from './ComponentView/productPage/Product';
import {ShoppingCar} from './ComponentView/shoppingCar/ShoppingCar';


function App() {
  return (
    <div className="App">
        
    <Router>
      <Switch>
        <Route path='/' exact>
         <Home />
        </Route>
        <Route path='/Category'>
         <Category />
        </Route>
        <Route path='/Products'>
         <Product />
        </Route>
        <Route path='/ShoppingCar'>
         <ShoppingCar />
        </Route>
      </Switch>
    </Router>   
  


    </div>
  );
}

export default App;
