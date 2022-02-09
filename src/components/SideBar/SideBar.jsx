import './SideBarStyles.css';

import DropdownMenu from './DropdownMenu.jsx';

function SideBar() {
	return (
		<div
			id="side-nav"
			className="absolute left-0 w-9/12 h-screen bg-gray-700 text-gray-50 z-10"
		>
			<div className="user-info py-2 flex items-center pl-4 justify-center gap-3 bg-gray-900">
				<img
					src="logos_temp/Logo.png"
					alt="User logo"
					className="w-6 h-6 rounded-full shadow"
				/>

				<div className="user-data text-left flex flex-col">
					<span className="user-name sm:text-base">Classic IT</span>

					<span className="user-role text-red-400 text-xs">Admin</span>
				</div>

				{/* <div className="separator w-9/12 h-1 bg-gray-500 rounded-full mx-auto shadow"></div> */}
			</div>

			<DropdownMenu />
		</div>
	);
}

export default SideBar;
