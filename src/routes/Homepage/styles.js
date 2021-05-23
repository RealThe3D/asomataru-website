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
