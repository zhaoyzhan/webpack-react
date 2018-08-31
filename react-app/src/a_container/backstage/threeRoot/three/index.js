import React from 'react';

class ThreeRootThree extends React.Component {
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
			<div style={threeMainContent}>
				<img src={'http://zhansingsong.github.io/lazyimg/22.4582fc71.jpg'} alt=""/>
			</div>
		);
	}
}

export default ThreeRootThree;