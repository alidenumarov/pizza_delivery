import React, { Component } from 'react';
import InfoIcon from 'react-icons/lib/fa/info-circle';
import PizzaDetails from './PizzaDetails';
class PizzaItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isDetailsClick: false
		};
	}

	handleDetailsClick = () => {
		const curId = this.props.id;
		if(!this.state.isDetailsClick) {
			this.setState({
				isDetailsClick: true
			});
		} else {
			this.setState({
				isDetailsClick: false
			});
		}
		// alert("nazhalas' " + curId);
	}

	renderAlwaysSection() {
		return(
			<div className="pizzaItems">
					<div className="pizzaItem" >
						<img src={this.props.pizza.image}/>
						<h3>{this.props.pizza.name} 
							<span onClick={this.handleDetailsClick}>
								<InfoIcon />
							</span>
						</h3>
						{this.props.pizza.description}
						<button>Add to Cart</button>
					</div>
    			</div>
		);
	}

  	render() {
		if(this.state.isDetailsClick) {
			return(
				<span>
					{this.renderAlwaysSection()}
					<span className="pizzaDetails"><PizzaDetails id={this.props.id}/></span>
				</span>				
			);
		} else
			return (
				<span>
					{this.renderAlwaysSection()}
				</span>
			);		
  	}
}

export default PizzaItem;