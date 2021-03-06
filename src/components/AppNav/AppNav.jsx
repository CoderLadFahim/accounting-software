import './AppNavStyles.css';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faBell } from '@fortawesome/free-solid-svg-icons';

function AppNav() {
	const [notificationExists, setNotificationExists] = useState(true);

	return (
		<nav className="fixed w-screen top-0 h-16 shadow bg-white text-gray-700 grid place-items-center">
			<div className="container flex justify-between items-center">
				<div className="user-profile flex items-center text-left space-x-3">
					<img
						src="logos_temp/Logo.png"
						alt="User logo"
						className="w-8 h-8 rounded-full shadow"
					/>

					<div className="user-data flex flex-col items-start">
						<span className="user-name sm:text-base">Classic IT</span>
						<br />

						<span className="user-role text-red-600 text-xs">Admin</span>
					</div>
				</div>

				<div className="nav-btns space-x-6 flex">
					<button className="btn">
						<FontAwesomeIcon icon={faCalculator} className="btn-icon" />
					</button>
					<button
						className="btn text-white bg-gray-700 relative"
						onClick={() => setNotificationExists(false)}
					>
						<FontAwesomeIcon icon={faBell} className="btn-icon" />
						{notificationExists && (
							<div className="active h-2 w-2 rounded-full bg-red-400 absolute top-1 right-0"></div>
						)}
					</button>
				</div>
			</div>
		</nav>
	);
}

export default AppNav;
