import styled from 'styled-components';

// TO DO:
const Navbar = styled.nav`
	font-family: 'Montserrat', sans-serif;
	font-weight: 500;
	list-style: none;
	background-color: #161b22;
	margin: 5px;
	border-radius: 10px;
	z-index: 2;
	display: flex;

	a {
		padding: 8px;
		float: left;
		display: block;
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
