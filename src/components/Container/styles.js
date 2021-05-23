import styled, { css } from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	${(props) =>
		props.text &&
		css`
			width: 70%;
		`}
`;

export default StyledContainer;
