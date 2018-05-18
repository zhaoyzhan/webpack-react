import React from 'react';
import './index.scss';
import {
	Link
} from 'react-router-dom';

class RouterContainer extends React.Component {
	render() {
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
							replace
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
							replace
						>car</Link>
					</li>
					<li className="router-main-li"><Link to="/list" replace>list</Link></li>
				</ul>
			</div>
		);
	}
}

export default RouterContainer;