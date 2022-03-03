import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function DesktopSideBar() {
	const menus = useSelector(({ navigation }) => navigation.menus);

	return <div></div>;
}

export default DesktopSideBar;
