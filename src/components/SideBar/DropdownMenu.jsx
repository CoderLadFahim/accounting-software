import './DropdownMenuStyles.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMobileSidebarActive } from '../../features/Navigation/navigationSlice';

import NavLink from './NavLink.jsx';
import {
	NavLink as RouterLink,
	useNavigate,
	useLocation,
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function DropdownMenu() {
	const menus = useSelector(({ navigation }) => navigation.menus);
	const navigate = useNavigate();
	const navSliceDispatcher = useDispatch();
	const { pathname: currentRoutePath } = useLocation();

	// this function runs on every link click
	const hideSidebar = () => {
		setTimeout(() => {
			navSliceDispatcher(setMobileSidebarActive());
		}, 100);
	};

	// altRoute refers to the menu that have no dropdowns
	const menuEls = menus.map(
		({ name: menuName, icon: menuIcon, submenus, route: altRoute }) => {
			const menuSubmenus = submenus && (
				<ul>
					{submenus.map(({ route, name }) => (
						<li
							key={name}
							onClick={hideSidebar}
							className={
								currentRoutePath === route ? 'active-submenu' : ''
							}
						>
							<FontAwesomeIcon icon={faArrowRight} className="mr-2" />
							<RouterLink to={route}>{name}</RouterLink>
						</li>
					))}
				</ul>
			);

			// this function handles clicks on menus that have no submenus
			const altClickHandler = () => {
				navigate(altRoute);
				hideSidebar();
			};

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
