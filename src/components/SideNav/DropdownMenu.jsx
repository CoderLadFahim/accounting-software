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
				<FontAwesomeIcon icon={faHome} />
				Home
			</li>

			<li className="nav-link">
				<FontAwesomeIcon icon={faAddressBook} />
				Contact
				<FontAwesomeIcon icon={faCaretDown} />
				<ul className="hidden">
					<li>Customers</li>
					<li>Suppliers</li>
				</ul>
			</li>

			<li className="nav-link">
				<FontAwesomeIcon icon={faBoxes} />
				Products
				<ul className="hidden">
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
				<FontAwesomeIcon icon={faShoppingCart} />
				Sales
				<FontAwesomeIcon icon={faCaretDown} />
			</li>

			<li className="nav-link">
				<FontAwesomeIcon icon={faMoneyCheck} />
				Purchases
				<FontAwesomeIcon icon={faCaretDown} />
			</li>

			<li className="nav-link">
				<FontAwesomeIcon icon={faMoneyBillWave} />
				Payment
				<FontAwesomeIcon icon={faCaretDown} />
			</li>

			<li className="nav-link">
				<FontAwesomeIcon icon={faWallet} />
				Expense
				<FontAwesomeIcon icon={faCaretDown} />
			</li>

			<li className="nav-link">
				<FontAwesomeIcon icon={faPiggyBank} />
				Banks
				<FontAwesomeIcon icon={faCaretDown} />
			</li>

			<li className="nav-link">
				Language
				<FontAwesomeIcon icon={faLanguage} />
			</li>

			<li className="nav-link">
				<FontAwesomeIcon icon={faUser} />
				Users
				<FontAwesomeIcon icon={faCaretDown} />
			</li>

			<li className="nav-link">
				<FontAwesomeIcon icon={faFileAlt} />
				Reports
				<FontAwesomeIcon icon={faCaretDown} />
			</li>
		</ul>
	);
}

export default DropdownMenu;
