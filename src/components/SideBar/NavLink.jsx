// import { useEffect } from 'react';

// redux
import { useSelector, useDispatch } from 'react-redux';
import {
	selectActiveMobileDropdown,
	setActiveMobileDropdown,
} from '../../features/Navigation/navigationSlice';

import './NavLinkStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function NavLink({ children, icon, navLinkName, clickHandler }) {
	const activeMobileDropdown = useSelector(
		(state) => state.navigation.activeMobileDropdown
	);
	const navSliceDispatcher = useDispatch();
	const currentLinkActive = activeMobileDropdown === navLinkName;

	const handleLinkClick = () => {
		navSliceDispatcher(setActiveMobileDropdown(navLinkName));
	};

	return (
		<li
			className={`nav-link bg-gray-800 py-2 text-left text-base relative hover:bg-gray-700 cursor-pointer pl-4 last:border-b last:border-slate-300 ${
				currentLinkActive ? 'active' : ''
			}`}
			onClick={clickHandler}
		>
			<div className="nav-link-content space-x-3" onClick={handleLinkClick}>
				{icon}
				<span className="nav-link-text hover:text-cyan-200">
					{navLinkName}
				</span>
			</div>

			{currentLinkActive && children}
			{children && (
				<FontAwesomeIcon
					onClick={handleLinkClick}
					icon={faCaretDown}
					className={`caret-down absolute right-4 top-3 transform ${
						currentLinkActive ? 'rotate-180' : ''
					}`}
				/>
			)}
		</li>
	);
}

export default NavLink;
