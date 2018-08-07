import React from 'react';

import {
	Spin,
	message
} from 'antd';

import axios from 'axios';

import ListBtnCon from '../../a_content/list_content/index.js';

class ListSon extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			refresh: false,
		};
	};
	componentWillMount() {};
	shouldComponentUpdate(nextProps, nextState) {
		return nextState.refresh;
	};
	componentWillReceiveProps(nextProps, nextState) {
		if (nextProps.number !== this.props.number) {
			this.setState({
				refresh: true,
			});
		} else {
			this.setState({
				refresh: false,
			});
		}
	};
	render() {
		const {
			index,
			number,
			handleClick
		} = this.props;
		//在每次渲染子组件时，打印该子组件的数字内容;
		// console.log(number);
		return <h1 onClick ={() => handleClick(index)}>{number}</h1>
	}
}

class List extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			num: 1,
			numFlag: 2,
			refresh: false,
			numberArray: [0, 1, 2],
			pageLoad: false,
			loading: true
		};
	};
	componentWillMount() {
		let o = this.checkUserAgent();
		console.log(o, 'ppp');
		axios.get('./data.json').then(res => {
			console.log(res);
		}).catch(err => {
			console.log(err);
		});
		this.mounted = true;
		setTimeout(() => {
			if (this.mounted) {
				this.setState({
					pageLoad: true,
					loading: false,
					refresh: true
				});
			}
		}, 500);
	};
	componentWillUnmount() {
		this.mounted = false;
	};
	shouldComponentUpdate(nextProps, nextState) {
		return nextState.refresh;
	}
	handleClick = (index) => {
		// let preNumberArray = this.state.numberArray;
		let {
			numberArray
		} = this.state;
		numberArray[index] += 1;
		this.setState({
			numberArray: numberArray,
			refresh: true,
		});
	};
	addClick() {
		message.destroy();
		message.success('ddd');
		let {
			num
		} = this.state;
		this.setState({
			num: num + 1,
			refresh: true
		});
	};
	//判断终端
	//		//判断是什么终端     ios  Android  还是pc
	checkUserAgent() {
		let u = navigator.userAgent,
			app = navigator.appVersion;
		//alert(app);
		let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

		let isAndroid = u.indexOf("Android") > -1; //Android终端

		//ios终端
		if (isiOS) {
			return "IOS";
			//Android
		} else if (isAndroid) {
			return "Android";
			//pc
		} else {
			return "PC";
		}
	};
	//浏览器传参截取
	getUrlParams() {
		let url = window.location.href;
		let index = url.indexOf("?");
		let result = "";
		if (index > 0) {
			let params = url.substr(index + 1).split("&");
			for (let i = 0; i < params.length; i++) {
				let ps = params[i].split("=");
				if (i == 0) {
					result += "{";
				}
				if (i != 0) {
					result += ",";
				}
				if (ps.length == 1) {
					result += "\"" + ps[0] + "\":\"\"";
				} else {
					result += "\"" + ps[0] + "\":\"" + ps[1] + "\"";
				}
				if (i == params.length - 1) {
					result += "}";
				}
			}
		}
		if ("" == result) {
			return "";
		} else {
			return JSON.parse(result);
		}
	};
	render() {
		let {
			pageLoad,
			loading,
			num,
			numFlag
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
							<div 
								style = {{padding:30, cursor: 'pointer'}}
							>
								{
					              	this.state.numberArray.map(
					                	(number,key) => {
					                 		return <ListSon
					                           key = {key}
					                           index = {key}
					                           number = {number}
					                           handleClick = {this.handleClick}/>
					                	}
					                )
					            }
					            <h1>{num}</h1>
					            <ListBtnCon numFlag={numFlag} addClick={this.addClick.bind(this)} />
					        </div> : null
				    }
		        </Spin>
		    </div>
		);
	}
}

export default List;