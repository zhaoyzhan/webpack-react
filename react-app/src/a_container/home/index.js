import React from 'react';

import {
	PropTypes as P
} from 'prop-types';

import {
	connect
} from 'react-redux';

//本页所需action
import * as TodoAction from '../../a_action/home_action/index.js';

// 最终要交给redux管理的所有变量
const mapStoreStateToProps = (state) => ({
	dispatch: state.dispatch,
	num: state.home.num,
	title: state.home.title
});

// 最终要交给redux管理的所有action
// 即定义哪些方法将成为action
const mapDispatches = (dispatch) => ({
	fn: {
		changeNum: (v) => {
			dispatch(TodoAction.changeNum(v));
		}
	},
});

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	componentWillMount() {
		// console.log(this.props);
		console.log(document.getElementById);
	};
	changeNum = (e) => {
		// e.defaultView();
		// console.log(num.target, name);
		this.props.fn.changeNum(1);
	};
	changeTitle = (e) => {
		// console.log(name);
	};
	render() {
		return (
			<div className="home_container">
				<h1>{this.props.title}</h1>
				<h1>{this.props.num}</h1>
				<img src={require("../../img/login-bg.6944511.png")} width='100' height='100' alt=""/>
				<button onClick={this.changeTitle}>dd</button>
				<button onClick={this.changeNum}>+1</button>
			</div>
		);
	}
}

Home.propTypes = {
	dispatch: P.func,
	fn: P.object,
	num: P.number,
	title: P.string
}

export default connect(mapStoreStateToProps, mapDispatches)(Home);