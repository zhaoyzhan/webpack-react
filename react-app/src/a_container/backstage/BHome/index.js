import React from 'react';

import styled from 'styled-components';

import PublicStyle from '../backstageApi/index.js';

import BackstageApi from '../backstageApi/api.js';

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
		// setTimeout(() => {
		// 	if (this.mounted) {
		// 		this.setState({
		// 			loading: false,
		// 			pageLoad: true
		// 		});
		// 	}
		// }, 500);
	}
	componentWillMount() {
		let add = BackstageApi.addNum(100, 4);
		let cut = BackstageApi.cutNum(20, 30);
		let arr = [1, 2, 3, 55, 66, 77, 88, 9];
		let index = BackstageApi.indexof(arr, 3);
		let newArr = BackstageApi.sortArr(arr, 1);
		console.log(add, cut, index, newArr);
	};
	componentWillUnmount() {
		this.mounted = false;
	};
	render() {
		const InputStyled = styled.input `
			border: 1px solid #ccc;
			background: green;
		`;
		return (
			<PublicStyle.BackStageMainStyled className="backStage-main">
				<h1>bhome</h1>	
				<PublicStyle.PStyled className="PStyled">1234</PublicStyle.PStyled>
			</PublicStyle.BackStageMainStyled>
		);
	}
};

export default BHome;