import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faBell } from '@fortawesome/free-solid-svg-icons';

function AppNav() {
	return (
		<nav>
			<div className="container">
				<div className="user-profile">
					<img src="logos_temp/Logo.png" alt="User logo" />

					<div className="user-data">
						<h2 className="user-name">Classic IT</h2>

						<h3 className="user-role">Admin</h3>
					</div>
				</div>

				<div className="other-btns">
					<button>
						<FontAwesomeIcon icon={faCalculator} />
					</button>
					<button>
						<FontAwesomeIcon icon={faBell} />
					</button>
				</div>
			</div>
		</nav>
	);
}

export default AppNav;
