import './DropdownMenuStyles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCaretDown,
	faHome,
	faAddressBook,
	faBoxes,
	faShoppingCart,
	faMoneyCheck,
	faMoneyBillWave,
	faWallet,
	faPiggyBank,
	faUser,
	faLanguage,
	faFileAlt,
} from '@fortawesome/free-solid-svg-icons';

function DropdownMenu() {
	return (
		<ul className="nav-links">
			<li className="nav-link active">
				<FontAwesomeIcon icon={faHome} className="nav-icon" />
				Home
			</li>

			<li className="nav-link">
				<FontAwesomeIcon icon={faAddressBook} className="nav-icon" />
				Contact
				<FontAwesomeIcon icon={faCaretDown} className="caret-down" />
				<ul className="hidden">
					<li>Customers</li>
					<li>Suppliers</li>
				</ul>
			</li>

			<li className="nav-link">
				<FontAwesomeIcon icon={faBoxes} className="nav-icon" />
				Products
				<ul className="hidden">
					<li>Product List</li>
					<li>Categories</li>
					<li>Variations</li>
					<li>Units</li>
					<li>Brands</li>
					<li>Warranties</li>
				</ul>
				<FontAwesomeIcon icon={faCaretDown} className="caret-down" />
			</li>

			<li className="nav-link">
				<FontAwesomeIcon icon={faShoppingCart} className="nav-icon" />
				Sales
				<FontAwesomeIcon icon={faCaretDown} className="caret-down" />
			</li>

			<li className="nav-link">
				<FontAwesomeIcon icon={faMoneyCheck} className="nav-icon" />
				Purchases
				<FontAwesomeIcon icon={faCaretDown} className="caret-down" />
			</li>

			<li className="nav-link">
				<FontAwesomeIcon icon={faMoneyBillWave} className="nav-icon" />
				Payment
				<FontAwesomeIcon icon={faCaretDown} className="caret-down" />
			</li>

			<li className="nav-link">
				<FontAwesomeIcon icon={faWallet} className="nav-icon" />
				Expense
				<FontAwesomeIcon icon={faCaretDown} className="caret-down" />
			</li>

			<li className="nav-link">
				<FontAwesomeIcon icon={faPiggyBank} className="nav-icon" />
				Banks
				<FontAwesomeIcon icon={faCaretDown} className="caret-down" />
			</li>

			<li className="nav-link">
				Language
				<FontAwesomeIcon icon={faLanguage} className="nav-icon" />
			</li>

			<li className="nav-link">
				<FontAwesomeIcon icon={faUser} className="nav-icon" />
				Users
				<FontAwesomeIcon icon={faCaretDown} className="caret-down" />
			</li>

			<li className="nav-link">
				<FontAwesomeIcon icon={faFileAlt} className="nav-icon" />
				Reports
				<FontAwesomeIcon icon={faCaretDown} className="caret-down" />
			</li>
		</ul>
	);
}

export default DropdownMenu;
