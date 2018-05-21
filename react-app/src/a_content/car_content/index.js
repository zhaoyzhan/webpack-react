import React from 'react';
import './index.scss';

class CarContent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: 'carcontent',
			tag: 1,
			nameNum: 0,
			refresh: false,
			changeValue: '',
		};
	}
	componentWillMount() {};
	shouldComponentUpdate(nextProps, nextState) {
		return nextState.refresh;
	};
	componentWillReceiveProps(nextProps, nextState) {
		if (nextProps.name !== this.props.name) {
			this.setState({
				refresh: true
			});
		} else {
			this.setState({
				refresh: false
			});
		}
	};
	changeTag(tag) {
		if (this.state.tag !== tag) {
			this.setState({
				tag,
				refresh: true
			});
		}

	};
	_onChange(e) {
		this.setState({
			changeValue: e.target.value,
			refresh: false
		});
	};
	changeTitle() {
		if (this.state.name !== this.state.changeValue && this.state.changeValue !== '') {
			this.setState({
				name: this.state.changeValue,
				refresh: true
			});
		}
	};
	render() {
		console.log('render执行');
		let {
			tag
		} = this.state;
		return (
			<div>
				<div>{this.props.name}</div>
				<div>{this.state.name}</div>
				<ul style={{listStyleType: 'none'}}>
					<li style={{cursor: 'pointer'}} className={`${tag === 1 ? 'active' : ''}`} onClick={this.changeTag.bind(this, 1)}>1</li>
					<li style={{cursor: 'pointer'}} className={`${tag === 2 ? 'active' : ''}`} onClick={this.changeTag.bind(this, 2)}>2</li>
					<li style={{cursor: 'pointer'}} className={`${tag === 3 ? 'active' : ''}`} onClick={this.changeTag.bind(this, 3)}>3</li>
					<li style={{cursor: 'pointer'}} className={`${tag === 4 ? 'active' : ''}`} onClick={this.changeTag.bind(this, 4)}>4</li>
				</ul>
				<input type="text" onChange={this._onChange.bind(this)}/>
				<button onClick={this.changeTitle.bind(this)}>改变</button>
			</div>
		);
	}
}

export default CarContent;