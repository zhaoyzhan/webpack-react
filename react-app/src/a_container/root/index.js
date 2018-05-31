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
				</ul>
			</div>
		);
	}
}

export default RouterContainer;