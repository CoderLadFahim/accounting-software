import './NavLinkStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function NavLink({ children, icon, spanText }) {
	return (
		<li className="nav-link bg-gray-800 py-2 text-left text-base relative hover:bg-gray-700 cursor-pointer pl-4 last:border-b last:border-teal-300">
			<div className="nav-link-content space-x-3">
				{icon}
				<span className="hover:text-teal-200">{spanText}</span>
			</div>

			{children}
			{children && (
				<FontAwesomeIcon
					icon={faCaretDown}
					className="caret-down absolute right-4 top-3"
				/>
			)}
		</li>
	);
}

export default NavLink;
