import React, { Component } from 'react';
import '../App.css';
import PizzaItem from './PizzaItem';
import margarita from '../img/margarita.jpg';
import pepperoni from '../img/pepperoni.jpg';
import fourcheeses from '../img/fourcheeses.jpg';
import supermeat from '../img/supermeat.jpg';
// import InfoIcon from 'react-icons/lib/fa/info-circle';

class Pizzas extends Component {
	constructor(props){
    	super(props);
    	this.state = {
      		pizzaItems: [{id: 0, name: "Margarita", description: "spicy", image: margarita, price: "3150 тг"},
                  {id: 1, name: "Pepperoni", description: "tasty", image: pepperoni, price: "2690 тг"},
                  {id: 2, name: "4 Cheeses", description: "salty", image: fourcheeses, price: "3400 тг"},
				  {id: 3, name: "Super Meat", description: "meat", image: supermeat, price: "3150 тг"}
				],
    	}
  	};
  render() {
  	let pizzaItems = this.state.pizzaItems.map((pizza) => {
      return <PizzaItem pizza={pizza} key={pizza.id} id={pizza.id}/>
	})
	return (
		<div className="container">
			<h2>Pizzas page!</h2>
			<br/>
				{pizzaItems}
			<br />
		</div>
	);
  }
}
export default Pizzas;