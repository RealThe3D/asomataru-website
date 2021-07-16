import styled from 'styled-components';

export const CommandContainer = styled.div`
	width: 70%;
	background: #1d1e24;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px 25px;
	border-radius: 6px;
	flex-wrap: wrap;
	margin: 5px 0px;
`;

export const CommandTitle = styled.h3`
	font-family: 'Montserrat', sans-serif;
`;

export const CommandDescription = styled.p`
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	color: gray;
	font-size: 1rem;
	font-weight: 700;
`;
