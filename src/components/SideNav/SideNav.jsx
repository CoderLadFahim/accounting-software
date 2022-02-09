import './SideNavStyles.css';

import DropdownMenu from './DropdownMenu.jsx';

function SideNav() {
	return (
		<div
			id="side-nav"
			className="fixed w-9/12 h-screen left-0 bg-gray-700 text-gray-50"
		>
			<div className="user-info flex flex-col items-center my-5 space-y-3">
				<img
					src="logos_temp/Logo.png"
					alt="User logo"
					className="w-24 h-24 rounded-full shadow"
				/>

				<div className="user-data flex flex-col items-center">
					<span className="user-name sm:text-base">Classic IT</span>
					<br />

					<span className="user-role text-red-400 text-xs">Admin</span>
				</div>

				<div className="separator w-9/12 h-1 bg-gray-500 rounded-full mx-auto shadow"></div>
			</div>

			<DropdownMenu />
		</div>
	);
}

export default SideNav;
