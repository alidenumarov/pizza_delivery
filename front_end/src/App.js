import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Pizzas from './components/Pizzas';
import Discounts from './components/Discounts';
import Contacts from './components/Contacts';
import Header from './components/Header';
import Basket from './components/Basket';
import banner from './img/Screenshot_2.png';

class App extends Component {
  render() {
    return (
      <div className="container">
      <img src={banner} className="banner"/>
        <Header />
        <div className="header_menu">
          <Router>
            <div>
              <ul>
                <li><Link to="/">Pizzas</Link></li>
                <li><Link to="/discounts">Discounts</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
                </ul>

                <Route exact path="/" component={Pizzas} />
                <Route exact path="/discounts" component={Discounts} />
                <Route exact path="/contacts" component={Contacts} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
