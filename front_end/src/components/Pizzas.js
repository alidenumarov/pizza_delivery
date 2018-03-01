import React, { Component } from 'react';
import '../App.css';
import PizzaItem from './PizzaItem';
import Basket from './Basket';
import TotalAmount from './TotalAmount';
import margarita from '../img/margarita.jpg';
import pepperoni from '../img/pepperoni.jpg';
import fourcheeses from '../img/fourcheeses.jpg';
import supermeat from '../img/supermeat.jpg';
// import InfoIcon from 'react-icons/lib/fa/info-circle';

function searchingFor(txt) {
	return function(x) {
	 	return x.name.toLowerCase().includes(txt.toLowerCase());
	}
}
class Pizzas extends Component {
	constructor(props){
    	super(props);
    	this.state = {
      		pizzaItems: [{id: 0, name: "Margarita", description: "spicy", image: margarita, price: 3150},
                  {id: 1, name: "Pepperoni", description: "tasty", image: pepperoni, price: 2690},
                  {id: 2, name: "4 Cheeses", description: "salty", image: fourcheeses, price: 3400},
				  {id: 3, name: "Super Meat", description: "meat", image: supermeat, price: 3150}
				],
			pizzaInBasket: [{
				id: 'noId', name: '' , image: '', price: '', isAdded: false, count: 0
			}],
			isNewPizzaAdded: false,
			value: '',
		}
		this.onAddToBasketClicked = this.onAddToBasketClicked.bind(this);
		this.renderBasketComponent = this.renderBasketComponent.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({value: event.target.value});
	}
	onAddToBasketClicked(curPizza) {
		if(curPizza !== undefined) {
			this.setState({isNewPizzaAdded: true});
			var pizzaInBasket = this.state.pizzaInBasket;
			var toAddPizza = curPizza.id, isPizzaExists = false;
			
			for(var curP = 0; curP < this.state.pizzaInBasket.length; curP++) {
				if(this.state.pizzaInBasket[curP].id === toAddPizza) {
					isPizzaExists = true;
					break;
				}
			}
			if(isPizzaExists === false) {
				pizzaInBasket.push({id: curPizza.id, name: curPizza.name, image: curPizza.image, price: curPizza.price, 
					count: 1});
				function filterPizz(pizz) {
					return pizz.id !== 'noId';
				}
				var basket = pizzaInBasket.filter(filterPizz);
				this.setState({
					pizzaInBasket: basket
				});
			}	
		}
	}
	renderBasketComponent() {
		if(this.state.isNewPizzaAdded) {
			return(
				this.state.pizzaInBasket.map((basketPiz) => {
					return<Basket id={basketPiz.id}
								  name={basketPiz.name}
								  image={basketPiz.image}
								  price={basketPiz.price}
								  count={basketPiz.count}
								  removePizza={this.removePizza}
								  incAmount={this.incAmount}
								  decAmount={this.decAmount} />
				})						
			);
		}
	}
	removePizza = (pizzaId) => {
		this.setState({ pizzaInBasket: this.state.pizzaInBasket.filter((tekPiz) => tekPiz.id !== pizzaId) });
	}
	incAmount = (pizzaId) => {
		var newPizzaCount = this.state.pizzaInBasket;
		for(var curP = 0; curP < this.state.pizzaInBasket.length; curP++) {
			if(this.state.pizzaInBasket[curP].id === pizzaId) {
				this.state.pizzaInBasket[curP].count++;
				newPizzaCount = this.state.pizzaInBasket;
			}
		}
		this.setState({pizzaInBasket: newPizzaCount});
	}
	decAmount = (pizzaId) => {
		var newPizzaCount = this.state.pizzaInBasket;
		for(var curP = 0; curP < this.state.pizzaInBasket.length; curP++) {
			if(this.state.pizzaInBasket[curP].id === pizzaId) {
				if(this.state.pizzaInBasket[curP].count > 1) {
					this.state.pizzaInBasket[curP].count--;
					newPizzaCount = this.state.pizzaInBasket;
				}
			}
		}
		this.setState({pizzaInBasket: newPizzaCount});
	}
  	render() {
		// let pizzaItems = 
		return (
			<div className="container">
<<<<<<< HEAD
				<input className="search" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search Pizza"/>
				
=======
				<input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search Pizza"/>
>>>>>>> c0761b0834ff03df4bd956402603dffb9789fd20
				<div>
					{this.state.pizzaItems.filter(searchingFor(this.state.value)).map((pizza) => {
						return <PizzaItem pizza={pizza} key={pizza.id} id={pizza.id} onAddToBasketClicked={this.onAddToBasketClicked}/>
					})}
				</div>
<<<<<<< HEAD
				<div className="basketParentCont">
=======
				<div>
>>>>>>> c0761b0834ff03df4bd956402603dffb9789fd20
					<h3>Basket Component</h3>
					{this.renderBasketComponent()}
					<TotalAmount pizzas={this.state.pizzaInBasket} />
				</div>
			</div>
		);
  }
}
export default Pizzas;