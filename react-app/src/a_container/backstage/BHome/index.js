import React from 'react';

import {
	Spin
} from 'antd';

class BHome extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			pageLoad: false,
			loading: true,
		};
	};
	componentDidMount() {
		this.mounted = true;
		setTimeout(() => {
			if (this.mounted) {
				this.setState({
					loading: false,
					pageLoad: true
				});
			}
		}, 500);
	}
	componentWillMount() {

	};
	componentWillUnmount() {
		this.mounted = false;
	};
	render() {
		let {
			pageLoad,
			loading
		} = this.state;
		return (
			<div className="backStage-main">
				BHome
			</div>
		);
	}
};

export default BHome;