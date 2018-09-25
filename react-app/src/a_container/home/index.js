/**
	// (function() {
	// 	this.x = '1234';
	// }).call(this);

	// function fun(num) {
	// 	this.x = num;
	// }
	// var obj = {};
	// fun.apply(obj, [44532]);
	// console.log(window.x);
	// console.log(obj.x);

	// var b = new fun(4331);
	// console.log(window.x);
	// let obj = {
	// 	n: 22,
	// 	h: '222',
	// 	f: function() {

	// 	}
	// };
	// (function a(xx, yy) {
	//     console.log(xx, yy);
	//     console.log(this, 'this');
	//     console.log(arguments);
	// }).call(obj, 4, 5);

	// (function a(xx, yy) {
	//     console.log(xx, yy);
	//     console.log(this, 'this');
	//     console.log(arguments);
	// })(1, 3);

	// var obj = {};
	// a.apply(obj, [5, 55]);
	// a.call(obj, 5, 55);

	// a.apply(null, [5, 55]);
	// a.call(null, 5, 55);


	// let b = {
	// 	x: 123,
	// 	f: function() {
	// 		console.log(this, 'this');
	// 	}
	// }
	// a();
	// b.f();
*/

/**
*
* h5 ios端 键盘遮挡输入框解决方案
*
var target = this;

try {
	var u = navigator.userAgent,
		app = navigator.appVersion;
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端  
	if (isiOS) {
		// window.setTimeout(function() {
		//2018-2-8修改ios 键盘弹出输入框不见的bug	
		// window.scrollTo(0, document.body.clientHeight);
		// }, 100);

		//解决ios遮挡输入框的问题
		document.querySelector('body').style.height = '9999px';

		setTimeout(function() {
			//要让input移到顶部，需要把body的scrollTop设置成input距离页面顶部的距离。    
			document.body.scrollTop = document.documentElement.scrollTop = document.querySelector('#sendMsg').getBoundingClientRect().top + pageYOffset - 5;
		}, 50);
	}
} catch (e) {}
$('.msg-container').scrollTop($('.msg-container')[0].scrollHeight);

*/


import React from 'react';

import axios from 'axios';

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
		},
		changeTitle: (v) => {
			dispatch(TodoAction.changeTitle(v));
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
		// console.log(this.props);
		this.props.fn.changeTitle(123456);
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