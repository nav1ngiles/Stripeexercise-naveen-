import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar'
import Home from './components/Home'
import InjectedCheckoutPage from './components/CheckoutPage'

function App() {
  return (
    
    <Router>
      <div >
       <Navbar/> 

        <Switch>
          <Route path="/checkout">
              <InjectedCheckoutPage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
