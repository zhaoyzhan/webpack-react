/**
日期控件
*/

import React from 'react';

import {
	PropTypes as P
} from 'prop-types';

import {
	connect
} from 'react-redux';

//本页所需action
import * as TodoAction from '../../../../a_action/info_action/index.js';

// 最终要交给redux管理的所有变量
const mapStoreStateToProps = (state) => ({
	dispatch: state.dispatch
});

// 最终要交给redux管理的所有action
// 即定义哪些方法将成为action
const mapDispatches = (dispatch) => ({
	fn: {
		getInfo: (v) => {
			dispatch(TodoAction.getInfo(v));
		},
		setInfo: (v) => {
			dispatch(TodoAction.setInfo(v));
		},
		deleInfo: (v) => {
			dispatch(TodoAction.deleInfo(v));
		}
	},
});

class DateFiveCon extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			//保存信息obj
			obj: {
				name: '',
				age: '',
				tel: ''
			},
			deleName: ''
		};
	}
	componentWillMount() {
		// console.log(this.day30());
	};
	shouldComponentUpdate(nextProps, nextState) {
		// console.log(nextState);
		return true;
	};
	//今天
	today = () => {
		let date = new Date();
		let seperator1 = "-";
		let seperator2 = ":";
		let month = date.getMonth() + 1;
		let strDate = date.getDate();
		if (month >= 1 && month <= 9) {
			month = "0" + month;
		}
		if (strDate >= 0 && strDate <= 9) {
			strDate = "0" + strDate;
		}
		let currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
		return currentdate;
	};
	//昨天
	yesterday = () => {
		let seperator1 = "-";
		let seperator2 = ":";
		let day1 = new Date();
		day1.setTime(day1.getTime() - 24 * 60 * 60 * 1000);
		let month = day1.getMonth() + 1;
		let strDate = day1.getDate();
		if (month >= 1 && month <= 9) {
			month = "0" + month;
		}
		if (strDate >= 0 && strDate <= 9) {
			strDate = "0" + strDate;
		}
		let currentdate = day1.getFullYear() + seperator1 + month + seperator1 + strDate;
		return currentdate;
	};
	//七天前
	day7 = () => {
		let seperator1 = "-";
		let seperator2 = ":";
		let day1 = new Date();
		day1.setTime(day1.getTime() - 7 * 24 * 60 * 60 * 1000);
		let month = day1.getMonth() + 1;
		let strDate = day1.getDate();
		if (month >= 1 && month <= 9) {
			month = "0" + month;
		}
		if (strDate >= 0 && strDate <= 9) {
			strDate = "0" + strDate;
		}
		let currentdate = day1.getFullYear() + seperator1 + month + seperator1 + strDate;
		return currentdate;
	};
	//30天前
	day30 = () => {
		let seperator1 = "-";
		let seperator2 = ":";
		let day1 = new Date();
		day1.setTime(day1.getTime() - 30 * 24 * 60 * 60 * 1000);
		let month = day1.getMonth() + 1;
		let strDate = day1.getDate();
		if (month >= 1 && month <= 9) {
			month = "0" + month;
		}
		if (strDate >= 0 && strDate <= 9) {
			strDate = "0" + strDate;
		}
		let currentdate = day1.getFullYear() + seperator1 + month + seperator1 + strDate;
		return currentdate;
	};
	//获取信息
	getInfo = () => {
		// console.log('获取信息');
		let {
			name
		} = this.state;
		this.props.fn.getInfo({
			name
		});
	};
	//保存信息
	setInfo = () => {
		// console.log('保存信息');
		this.props.fn.setInfo({
			obj: this.state.obj
		});
	};
	//删除信息
	deleInfo = () => {
		// console.log('删除信息');
		this.props.fn.deleInfo({
			name: this.state.deleName
		});
	};
	//查找信息的name
	getNameOnchange = (e) => {
		this.setState({
			name: e.target.value,
		});
	};
	/**
		保存信息  name   age   tel
	*/
	setNameOnchange = (type, e) => {
		let obj = this.state.obj;
		obj[type] = e.target.value;
		this.setState({
			obj
		});
	};
	//删除name
	deleAgeOnchange = (e) => {
		this.setState({
			deleName: e.target.value
		});
	};
	render() {
		const threeMainContent = {
			position: 'absolute',
			top: '40px',
			left: '0',
			right: '0',
			bottom: '0',
			padding: '10px',
			overflowY: 'auto'
		};
		const {
			name
		} = this.state;
		return (
			<div className="three-five-container" style={threeMainContent}>
				<div>
					<input placeholder="姓名" onChange={this.getNameOnchange} type="text"/>
					<br />
					<button onClick={this.getInfo}>获取信息</button>
					<br />
					<br />
					<br />
					<input type="text" placeholder="姓名" onChange={this.setNameOnchange.bind(this, 'name')}/>
					<br />
					<input type="text" placeholder="电话" onChange={this.setNameOnchange.bind(this, 'tel')}/>
					<br />
					<input type="text" placeholder="年龄" onChange={this.setNameOnchange.bind(this, 'age')}/>
					<br />
					<button onClick={this.setInfo}>保存信息</button>
					<br />
					<br />
					<br />
					<input type="text" placeholder="姓名" onChange={this.deleAgeOnchange}/>
					<br />
					<button onClick={this.deleInfo}>删除信息</button>
				</div>
			</div>
		);
	}
}

DateFiveCon.propTypes = {
	dispatch: P.func
}

export default connect(mapStoreStateToProps, mapDispatches)(DateFiveCon);

// export default DateFiveCon;