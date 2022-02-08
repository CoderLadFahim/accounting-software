import './SideNavStyles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faBell } from '@fortawesome/free-solid-svg-icons';

function SideNav() {
	return (
		<div>
			<div className="user-info">
				<img src="logos_temp/Logo.png" alt="User logo" />

				<div className="user-data flex flex-col items-start">
					<span className="user-name sm:text-base">Classic IT</span>
					<br />

					<span className="user-role text-red-600 text-xs">Admin</span>
				</div>
			</div>
			<div className="separator"></div>

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
