import './NavLinkStyles.css';

function NavLink({ children, icon, spanText }) {
	return (
		<li className="nav-link">
			<div className="nav-link-content space-x-3">
				{icon}
				<span>{spanText}</span>
			</div>

			{children}
		</li>
	);
}

export default NavLink;
