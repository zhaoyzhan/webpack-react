import React from 'react';
import {
	Spin
} from 'antd';
import './index.scss';

class NewsSon extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			refresh: false
		};
	};
	componentWillMount() {};
	componentDidMount() {
		// let con = document.getElementsByClassName('news-container')[0];
		// let img = con.getElementsByClassName('news-con-img')[0];
		// console.log(img);
	};
	shouldComponentUpdate(nextProps, nextState) {
		return nextState.refresh;
	};
	componentWillReceiveProps(nextProps, nextState) {
		// console.log(nextProps.numberObject);
		// console.log(this.props.numberObject);
		if (nextProps.numberObject !== this.props.numberObject) {
			this.setState({
				refresh: true
			});
		} else {
			this.setState({
				refresh: false
			});
		}
	};
	render() {
		const {
			index,
			numberObject,
			handleClick
		} = this.props;
		return <h1 style={{cursor: 'pointer'}} onClick ={() => handleClick(index)}>{numberObject.number}</h1>
	}
}

class NewsFa extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			pageLoad: false,
			refresh: false,
			num: 1,
			numberArray: [{
				number: 0 /*对象中其他的属性*/
			}, {
				number: 1 /*对象中其他的属性*/
			}, {
				number: 2 /*对象中其他的属性*/
			}]
		};
	};
	componentWillMount() {
		this.mounted = true;
		setTimeout(() => {
			if (this.mounted) {
				this.setState({
					loading: false,
					pageLoad: true,
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
	};
	handleClick = (index) => {
		let preNumberArray = [...this.state.numberArray];
		//把做修改的number Object先拷贝到一个新的对象中，替换原来的对象
		preNumberArray[index] = Object.assign({}, preNumberArray[index]);
		//使新的number Object对象的number属性加一，旧的number Object对象属性不变
		preNumberArray[index].number += 1;
		this.setState({
			numberArray: preNumberArray,
			refresh: true
		});
	};
	addtwo = () => {
		console.log(this.state.refresh);

		//加2
		// this.setState({
		// 	num: this.state.num + 1,
		// 	refresh: true
		// }, () => {
		// 	this.setState({
		// 		num: this.state.num + 1,
		// 		refresh: true
		// 	});
		// });

		//加2
		// this.setState((preState, props) => ({
		// 	num: preState.num + 1,
		// 	refresh: true
		// }));
		// this.setState((preState, props) => ({
		// 	num: preState.num + 1,
		// 	refresh: true
		// }));
		// this.setState((preState, props) => ({
		// 	num: preState.num + 1,
		// 	refresh: true
		// }));

		//加2
		setTimeout(() => {
			this.setState({
				num: this.state.num + 1
			});
			this.setState({
				num: this.state.num + 1
			});
		}, 0)
	};
	render() {
		let {
			num,
			loading,
			pageLoad
		} = this.state;
		return (
			<div className="main-container">
				<Spin 
					size="large" 
					spinning={loading}
					style={{textAlign: 'center', width: '100%', paddingTop: 100}}
				>
					{
						pageLoad ? 
							<div className="news-container">
								<img className="news-con-img" src={require('../../img/img3.jpg')} alt=""/>
								{
									this.state.numberArray.map(
						                (numberObject,key) => {
							                 return <NewsSon
							                           key = {key}
							                           index = {key}
							                           numberObject ={numberObject}
							                           handleClick ={this.handleClick}/>
							                }
						                )
					            }
					            <div className="numcon">
									<p>{num}</p>
									<button onClick={this.addtwo}>点击</button>
					            </div>
							</div> : null
					}
				</Spin>
			</div>
		);
	}
}

export default NewsFa;