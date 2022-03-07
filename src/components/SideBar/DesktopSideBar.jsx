import { useSelector } from 'react-redux';
import { NavLink as RouterLink } from 'react-router-dom';
import { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

function DesktopSideBar() {
	const activeMenu = useSelector(
		({ navigation }) => navigation.activeMainMenu
	);

	const activeMenuSubmenus = useSelector(
		({ navigation }) => navigation.menus
	).find((menu) => menu.name === activeMenu)['submenus'];

	return (
		<div className="float-left text-left bg-white shadow h-screen w-64 hidden xl:block">
			<ul className="mt-1">
				{activeMenuSubmenus &&
					activeMenuSubmenus.map((submenu) => (
						<li
							key={submenu.name}
							className="py-2 px-3 text-gray-700 hover:text-blue-700"
						>
							<FontAwesomeIcon
								icon={faArrowRightLong}
								className="mr-2"
							/>
							<RouterLink to={submenu.route}>{submenu.name}</RouterLink>
						</li>
					))}
			</ul>
		</div>
	);
}

export default DesktopSideBar;
