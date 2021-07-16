import styled, { css } from 'styled-components';

export const HomepageTitle = styled.h1`
	color: white;
	font-family: 'Poppins', sans-serif;
	font-weight: bold;
	font-size: 10vw;

	${(props) =>
		props.small &&
		css`
			font-size: 6vw;
			text-align: center;
		`}
`;

export const HomepageInfo = styled.div`
	background: ${(props) => props.color};
	margin: 1vh;
	padding: 20px;
	border-radius: 10px;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: 500;
	width: 75%;
	text-align: center;
`;
