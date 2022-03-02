import './DropdownMenuStyles.css';
import { useSelector } from 'react-redux';

import NavLink from './NavLink.jsx';
import { NavLink as RouterLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DropdownMenu() {
	const menus = useSelector(({ navigation }) => navigation.menus);

	const menuEls = menus.map(({ name: menuName, icon: menuIcon, submenus }) => {
		const menuSubmenus = submenus && (
			<ul>
				{submenus.map(({ route, name }) => (
					<li key={name}>
						<RouterLink to={route}>{name}</RouterLink>
					</li>
				))}
			</ul>
		);

		return (
			<NavLink
				icon={<FontAwesomeIcon icon={menuIcon} className="nav-icon" />}
				key={menuName}
				navLinkName={menuName}
			>
				{menuSubmenus && menuSubmenus}
			</NavLink>
		);
	});

	return <ul className="nav-links">{menuEls}</ul>;
}

export default DropdownMenu;
