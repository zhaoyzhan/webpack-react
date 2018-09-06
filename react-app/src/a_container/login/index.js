import React from 'react';

import {
	Redirect
} from 'react-router-dom';

class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			nameEn: '',
			refresh: false,
			loginFlag: false,
			checkword: '',
		};
	};
	componentWillMount() {
		this.createCode();
		sessionStorage.removeItem('loginName');
	};
	componentdidMount() {

	};
	shouldComponentUpdate(nextProps, nextState) {
		return nextState.refresh;
	};
	nameEn = (e) => {
		this.setState({
			nameEn: e.target.value,
			refresh: false
		});
	};
	_login = () => {
		let loginName = this.state.nameEn;
		if (loginName !== '') {
			sessionStorage.setItem('loginName', loginName);
			this.setState({
				refresh: true,
				loginFlag: true
			});
		}
	};
	//验证码
	createCode = () => {
		let {
			checkword
		} = this.state;
		let codeLength = 6; //验证码的长度
		// let checkCode = document.getElementById("checkCode");
		let codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
			'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
			'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
		for (let i = 0; i < codeLength; i++) {
			let charNum = Math.floor(Math.random() * 52);
			checkword += codeChars[charNum];
		}
		this.setState({
			checkword,
			refresh: true
		}, () => {
			console.log(this.state.checkword);
		})
	};
	render() {
		let {
			loginFlag,
			checkword
		} = this.state;
		if (loginFlag) {
			return <Redirect to="/home"></Redirect>
		};
		const loginContainer = {
			display: "flex",

		};
		const codeStyle = {
			"fontFamily": "Arial",
			"fontStyle": "italic",
			"color": "blue",
			"fontSize": "30px",
			"border": 0,
			"padding": "2px 3px",
			"letterSpacing": "3px",
			"fontWeight": "bolder",
			"float": "left",
			"cursor": "pointer",
			"width": "150px",
			"height": "60px",
			"lineHeight": "60px",
			"textAlign": "center",
			"verticalAlign": "middle",
		};
		const cbStyle = {
			display: "flex",
			alignItems: "center"
		}
		return (
			<div>
				<div>
					<span>用户名:</span>
					<input type="text" onChange={this.nameEn}/>
					<br/>
					<button onClick={this._login}>确定</button>
				</div>
				<div>
					<div>
						<span>验证码: </span><input id="checkpass" type="text" />
					</div>
					<div className="chechbox" style={cbStyle`}>
						<div className="code" style={codeStyle} id="checkCode" onClick={this.createCode} >{checkword}</div>
						<a href="#" onClick={this.createCode}>看不清换一张</a>
					</div>
				</div>
			</div>
		)
	}
}

export default Login;