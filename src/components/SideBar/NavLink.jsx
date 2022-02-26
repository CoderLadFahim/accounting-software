import { useState } from 'react';
import './NavLinkStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function NavLink({ children, icon, linkName, showDropDown }) {
	return (
		<li
			className={`nav-link bg-gray-800 py-2 text-left text-base relative hover:bg-gray-700 cursor-pointer pl-4 last:border-b last:border-slate-300 ${
				showDropDown ? 'active' : ''
			}`}
		>
			<div className="nav-link-content space-x-3">
				{icon}
				<span className="nav-link-text hover:text-cyan-200">
					{linkName}
				</span>
			</div>

			{showDropDown && children}
			{children && (
				<FontAwesomeIcon
					icon={faCaretDown}
					className={`caret-down absolute right-4 top-3 transform ${
						showDropDown ? 'rotate-180' : ''
					}`}
				/>
			)}
		</li>
	);
}

export default NavLink;
