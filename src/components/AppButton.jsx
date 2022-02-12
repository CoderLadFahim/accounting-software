import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AppButton = ({ children, className, onClick }) => (
	<button
		className={`AppButton absolute transform top-1/2 left-1/2 bg-teal-600 px-4 transform transition hover:bg-teal-500
		py-2 rounded-2xl drop-shadow-md text-white flex items-center justify-between
		gap-4
		${className}`}
		onClick={onClick}
	>
		<FontAwesomeIcon icon={faPlus} />
		<span className="btn-text">{children}</span>
	</button>
);

export default AppButton;
