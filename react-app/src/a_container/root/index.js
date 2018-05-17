import React from 'react';

import {
	Link
} from 'react-router-dom';

class RouterContainer extends React.Component {
	render() {
		return (
			<div>
				<ul>
					<li><Link to="/home" replace>home</Link></li>
					<li><Link to="/car" replace>car</Link></li>
					<li><Link to="/list" replace>list</Link></li>
				</ul>
			</div>
		);
	}
}

export default RouterContainer;