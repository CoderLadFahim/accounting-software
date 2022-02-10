import './DropdownMenuStyles.css';

import NavLink from './NavLink.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
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
	faWrench,
} from '@fortawesome/free-solid-svg-icons';

function DropdownMenu() {
	return (
		<ul className="nav-links">
			<NavLink
				icon={<FontAwesomeIcon icon={faHome} className="nav-icon" />}
				spanText="Home"
			/>

			<NavLink
				icon={<FontAwesomeIcon icon={faAddressBook} className="nav-icon" />}
				spanText="Contact"
			>
				<ul>
					<li>Customers</li>
					<li>Suppliers</li>
					<li>Import Contacts</li>
				</ul>
			</NavLink>

			<NavLink
				icon={<FontAwesomeIcon icon={faBoxes} className="nav-icon" />}
				spanText="Products"
			>
				<ul>
					<li>Product List</li>
					<li>Categories</li>
					<li>Variations</li>
					<li>Units</li>
					<li>Brands</li>
					<li>Warranties</li>
				</ul>
			</NavLink>

			<NavLink
				icon={
					<FontAwesomeIcon icon={faShoppingCart} className="nav-icon" />
				}
				spanText="Sales"
			>
				<ul>
					<li>Sales List</li>
					<li>Add Sale</li>
					<li>POS List</li>
					<li>POS</li>
					<li>Drafts</li>
					<li>Add Drafts</li>
					<li>Quotations</li>
					<li>Add Quotation</li>
					<li>Returned Sales</li>
					<li>Shipments</li>
					<li>Discounts</li>
					<li>Import Sales</li>
				</ul>
			</NavLink>

			<NavLink
				icon={<FontAwesomeIcon icon={faMoneyCheck} className="nav-icon" />}
				spanText="Purchases"
			>
				<ul>
					<li>Purchases List</li>
					<li>Add Purchase</li>
					<li>Returned purchases</li>
				</ul>
			</NavLink>

			<NavLink
				className="nav-link"
				icon={
					<FontAwesomeIcon icon={faMoneyBillWave} className="nav-icon" />
				}
				spanText="Payment"
			>
				<ul>
					<li>Received</li>
					<li>Paid</li>
					<li>Add Payment</li>
				</ul>
			</NavLink>

			<NavLink
				icon={<FontAwesomeIcon icon={faWallet} className="nav-icon" />}
				spanText="Expenses"
			>
				<ul>
					<li>Expense List</li>
					<li>Add Expense</li>
					<li>Expense Categories</li>
				</ul>
			</NavLink>

			<NavLink
				icon={<FontAwesomeIcon icon={faPiggyBank} className="nav-icon" />}
				spanText="Banks"
			>
				<ul>
					<li>Manage Accounts</li>
					<li>Add Accounts</li>
				</ul>
			</NavLink>

			<NavLink
				icon={<FontAwesomeIcon icon={faLanguage} className="nav-icon" />}
				spanText="Language"
			>
				<ul>
					<li>English</li>
					<li>বাংলা</li>
				</ul>
			</NavLink>

			<NavLink
				icon={<FontAwesomeIcon icon={faUser} className="nav-icon" />}
				spanText="Users"
			>
				<ul>
					<li>Users</li>
					<li>Roles</li>
				</ul>
			</NavLink>
			<NavLink
				icon={<FontAwesomeIcon icon={faFileAlt} className="nav-icon" />}
				spanText="Reports"
			>
				<ul>
					<li>Profit / Loss Report</li>
					<li>Product Sell Report</li>
					<li>Service Staff Report</li>
					<li>Sales Representative Report</li>
					<li>Register Report</li>
					<li>Expense Report</li>
					<li>Sell Payment Report</li>
					<li>Purchase Payment Report</li>
					<li>Product Purchase Report</li>
					<li>Purchase &amp; Sale</li>
					<li>Items Report</li>
					<li>Trending Products</li>
					<li>Stock Adjustment Report</li>
					<li>Stock Report</li>
					<li>Customer Groups Report</li>
					<li>Supplier &amp; Customer Report</li>
					<li>Tax Report</li>
					<li>Activity Log</li>
				</ul>
			</NavLink>
			<NavLink
				icon={<FontAwesomeIcon icon={faWrench} className="nav-icon" />}
				spanText="Settings"
			>
				<ul>
					<li>Business Settings</li>
					<li>Business Locations</li>
					<li>Invoice Settings</li>
					<li>Barcode Settings</li>
					<li>Receipt Printers</li>
					<li>Tax Rates</li>
					<li>Modifiers</li>
					<li>Types of service</li>
				</ul>
			</NavLink>
		</ul>
	);
}

export default DropdownMenu;
