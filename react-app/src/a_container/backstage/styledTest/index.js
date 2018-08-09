import React from 'react';

import styled, {
	keyframes
} from 'styled-components';

import PublicStyle from '../backstageApi/index.js';

import StyledTestCon from './styled.js';

class StyledTest extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			refresh: false,
			dataList: [{
				name: 'name1'
			}, {
				name: 'name2'
			}, {
				name: 'name3'
			}, {
				name: 'name4'
			}, {
				name: 'name5'
			}, {
				name: 'name6'
			}, {
				name: 'name7'
			}, {
				name: 'name8'
			}, {
				name: 'name9'
			}, {
				name: 'name10'
			}, {
				name: 'name11'
			}, {
				name: 'name12'
			}, {
				name: 'name13'
			}, {
				name: 'name14'
			}],
			flag: 0,
			propsVal: 'choseY',
			ZZFlag: false,
		};
	};
	componentWillMount() {
		// console.log('styled');
	};
	shouldComponentUpdate(nextProps, nextState) {
		return nextState.refresh;
	};
	IetmClick = (num) => {
		this.setState({
			flag: num,
			refresh: true
		})
	};
	//显示遮罩层
	showZZC = () => {
		this.setState({
			ZZFlag: true,
			refresh: true
		});
	};
	//关闭遮罩层
	closeZZ = () => {
		this.setState({
			ZZFlag: false,
			refresh: true
		});
	};
	render() {
		const {
			dataList,
			propsVal,
			flag,
			ZZFlag
		} = this.state;

		const Button = ({
			className,
			children
		}) => (
			<button className={className}>
				{children}
			</button>
		);
		const StyledButton = styled(Button)
		`
			color: pink;
			font-size: 20px;
			margin: 20px 0 0 0;
			border: none;
		`;
		//扩展样式
		const Span = styled.span `
			color: red;
			display: block;
			line-height: 40px;
		`;
		const YellowSpan = Span.extend `
			color: yellow;
		`;
		//动画
		const rotate360 = keyframes `
		  from {
		    transform: rotate(0deg);
		  }

		  to {
		    transform: rotate(360deg);
		  }
		`;
		const Rotate = styled.div `
		  display: inline-block;
		  animation: ${rotate360} 2s linear infinite;
		  padding: 2rem 1rem;
		  font-size: 1.2rem;
		`;
		// 		//媒体查询
		// const sizes = {
		// 	desktop: 992,
		// 	tablet: 768,
		// 	phone: 376
		// };
		// const media = Object.keys(sizes).reduce((acc, label) => {
		// 	acc[label] = (...args) => css `
		// 		@media (max-width: ${sizes[label] / 16}em) {
		// 		${css(...args)}
		// 	}`

		// 	return acc
		// }, {});

		// const Content = styled.div `
		//   height: 3em;
		//   width: 3em;
		//   background: papayawhip;
		//   ${media.desktop`background: dodgerblue;`}
		//   ${media.tablet`background: mediumseagreen;`}
		//   ${media.phone`background: palevioletred;`}
		// `;
		const ZZstyle = {
			position: 'fixed',
			left: 0,
			top: 0,
			bottom: 0,
			right: 0,
			background: 'rgba(0, 0, 0, .4)',
		};
		const ZZSpan = {
			position: 'absolute',
			right: '20px',
			top: '50px',
			width: '40px',
			height: '40px',
			border: '1px solid #fff',
			borderRadius: '50%',
			cursor: 'pointer',
			transform: 'rotateZ(-45deg)',
		};
		const oneI = {
			position: 'absolute',
			height: '60%',
			borderLeft: '1px solid #fff',
			left: '50%',
			top: '50%',
			transform: 'translate(-50%, -50%)',
		};
		const twoI = {
			position: 'absolute',
			width: '60%',
			borderBottom: '1px solid #fff',
			left: '50%',
			top: '50%',
			transform: 'translate(-50%, -50%)',
		};
		return (
			<PublicStyle.BackStageMainStyled>
				{
					ZZFlag ? 
						<div style={ZZstyle}>
							<span style={ZZSpan} onClick={this.closeZZ}>
								<i style={oneI}></i>
								<i style={twoI}></i>
							</span>
						</div> 
						: null
				}
				<Rotate>&lt;88888 &gt;</Rotate>
				<br/>
				<StyledTestCon.Button onClick={this.showZZC}>显示遮罩层</StyledTestCon.Button>
				<StyledTestCon.UL>
					{
						dataList && dataList.length > 0 ? 
							dataList.map((item, i)=> (
								<StyledTestCon.LI choseFlag={flag === i ? propsVal : ''} onClick={()=>this.IetmClick(i)} key={i}>{item.name}</StyledTestCon.LI>
							)) : ''
					}
				</StyledTestCon.UL>
				<StyledTestCon.DIV>qwer</StyledTestCon.DIV>
				<StyledButton>dsafsg</StyledButton>
				<Span>span</Span>
				<YellowSpan>span</YellowSpan>
			</PublicStyle.BackStageMainStyled>
		);
	}
}

export default StyledTest;