import styled from 'styled-components';
import { colors, gap, fontSize, media } from '../../../common/Styles/theme';
import { NavLink } from 'react-router-dom';
import routeList from '../../AppRouter/routeList';

export const Nav = styled.nav`
	display: ${({ isDisplayed }) => (isDisplayed ? 'block' : 'none')};
	right: 0;
	top: 100%;
	position: absolute;
	box-sizing: border-box;
	width: 100%;
	padding: ${gap.original};
	text-align: end;
	font-weight: bold;
	background-color: ${({ pathname }) =>
		pathname === routeList.home ? 'white' : colors.main};

	${media.Desktop} {
		display: flex;
		justify-content: center;
		position: initial;
		padding: 0;
	}
`;

export const Menu = styled.ul`
	padding: 0;
	margin: 0;
	font-size: ${fontSize.large};
	list-style-type: none;

	${media.Desktop} {
		column-gap: ${gap.section};
		font-size: ${fontSize.x_small};
		display: flex;
		justify-content: space-evenly;
	}
`;

export const MenuItem = styled.li`
	margin-bottom: 16px;

	${media.Desktop} {
		margin: 0;
	}
`;

export const MenuLink = styled(NavLink)`
	color: ${colors.contrast};

	&.active {
		color: white;
	}
`;
