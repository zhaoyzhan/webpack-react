import React from 'react';

import {
	Spin
} from 'antd';


class ListSon extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			refresh: false,
		};
	};
	componentWillMount() {};
	shouldComponentUpdate(nextProps, nextState) {
		return nextState.refresh;
	};
	componentWillReceiveProps(nextProps, nextState) {
		if (nextProps.number !== this.props.number) {
			this.setState({
				refresh: true,
			});
		} else {
			this.setState({
				refresh: false,
			});
		}
	};
	render() {
		const {
			index,
			number,
			handleClick
		} = this.props;
		//在每次渲染子组件时，打印该子组件的数字内容;
		// console.log(number);
		return <h1 onClick ={() => handleClick(index)}>{number}</h1>
	}
}

class List extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			num: 1,
			refresh: false,
			numberArray: [0, 1, 2],
			pageLoad: false,
			loading: true
		};
	};
	componentWillMount() {
		this.mounted = true;
		setTimeout(() => {
			if (this.mounted) {
				this.setState({
					pageLoad: true,
					loading: false,
					refresh: true
				});
			}
		}, 500);
	};
	componentWillUnmount() {
		this.mounted = false;
	};
	shouldComponentUpdate(nextProps, nextState) {
		return nextState.refresh;
	}
	handleClick = (index) => {
		// let preNumberArray = this.state.numberArray;
		let {
			numberArray
		} = this.state;
		numberArray[index] += 1;
		this.setState({
			numberArray: numberArray,
			refresh: true,
		});
	};
	render() {
		let {
			pageLoad,
			loading
		} = this.state;
		return (
			<div className="main-container">
				<Spin 
					size="large" 
					spinning={loading}
					style={{textAlign: 'center', width: '100%'}}
				>
					{
						pageLoad ? 
							<div 
								style = {{margin:30, cursor: 'pointer'}}
							>
								{
					              	this.state.numberArray.map(
					                	(number,key) => {
					                 		return <ListSon
					                           key = {key}
					                           index = {key}
					                           number = {number}
					                           handleClick = {this.handleClick}/>
					                	}
					                )
					            }
					        </div> : null
				    }
		        </Spin>
		    </div>
		);
	}
}

export default List;