import styled from 'styled-components';

// TO DO:
const Navbar = styled.nav`
	font-family: 'Montserrat', sans-serif;
	font-weight: 500;

	background: #1d1e24;
	margin: 5px;
	border-radius: 10px;
	z-index: 2;
	display: flex;
	flex-wrap: wrap;

	a {
		padding: 8px;
		float: left;

		text-decoration: none;
		color: whitesmoke;
		transition: background-color 300ms ease;
	}
	a:hover {
		background-color: #12161c;
	}
	a:visited {
		color: whitesmoke;
	}
`;

export default Navbar;
