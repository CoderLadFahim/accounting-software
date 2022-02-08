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
				<div className="nav-link-content space-x-3">
					<FontAwesomeIcon icon={faHome} className="nav-icon" />
					<span>Home</span>
				</div>
			</li>

			<li className="nav-link">
				<div className="nav-link-content space-x-3">
					<FontAwesomeIcon icon={faAddressBook} className="nav-icon" />
					<span>Contact</span>
				</div>
				<FontAwesomeIcon icon={faCaretDown} className="caret-down" />
				<ul className="hidden">
					<li>Customers</li>
					<li>Suppliers</li>
				</ul>
			</li>

			<li className="nav-link">
				<div className="nav-link-content space-x-3">
					<FontAwesomeIcon icon={faBoxes} className="nav-icon" />
					<span>Products</span>
				</div>
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
				<div className="nav-link-content space-x-3">
					<FontAwesomeIcon icon={faShoppingCart} className="nav-icon" />
					<span>Sales</span>
				</div>
				<FontAwesomeIcon icon={faCaretDown} className="caret-down" />
			</li>

			<li className="nav-link">
				<div className="nav-link-content space-x-3">
					<FontAwesomeIcon icon={faMoneyCheck} className="nav-icon" />
					<span>Purchases</span>
				</div>
				<FontAwesomeIcon icon={faCaretDown} className="caret-down" />
			</li>

			<li className="nav-link">
				<div className="nav-link-content space-x-3">
					<FontAwesomeIcon icon={faMoneyBillWave} className="nav-icon" />
					<span>Payment</span>
				</div>
				<FontAwesomeIcon icon={faCaretDown} className="caret-down" />
			</li>

			<li className="nav-link">
				<div className="nav-link-content space-x-3">
					<FontAwesomeIcon icon={faWallet} className="nav-icon" />
					<span>Expense</span>
				</div>
				<FontAwesomeIcon icon={faCaretDown} className="caret-down" />
			</li>

			<li className="nav-link">
				<div className="nav-link-content space-x-3">
					<FontAwesomeIcon icon={faPiggyBank} className="nav-icon" />
					<span>Banks</span>
				</div>
				<FontAwesomeIcon icon={faCaretDown} className="caret-down" />
			</li>

			<li className="nav-link">
				<div className="nav-link-content space-x-3">
					<FontAwesomeIcon icon={faLanguage} className="nav-icon" />
					<span>Language</span>
				</div>
			</li>

			<li className="nav-link">
				<div className="nav-link-content space-x-3">
					<FontAwesomeIcon icon={faUser} className="nav-icon" />
					<span>Users</span>
				</div>
				<FontAwesomeIcon icon={faCaretDown} className="caret-down" />
			</li>

			<li className="nav-link">
				<div className="nav-link-content space-x-3">
					<FontAwesomeIcon icon={faFileAlt} className="nav-icon" />
					<span>Reports</span>
				</div>
				<FontAwesomeIcon icon={faCaretDown} className="caret-down" />
			</li>
		</ul>
	);
}

export default DropdownMenu;
