import styled from 'styled-components';

const BackStageMainStyled = styled.div `
	position: absolute;
	left: 150px;
	right: 0;
	top: 60px;
	bottom: 0;
	padding: 20px;
	overflow-y: auto;
`;

const PStyled = styled.div `
	font-size: 40px;
	color: green;
`;

export default {
	BackStageMainStyled,
	PStyled
}