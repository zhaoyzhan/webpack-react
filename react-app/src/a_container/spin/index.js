import React from 'react';

import {
	Spin
} from 'antd';

class SpinContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true
		};
	};
	componentWillMount() {
		setTimeout(() => {
			this.setState({
				loading: false,
			});
		}, 500);
	};
	render() {
		let {
			loading
		} = this.state;
		return (
			<Spin 
				size="large" 
				spinning={loading}
				style={{textAlign: 'center', width: '100%', paddingTop: 100}}
			>
			</Spin>
		);
	}
}

export default SpinContainer;