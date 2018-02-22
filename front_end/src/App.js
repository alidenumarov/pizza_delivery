import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Pizzas from './Pizzas';
import Drinks from './Drinks';
import Snacks from './Snacks';
import Discounts from './Discounts';
import Contacts from './Contacts';
/*import logos from './palermo-pizza-logo.jpeg';*/
import logos from './pizza-logo.png';

class App extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <a href="/">
            <img src={logos} />
          </a>
          <div className="address">
            <p>Pizza Delivery in Almaty</p>
            <p>Day&Night</p>
          </div>
          <div className="phone_number">
            <p>Phone: </p>
            <p>+7 771 207 89 95</p>
          </div>
          <button className="basket">Basket</button>
        </div>
        
        <div className="header_menu">
          <Router>
            <div>
              <ul>
                <li><Link to="/">Pizzas</Link></li>
                <li><Link to="/drinks">Drinks</Link></li>
                <li><Link to="/snacks">Snacks</Link></li>
                <li><Link to="/discounts">Discounts</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
                </ul>

                <Route exact path="/" component={Pizzas} />
                <Route exact path="/drinks" component={Drinks} />
                <Route exact path="/snacks" component={Snacks} />
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
