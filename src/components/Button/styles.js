import styled, { css } from 'styled-components';

const Button = styled.button`
	text-align: center;
	margin: 1vh;
	border-radius: 10px;
	color: white;
	font-family: 'Montserrat', sans-serif;
	font-size: 1rem;
	font-weight: 500;
	border: 3px solid var(--old-blurple);
	padding: 10px;
	width: 8em;
	transition: background-color 300ms ease;

	${(props) =>
		props.blurple &&
		css`
			background-color: var(--old-blurple);
		`}
	&:hover {
		background-color: #121212;
	}
`;

export default Button;
