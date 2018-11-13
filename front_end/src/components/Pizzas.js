import React, { Component } from 'react';
import '../App.css';
import PizzaItem from './PizzaItem';
import Basket from './Basket';
import TotalAmount from './TotalAmount';
import Modal from './Modal';

function searchingFor(txt) {
	return function(x) {
	 	return x.name.toLowerCase().includes(txt.toLowerCase());
	}
}

	/*{id: 0, name: "Margarita", description: "spicy", image: margarita, price: 3150},
  {id: 1, name: "Pepperoni", description: "tasty", image: pepperoni, price: 2690},
  {id: 2, name: "4 Cheeses", description: "salty", image: fourcheeses, price: 3400},
  {id: 3, name: "Super Meat", description: "meat", image: supermeat, price: 3150},
  {id: 4, name: "Sauce", description: "cheese", image: sauce, price: 1000},
  {id: 5, name: "Chicken", description: "chicken", image: chicken, price: 2810}*/
  export default class Pizzas extends Component {
	constructor(props){
		super(props);
		//   {id: 0, name: "Margarita", description: "spicy", image: margarita, price: 3150},		
    	this.state = {
      		pizzaItems: [],
			pizzaInBasket: [],
			isNewPizzaAdded: false,
			value: '',			
		}
		this.onAddToBasketClicked = this.onAddToBasketClicked.bind(this);
		this.renderBasketComponent = this.renderBasketComponent.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.addPizzasToDB = this.addPizzasToDB.bind(this);
	}
	componentDidMount() {
		fetch('http://127.0.0.1:8000/api/pizzas/')
		.then(Response => Response.json())
		.then((findresponse) => {
			// console.log(findresponse)
			this.setState({
				pizzaItems: findresponse,
			})
		})
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
					return <Basket id={basketPiz.id}
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

	addPizzasToDB(pizzasToAdd, phone, address) {
		// var pizzaInBasket = this.state.pizzaInBasket;
		// 	var toAddPizza = curPizza.id, isPizzaExists = false;
		if(phone !== "" && address !== "") {
			for(var curP = 0; curP < pizzasToAdd.length; curP++) {
				// console.log("Name:" + pizzasToAdd[curP].count);
				fetch('http://127.0.0.1:8000/api/pizzas/make_order/', {
					method: 'POST',
						body: JSON.stringify({
							'pizza': pizzasToAdd[curP].name,
							'image': pizzasToAdd[curP].image,
							'cost': pizzasToAdd[curP].price,
							'count': pizzasToAdd[curP].count,
							'clientPhoneNumber': phone,
							'clientAddress': address
					}),
				}).then(response => response.json());
			}
			alert("Thanks For Your Order! Wait for Your Pizza!")
			this.setState({ pizzaInBasket: [], });		
		} else {
			alert("Enter your phone number and address!")
		}
	}

	removePizza = (pizzaId) => {
		// alert(pizzaId);
		this.setState({ pizzaInBasket: this.state.pizzaInBasket.filter((tekPiz) => tekPiz.id !== pizzaId) });
		// fetch('http://127.0.0.1:8000/api/pizzas/make_order/' + pizzaId + '/', {
		// 	method: 'DELETE'
		// }).then(response => response.json());
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
		return (
			<div className="container">
				<input className="search" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search Pizza"/>
				
				<div>
					{this.state.pizzaItems.filter(searchingFor(this.state.value)).map((pizza) => {
						return <PizzaItem pizza={pizza} key={pizza.id} id={pizza.id} onAddToBasketClicked={this.onAddToBasketClicked}/>
					})}

				</div>
				<div className="basketParentCont">
					<h3 className="basketHeader">BASKET</h3>
					<hr />
					{this.renderBasketComponent()}
					<hr />
					<TotalAmount pizzas={this.state.pizzaInBasket} addPizzasToDB={this.addPizzasToDB} />
				</div>
			</div>
		);
  }
}