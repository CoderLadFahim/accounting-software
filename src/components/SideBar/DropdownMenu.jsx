import './DropdownMenuStyles.css';
import { useSelector } from 'react-redux';

import NavLink from './NavLink.jsx';
import { NavLink as RouterLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DropdownMenu() {
	const menus = useSelector(({ navigation }) => navigation.menus);
	const navigate = useNavigate();

	// altRoute refers to the menu that have no dropdowns
	const menuEls = menus.map(
		({ name: menuName, icon: menuIcon, submenus, route: altRoute }) => {
			const menuSubmenus = submenus && (
				<ul>
					{submenus.map(({ route, name }) => (
						<li key={name}>
							<RouterLink to={route}>{name}</RouterLink>
						</li>
					))}
				</ul>
			);

			// this function handles clicks on menus that have no submenus
			const altClickHandler = () => navigate(altRoute);

			return (
				<NavLink
					icon={<FontAwesomeIcon icon={menuIcon} className="nav-icon" />}
					key={menuName}
					navLinkName={menuName}
					clickHandler={!submenus ? altClickHandler : () => {}}
				>
					{menuSubmenus && menuSubmenus}
				</NavLink>
			);
		}
	);

	return <ul className="nav-links">{menuEls}</ul>;
}

export default DropdownMenu;
