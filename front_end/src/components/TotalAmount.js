import React from 'react';
import '../App.css';
import Modal from './Modal';

class TotalAmount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          show: false
        };
    }
    showModal = () => {
            this.setState({
            ...this.state,
            show: !this.state.show
        });
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
            <div className="container">
                <p>Total Amount={this.totalAmount(this.props.pizzas)}</p>
                <input type="button" 
                      className="confirm" 
                      onClick={this.showModal}
                      value="Confirm"/>
                <Modal 
                    onClose={this.showModal}
                    show={this.state.show}>
                  </Modal>
            </div>
        );
    }
}

export default TotalAmount;