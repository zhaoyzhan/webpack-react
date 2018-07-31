import React from 'react';
import './index.scss';
import {
	Link,
	Redirect
} from 'react-router-dom';

class RouterContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			outlogin: false
		};
	}
	_outlogin = () => {
		sessionStorage.removeItem('loginName');
		this.setState({
			outlogin: true
		});
	};
	render() {
		let {
			outlogin
		} = this.state;
		if (outlogin) {
			return <Redirect to="/login"></Redirect>
		}
		return (
			<div className="router-main-container">
				<ul className="router-main-ul">
					<li className="router-main-li">
						<Link 
							to={{
								pathname:"/home",
								data: {
									name: 'zhangsanb'
								}
							}} 
						>home</Link>
					</li>
					<li className="router-main-li">
						<Link 
							to={{
								pathname:"/car",
								data: {
									type: 'car'
								}
							}}
						>car</Link>
					</li>
					<li className="router-main-li"><Link to="/list" >list</Link></li>
					<li className="router-main-li"><Link to="/news" >news</Link></li>
					<li className="router-main-li"><Link to="/backstage" >backstage</Link></li>
					<li className="out-login" onClick={this._outlogin}>退出登录</li>
				</ul>
			</div>
		);
	}
}

export default RouterContainer;