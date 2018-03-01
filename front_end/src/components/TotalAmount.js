import React from 'react';
import '../App.css';
<<<<<<< HEAD
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
=======
class TotalAmount extends React.Component {
>>>>>>> c0761b0834ff03df4bd956402603dffb9789fd20
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
<<<<<<< HEAD
                <input type="button" 
                      className="confirm" 
                      onClick={this.showModal}
                      value="Confirm"/>
                <Modal 
                    onClose={this.showModal}
                    show={this.state.show}>
                  </Modal>
=======
>>>>>>> c0761b0834ff03df4bd956402603dffb9789fd20
            </div>
        );
    }
}

export default TotalAmount;