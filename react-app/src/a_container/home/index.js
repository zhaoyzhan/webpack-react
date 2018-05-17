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
		this.changeNum.bind(this);
	}
	changeNum() {
		// this.props.fn.changeNum(1);
		console.log(this.props);
	};
	changeTitle() {
		console.log('222');
	};
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h1>{this.props.num}</h1>
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