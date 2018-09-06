/**
日期控件
*/

import React from 'react';

class DateFiveCon extends React.Component {
	componentWillMount() {
		// console.log(this.day30());
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
		return (
			<div className="three-five-container" style={threeMainContent}>
				five
			</div>
		);
	}
}

export default DateFiveCon;