import React from 'react';

import {
	PropTypes as P
} from 'prop-types';

import {
	connect
} from 'react-redux';

import {
	Spin
} from 'antd';

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

		this.state = {
			loading: true,
			pageLoad: false
		};
	}
	componentDidMount() {
		this.mounted = true;
		setTimeout(() => {
			if (this.mounted) {
				this.setState({
					loading: false,
					pageLoad: true
				});
			}
		}, 500);
	}
	componentWillMount() {

	};
	componentWillUnmount() {
		this.mounted = false;
	};
	changeNum = (e) => {
		this.props.fn.changeNum(1);
	};
	changeTitle = (e) => {};
	textAreaChange = (e) => {
		// let value = e.target.value
	};
	showMessage = () => {
		let a = '';
		a.map((index, item) => {
			console.log(index);
		})
		console.log(222);
	};
	render() {
		let newDefaultValue = {
			name: 'zhangsan',
			age: 12,
			data: {
				texta: 'dads'
			}
		};
		let obj = {
			'host': '',
			'port': '',
			'username': '',
			'password': '',
			data: {
				name: 23,
				children: [{
					age: 22233,
					name: 'dada'
				}]
			}
		};
		var objStr = JSON.stringify(obj, null, 4);
		let {
			pageLoad,
			loading
		} = this.state;
		return (
			<div className="main-container">
				<Spin 
					size="large" 
					spinning={loading}
					style={{textAlign: 'center', width: '100%', paddingTop: 100}}
				>
					{	
						pageLoad ? 
							<div className="home_container" style={{background: pageLoad ? '#fff' : ''}}>
								<h1>{this.props.title}</h1>
								<h1>{this.props.num}</h1>
								<img src={require('../../img/img3.jpg')} alt=""/>
								<button onClick={this.changeTitle}>dd</button>
								<button onClick={this.changeNum}>+1</button>
								<button onClick={this.showMessage}>+2</button>
								<textarea defaultValue={objStr} onChange={this.textAreaChange} name="" id="" cols="30" rows="10">
								</textarea>
							</div> : null
					}
				</Spin>
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