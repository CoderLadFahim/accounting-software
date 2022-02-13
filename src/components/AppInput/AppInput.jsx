import './AppInputStyles.css';

function AppInput({ labelText }) {
	return (
		<div id="input-wrapper" class="w-full">
			<input class="fira-code-bold outline-none text" required />

			<label class="block source-code-pro text-gray-700 opacity-50">
				<span class="label-text">{labelText}</span>
			</label>
		</div>
	);
}

export default AppInput;
