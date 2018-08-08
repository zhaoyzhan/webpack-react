import React from 'react';

import styled from 'styled-components';

import PublicStyle from '../backstageApi/index.js';

class BList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			flag: 1
		};
	};
	styleClick = (num) => {
		console.log(num);
		this.setState({
			flag: num
		})
	};
	//拨号
	// location.href = "tel:10086";
	render() {
		const H1Styled = styled.h1 `
		  font-size: 1.5em;
		  cursor: pointer;
		  color: ${props => props.primary ? 'blue' : 'purple'};
		  &.primary{
		    color: blue;
		  }
		`;
		const {
			flag
		} = this.state;
		return (
			<PublicStyle.BackStageMainStyled className="backStage-main">
				<h1>blist</h1>
				<br />	
				<H1Styled onClick={()=>this.styleClick(1)} className={flag === 1 ? 'primary' : ''}>1</H1Styled>
				<H1Styled onClick={()=>this.styleClick(2)} className={flag === 2 ? 'primary' : ''}>2</H1Styled>
				<H1Styled onClick={()=>this.styleClick(3)} className={flag === 3 ? 'primary' : ''}>3</H1Styled>
				<H1Styled onClick={()=>this.styleClick(4)} className={flag === 4 ? 'primary' : ''}>4</H1Styled>
				<H1Styled onClick={()=>this.styleClick(5)} className={flag === 5 ? 'primary' : ''}>5</H1Styled>
				<H1Styled onClick={()=>this.styleClick(6)} className={flag === 6 ? 'primary' : ''}>6</H1Styled>
			</PublicStyle.BackStageMainStyled>
		);
	}
};

export default BList;