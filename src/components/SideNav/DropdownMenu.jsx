import './DropdownMenuStyles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faHome, faAddressBook } from '@fortawesome/free-solid-svg-icons';

function DropdownMenu() {
	return (
		<ul className="nav-links">
			<li className="nav-link">
				<FontAwesomeIcon icon={ faHome } />
			Home</li>

			<li className="nav-link">
				<FontAwesomeIcon icon={faAddressBook} />
				Contact
				<FontAwesomeIcon icon={faCaretDown} />
				<ul>
					<li>Customers</li>
					<li>Suppliers</li>
				</ul>
			</li>

			<li className="nav-link">
				Products
				<ul>
					<li>Product List</li>
					<li>Categories</li>
					<li>Variations</li>
					<li>Units</li>
					<li>Brands</li>
					<li>Warranties</li>
				</ul>

				<FontAwesomeIcon icon={faCaretDown} />
			</li>

			<li className="nav-link">
				Sales
				<FontAwesomeIcon icon={faCaretDown} />
			</li>

			<li className="nav-link">
				Purchases
				<FontAwesomeIcon icon={faCaretDown} />
			</li>

			<li className="nav-link">
				Payment
				<FontAwesomeIcon icon={faCaretDown} />
			</li>

			<li className="nav-link">
				Expense
				<FontAwesomeIcon icon={faCaretDown} />
			</li>

			<li className="nav-link">
				Banks
				<FontAwesomeIcon icon={faCaretDown} />
			</li>

			<li className="nav-link">
				Language
				<FontAwesomeIcon icon={faCaretDown} />
			</li>

			<li className="nav-link">
				Users
				<FontAwesomeIcon icon={faCaretDown} />
			</li>

			<li className="nav-link">
				Reports
				<FontAwesomeIcon icon={faCaretDown} />
			</li>
		</ul>
	);
}

export default DropdownMenu;
