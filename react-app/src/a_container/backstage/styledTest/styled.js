import styled from 'styled-components';

const UL = styled.ul `
	list-style: none;
	overflow: hidden;
`;
const LI = styled.li `
	cursor: pointer;
	margin: 10px 0;
	color: ${props => props.choseFlag === 'choseY' ? 'blue' : 'purple'};
`;
const DIV = styled.div `
	font-size: 16px;
	color: green;
`;
const SPAN = styled.span ``;
const P = styled.p ``;

const Button = styled.Button `
	
`;

export default {
	UL,
	LI,
	DIV,
	SPAN,
	P
}