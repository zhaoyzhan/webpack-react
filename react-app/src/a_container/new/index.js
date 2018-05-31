import React from 'react';
import './index.scss';

class NewsSon extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			refresh: false
		};
	};
	componentWillMount() {

	};
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
	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}
	handleClick = (index) => {
		// let numberArray = this.state.numberArray;
		// numberArray[index].number += 1;
		// this.setState({
		// 	numberArray
		// }, () => {
		// 	console.log(this.state.numberArray);
		// });
		let preNumberArray = this.state.numberArray;
		//把做修改的number Object先拷贝到一个新的对象中，替换原来的对象
		preNumberArray[index] = Object.assign({}, preNumberArray[index]);
		//使新的number Object对象的number属性加一，旧的number Object对象属性不变
		preNumberArray[index].number += 1;
		this.setState({
			numberArray: preNumberArray
		});
	};
	render() {
		let {
			num
		} = this.state;
		return (
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
			</div>
		);
	}
}

export default NewsFa;