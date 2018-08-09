import React from 'react';

class ThreeRootOne extends React.Component {
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
			<div style={threeMainContent}>one</div>
		);
	}
}

export default ThreeRootOne;