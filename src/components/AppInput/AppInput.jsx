const AppInput = ({ ...props }) => (
	<input
		className="rounded border py-2 px-3 w-full outline-none focus:border-sky-300 text-slate-600"
		{...props}
	/>
);
export default AppInput;
