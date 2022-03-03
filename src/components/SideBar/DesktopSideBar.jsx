import { useSelector } from 'react-redux';
import { NavLink as RouterLink } from 'react-router-dom';
import { useEffect } from 'react';

function DesktopSideBar() {
	const activeMenu = useSelector(
		({ navigation }) => navigation.activeMainMenu
	);

	const activeMenuSubmenus = useSelector(
		({ navigation }) => navigation.menus
	).find((menu) => menu.name === activeMenu)['submenus'];

	return (
		<div>
			<ul>
				{activeMenuSubmenus &&
					activeMenuSubmenus.map((submenu) => (
						<li key={submenu.name}>
							<RouterLink to={submenu.route}>{submenu.name}</RouterLink>
						</li>
					))}
			</ul>
		</div>
	);
}

export default DesktopSideBar;
