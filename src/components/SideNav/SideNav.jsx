import './SideNavStyles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faBell } from '@fortawesome/free-solid-svg-icons';

function SideNav() {
	return (
		<div
			id="side-nav"
			className="border fixed w-9/12 h-screen left-0 bg-gray-700 text-gray-50 hidden"
		>
			<div className="user-info flex flex-col items-center space-y-5 mt-10">
				<img
					src="logos_temp/Logo.png"
					alt="User logo"
					className="w-28 h-28 rounded-full shadow"
				/>

				<div className="user-data flex flex-col items-center">
					<span className="user-name sm:text-base">Classic IT</span>
					<br />

					<span className="user-role text-red-400 text-xs">Admin</span>
				</div>

				<div className="separator w-10/12 h-1 bg-gray-500 rounded-full mx-auto"></div>
			</div>

			<ul className="nav-links">
				<li className="nav-link"></li>
				<li className="nav-link"></li>
				<li className="nav-link"></li>
				<li className="nav-link"></li>
				<li className="nav-link"></li>
				<li className="nav-link"></li>
				<li className="nav-link"></li>
				<li className="nav-link"></li>
				<li className="nav-link"></li>
				<li className="nav-link"></li>
			</ul>
		</div>
	);
}

export default SideNav;
