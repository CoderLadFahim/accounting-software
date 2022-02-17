import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AppButton = ({ children, className, ...props }) => (
	<button
		className={`AppButton bg-teal-600 px-6 transform transition hover:bg-teal-500
		py-2 rounded-lg drop-shadow-md text-white ${className}`}
		{...props}
	>
		{children}
	</button>
);

export default AppButton;
