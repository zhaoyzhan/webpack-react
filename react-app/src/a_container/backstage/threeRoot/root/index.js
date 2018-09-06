import React from 'react';

import {
	Link,
	Redirect,
	Route
} from 'react-router-dom';

import ThreeRootOne from '../one/index.js';
import ThreeRootTwo from '../two/index.js';
import ThreeRootThree from '../three/index.js';

import ThreeRootFour from '../four/index.js';
import ThreeRootFive from '../five/index.js';

class ThreeRootCon extends React.Component {
	componentWillMount() {
		// console.log(ThreeRootFive);
	};
	render() {
		const furl = this.props.match.url;
		const threeRootContainerStyle = {
			position: 'absolute',
			left: '150px',
			right: '0',
			top: '60px',
			bottom: '0',
			padding: '20px',
		};
		const threeRootUl = {
			position: 'absolute',
			top: '0',
			left: '0',
			display: 'flex',
		};
		const threeRUlLi = {
			padding: '10px 20px',
		};
		return (
			<div className="three-root" style={threeRootContainerStyle}>
				<ul style={threeRootUl}>
					<li style={threeRUlLi}><Link to={`${furl}/one`}>one</Link></li>
					<li style={threeRUlLi}><Link to={`${furl}/two`}>two</Link></li>
					<li style={threeRUlLi}><Link to={`${furl}/three`}>three</Link></li>
					<li style={threeRUlLi}><Link to={`${furl}/four`}>four</Link></li>
					<li style={threeRUlLi}><Link to={`${furl}/five`}>five</Link></li>
				</ul>
				<Route 
					exact
					path={furl}
					render={()=>(
						<Redirect to={`${furl}/one`} />
					)}
				/>
				<Route path={`${furl}/one`} component={ThreeRootOne} />
				<Route path={`${furl}/two`} component={ThreeRootTwo} />
				<Route path={`${furl}/three`} component={ThreeRootThree} />
				<Route path={`${furl}/four`} component={ThreeRootFour} />
				<Route path={`${furl}/five`} component={ThreeRootFive} />
			</div>
		);
	}
}

export default ThreeRootCon;