import React from 'react';
import '../App.css';
import Modal from './Modal';

class TotalAmount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneVal: "",
            addressVal: "",
        }
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangeAddress = this.handleChangeAddress.bind(this);
    }
    handleChangePhone(e) {
        this.setState({phoneVal: e.target.value});
    }
    handleChangeAddress(e) {
        this.setState({addressVal: e.target.value});
    }
    addPizzasToDB(pizzas, phone, address) {
        // let phone =  this.refs.editPhone.value;
		// console.log(pizzas);
        this.props.addPizzasToDB(pizzas, phone, address);
    }
    totalAmount(pizzaInBasket) {
        var sum = 0;
        for(var curP = 0; curP < pizzaInBasket.length; curP++) {
            sum += pizzaInBasket[curP].price * pizzaInBasket[curP].count;
        }
        return sum;
    }
    render() {
        return(
            <div className="containerAmount">
                <p>Total Amount={this.totalAmount(this.props.pizzas)}</p>
                <input type="text" ref="editPhone" placeholder="Phone Number"/> <br />

                <input type="text" ref="editAddress" placeholder="Address"/> <br />
                <input type="submit" className="confirm"
                onClick={(e) => this.addPizzasToDB(this.props.pizzas, this.refs.editPhone.value, this.refs.editAddress.value)} value="Make Order"/>
                
            </div>
        );
    }
}

export default TotalAmount;