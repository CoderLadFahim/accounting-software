import './NavLinkStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function NavLink({ children, icon, spanText }) {
	return (
		<li className="nav-link">
			<div className="nav-link-content space-x-3">
				{icon}
				<span>{spanText}</span>
			</div>

			{children}
			{children && (
				<FontAwesomeIcon icon={faCaretDown} className="caret-down" />
			)}
		</li>
	);
}

export default NavLink;
