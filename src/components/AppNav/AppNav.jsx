import './AppNavStyles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faBell } from '@fortawesome/free-solid-svg-icons';

function AppNav() {
	return (
		<nav class="fixed w-screen top-0 h-16 shadow bg-white text-gray-700 grid place-items-center">
			<div className="container flex justify-between items-center">
				<div className="user-profile flex items-center text-left space-x-3">
					<img src="logos_temp/Logo.png" alt="User logo" />

					<div className="user-data flex flex-col items-start">
						<span className="user-name">Classic IT</span>
						<br />

						<span className="user-role text-red-600 text-sm">Admin</span>
					</div>
				</div>

				<div className="other-btns space-x-5">
					<button class="btn">
						<FontAwesomeIcon icon={faCalculator} />
					</button>
					<button class="btn text-white bg-gray-700 relative">
						<FontAwesomeIcon icon={faBell} />
						<div className="active h-2 w-2 rounded-full bg-red-400 absolute top-1 right-0"></div>
					</button>
				</div>
			</div>
		</nav>
	);
}

export default AppNav;
