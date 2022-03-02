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
	faFileAlt,
	faWrench,
} from '@fortawesome/free-solid-svg-icons';

const menus = {
	home: { name: 'Home', icon: faHome, route: '/' },
	Contact: {
		icon: faAddressBook,
		submenus: [
			{ name: 'Customers', route: '/customers' },
			{ name: 'Suppliers', route: '/pro' },
			{ name: 'Import contacts', route: '/products-imports' },
		],
	},
	Products: {
		icon: faBoxes,
		submenus: [
			{ name: 'Product List', route: '/product-list' },
			{ name: 'Categories', route: '/categories' },
			{ name: 'Variations', route: '/variations' },
			{ name: 'Units', route: '/product-list' },
			{ name: 'Brands', route: '/brands' },
			{ name: 'Warranties', route: '/warranties' },
		],
	},
	Sales: {
		icon: faShoppingCart,
		submenus: [
			{ name: 'Sales List', route: '/sales-list' },
			{ name: 'Add Sale', route: '/add-sale' },
			{ name: 'POS List', route: '/post-list' },
			{ name: 'POS', route: '/pos' },
			{ name: 'Drafts', route: '/drafts' },
			{ name: 'Add Drafts', route: '/add-drafts' },
			{ name: 'Quotations', route: '/quotations' },
			{ name: 'Add Quotation', route: '/add-quotation' },
			{ name: 'Returned Sales', route: '/returned-sales' },
			{ name: 'Shipments', route: '/shipments' },
			{ name: 'Discounts', route: '/discounts' },
			{ name: 'Import Sales', route: '/import-sales' },
		],
	},
	Purchases: {
		icons: faMoneyCheck,
		submenus: [
			{ name: 'Purchases List', route: '/purchases-list' },
			{ name: 'Add Purchase', route: '/add-purchase' },
			{ name: 'Returned purchases', route: '/returned-purchases' },
		],
	},
	Payment: {
		icons: faMoneyBillWave,
		submenus: [
			{ name: 'Received', route: '/received-payments' },
			{ name: 'Paid', route: '/paid' },
			{ name: 'Add Payment', route: '/add-payment' },
		],
	},
	Expenses: {
		icons: faWallet,
		submenus: [
			{ name: 'Expense List', route: '/expense-list' },
			{ name: 'Add Expense', route: '/add-expense' },
			{ name: 'Expense Categories', route: '/expense-categories' },
		],
	},
	Banks: {
		icons: faPiggyBank,
		submenus: [
			{ name: 'Manage Accounts', route: '/manage-accounts' },
			{ name: 'Add Accounts', route: '/add-accounts' },
		],
	},
	Users: {
		icons: faUser,
		submenus: [
			{ name: 'Users', route: '/users' },
			{ name: 'Roles', route: '/roles' },
		],
	},
	Reports: {
		icons: faFileAlt,
		submenus: [
			{ name: 'Profit / Loss Report', route: '/pl-reports' },
			{ name: 'Product Sell Report', route: '/sales-report' },
			{ name: 'Service Staff Report', route: '/staff-report' },
			{ name: 'Sales Representative Report', route: '/sales-rep-report' },
			{ name: 'Register Report', route: '/register-report' },
			{ name: 'Expense Report', route: '/expense-report' },
			{ name: 'Sell Payment Report', route: '/sell-payment-report' },
			{ name: 'Purchase Payment Report', route: '/purchase-payment-report' },
			{ name: 'Product Purchase Report', route: '/purchase-report' },
			{ name: 'Purchase &amp; Sale', route: '/purchase-sale-report' },
			{ name: 'Items Report', route: '/items-report' },
			{ name: 'Trending Products', route: '/treding-products' },
			{ name: 'Stock Adjustment Report', route: '/stock-adjustment-report' },
			{ name: 'Stock Report', route: '/stock-report' },
			{ name: 'Customer Groups Report', route: '/customer-groups-report' },
			{ name: 'Supplier &amp; Customer Report', route: 'contacts-report' },
			{ name: 'Tax Report', route: '/tax-reports' },
			{ name: 'Activity Log', route: '/activity-log' },
		],
	},
	Settings: {
		icon: faWrench,
		submenus: [
			{ name: 'Business Settings', route: '/business-settings' },
			{ name: 'Business Locations', route: '/business-locations' },
			{ name: 'Invoice Settings', route: '/invoice-settings' },
			{ name: 'Barcode Settings', route: '/barcode-settings' },
			{ name: 'Receipt Printers', route: '/receipt-printers' },
			{ name: 'Tax Rates', route: '/tax-rates' },
			{ name: 'Modifiers', route: '/modifiers' },
			{ name: 'Types of service', route: '/service-types' },
			{ name: 'Language', route: '/languages' },
		],
	},
};
export default menus;
