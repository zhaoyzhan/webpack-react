import React from 'react';
import CarContent from '../../a_content/car_content/index.js';

import {
	Spin,
	Switch,
	Alert
} from 'antd';

class CarCon extends React.Component {
	state = {
		loading: false
	}
	toggle = (value) => {
		this.setState({
			loading: value
		});
	}
	render() {
		let {
			loading
		} = this.state;
		return (
			<div>
		        <Spin spinning={loading}>
		          <Alert
		            message="Alert message title"
		            description="Further details about the context of this alert."
		            type="info"
		          />
		        </Spin>
		        <div style={{ marginTop: 16 }}>
		          Loading state：<Switch checked={loading} onChange={this.toggle} />
		        </div>
		    </div>
		);
	}
}

class Car extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			carContent: 0,
			addTwo: 0,
			loading: true,
			pageLoad: false
		};
	}
	componentWillMount() {
		setTimeout(() => {
			this.setState({
				loading: false,
				pageLoad: true
			});
		}, 500);
	};
	add() {
		this.setState({
			carContent: this.state.carContent + 1
		})
	};
	addTwo() {
		this.setState({
			addTwo: this.state.addTwo + 2
		});
		// console.log('3');
	};
	render() {
		let {
			pageLoad,
			loading
		} = this.state;
		return (
			<Spin 
				size="large" 
				spinning={loading}
				style={{textAlign: 'center', width: '100%', paddingTop: 100}}
			>
				{	
					pageLoad ? 
						<div style={{background: pageLoad ? '#fff' : ''}}>
							<h1>{this.state.addTwo}</h1>
							<button onClick={this.add.bind(this)}>添加 1</button>
							<button onClick={this.addTwo.bind(this)}>添加 2</button>
							<CarContent name={this.state.carContent}></CarContent>
							<div>
								<CarCon />
							</div>
						</div> : null
				}
			</Spin>
		);
	}
}

export default Car;