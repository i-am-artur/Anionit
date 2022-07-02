import { Menu, Nav, MenuItem, MenuLink } from './navigation.styled';

import { content } from './content';
import * as PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

export default function Navigation({ isDisplayed }) {
	const location = useLocation();

	return (
		<Nav isDisplayed={isDisplayed} pathname={location.pathname}>
			<Menu>
				{content.map((nav) => (
					<MenuItem key={nav.name}>
						<MenuLink to={nav.path}>{nav.name}</MenuLink>
					</MenuItem>
				))}
			</Menu>
		</Nav>
	);
}

Navigation.propTypes = {
	isDisplayed: PropTypes.bool.isRequired,
};
