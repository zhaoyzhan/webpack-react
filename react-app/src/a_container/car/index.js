import React from 'react';
import CarContent from '../../a_content/car_content/index.js';

class Car extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			carContent: 0,
			addTwo: 0
		};
	}
	componentWillMount() {
		// console.log(this.props);
	};
	add() {
		this.setState({
			carContent: this.state.carContent + 1
		})
	};
	addTwo() {
		this.setState({
			addTwo: this.state.addTwo + 2
		});
		// console.log('3');
	};
	render() {
		return (
			<div>
				<h1>{this.state.addTwo}</h1>
				<button onClick={this.add.bind(this)}>添加 1</button>
				<button onClick={this.addTwo.bind(this)}>添加 2</button>
				<CarContent name={this.state.carContent}></CarContent>
			</div>
		);
	}
}

export default Car;