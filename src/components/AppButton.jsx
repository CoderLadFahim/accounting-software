const AppButton = ({ children, className, ...props }) => (
	<button
		className={`AppButton bg-teal-600 hover:bg-teal-500 px-6 transform transition hover:bg-teal-500
		py-2 rounded-lg drop-shadow-md text-white disabled:pointer-events-none disabled:opacity-50 ${className}`}
		{...props}
	>
		{children}
	</button>
);

export default AppButton;
