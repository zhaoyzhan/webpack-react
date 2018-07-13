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
			loginFlag: false
		};
	};
	componentWillMount() {
		sessionStorage.removeItem('loginName');
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
	render() {
		let {
			loginFlag
		} = this.state;
		if (loginFlag) {
			return <Redirect to="/home"></Redirect>
		}
		return (
			<div>
				<span>用户名:</span>
				<input type="text" onChange={this.nameEn}/>
				<br/>
				<button onClick={this._login}>确定</button>
			</div>
		)
	}
}

export default Login;