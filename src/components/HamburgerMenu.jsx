import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const HamburgerMenu = () => (
	<button className="HamburgerMenu block bg-gray-800 text-white rounded-full fixed bottom-4 right-4 w-11 h-11">
		<FontAwesomeIcon icon={faBars} />
	</button>
);

export default HamburgerMenu;
