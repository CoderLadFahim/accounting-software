import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function DesktopSideBar() {
	const activeMenu = useSelector(
		({ navigation }) => navigation.activeMainMenu
	);

	const activeMenuSubmenus = useSelector(
		({ navigation }) => navigation.menus
	).find((menu) => menu.name === activeMenu)['submenus'];

	useEffect(() => {
		console.log(activeMenuSubmenus);
	}, []);

	return <div></div>;
}

export default DesktopSideBar;
