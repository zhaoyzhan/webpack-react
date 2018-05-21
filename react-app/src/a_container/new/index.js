import React from 'react';

class NewSon extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			refresh: false
		};
	};
	componentWillMount() {

	};
	shouldComponentUpdate() {
		return true;
	};
	render() {
		let {
			num,
			handleClick
		} = this.props;
		return (
			<div>
				<h2>new son</h2>
				<p>{num}</p>
				<button onClick={() => handleClick('new son')}>点击</button>
			</div>
		);
	}
}

class NewFa extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			refresh: false,
			num: 1
		};
	}
	handleClick = (title) => {
		console.log(title)
	}
	render() {
		let {
			num
		} = this.state;
		return (
			<div>
				<h1>new father</h1>
				<NewSon num={num} handleClick={this.handleClick}/>
			</div>
		);
	}
}

export default NewFa;