import React from 'react';
import '../App.css';
import margarita from '../img/margarita.jpg';
import pepperoni from '../img/pepperoni.jpg';
import fourcheeses from '../img/fourcheeses.jpg';
import supermeat from '../img/supermeat.jpg';

<<<<<<< HEAD

class Basket extends React.Component {
    
=======
class Basket extends React.Component {
>>>>>>> c0761b0834ff03df4bd956402603dffb9789fd20
    removePizza(pizzaId) {
        this.props.removePizza(pizzaId);
    }
    incAmount(pizzaId) {
        this.props.incAmount(pizzaId);
    }
    decAmount(pizzaId) {
        this.props.decAmount(pizzaId);
    }
    render() {
        return(
<<<<<<< HEAD
            <div className="bContainer">
                <img className="basketPizzaImg" src={this.props.image} onerror={pepperoni}/>
                     {this.props.name} {this.props.price}тг 
                     <br />
                     <button onClick={(e) => this.decAmount(this.props.id)}>-</button> 
                         {this.props.count} 
                     <button onClick={(e) => this.incAmount(this.props.id)}>+</button> <br />

                     <button className="remove" onClick={(e) => this.removePizza(this.props.id)} >Remove</button>
                    <hr />
            </div> 
=======
            <div className="container">
                <img className="basketPizzaImg" src={this.props.image} onerror={pepperoni}/>
                 {this.props.name} {this.props.price}тг 
                 <br />
                 <button onClick={(e) => this.decAmount(this.props.id)}>-</button> 
                    count: {this.props.count} 
                 <button onClick={(e) => this.incAmount(this.props.id)}>+</button> <br />

                 <button onClick={(e) => this.removePizza(this.props.id)} >Remove</button>
                <hr />
            </div>
>>>>>>> c0761b0834ff03df4bd956402603dffb9789fd20
        );
    }
}

<<<<<<< HEAD
export default Basket;
=======
export default Basket;
>>>>>>> c0761b0834ff03df4bd956402603dffb9789fd20
