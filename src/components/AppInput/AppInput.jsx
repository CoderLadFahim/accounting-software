import './AppInputStyles.css';

function AppInput({ labelText }) {
	return (
		<div id="input-wrapper" className="w-full">
			<input className="fira-code-bold outline-none text" required />

			<label className="block source-code-pro text-gray-700 opacity-50">
				<span className="label-text">{labelText}</span>
			</label>
		</div>
	);
}

export default AppInput;
