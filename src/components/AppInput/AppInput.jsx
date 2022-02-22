const AppInput = ({ className, ...props }) => (
	<input
		className={`rounded focus:border py-2 px-3 w-full outline-none focus:border-sky-300 text-slate-600 shadow rounded-md valid:border-sky-300 ${className}`}
		{...props}
	/>
);
export default AppInput;
