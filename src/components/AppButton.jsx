const AppButton = ({ children, className, onClick }) => (
	<button className={`AppButton absolute transform top-1/2 left-1/2 bg-teal-600 py-3 px-5 rounded-2xl shadow-sm text-white  ${className}`} onClick={onClick}>{children}</button>
);
export default AppButton;
