import React from 'react';
import '../App.css';

class Basket extends React.Component {
    
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
            <div className="bContainer">
                <img className="basketPizzaImg" src={this.props.image}/>
                     {this.props.name} {this.props.price}тг 
                     <br />
                     <button className="sign" onClick={(e) => this.decAmount(this.props.id)}>-</button> 
                         {this.props.count} 
                     <button className="sign" onClick={(e) => this.incAmount(this.props.id)}>+</button> <br />

                     <button className="sign" onClick={(e) => this.removePizza(this.props.id)} >Remove</button>

            </div>
        );
    }
}

export default Basket;
