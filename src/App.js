import './App.css';
import AppNav from './components/AppNav/AppNav.jsx';
import SideBar from './components/SideBar/SideBar.jsx';
import AppInput from './components/AppInput/AppInput.jsx';
import Table from './components/Table/Table.jsx';
import AppButton from './components/AppButton.jsx';
import HamburgerMenu from './components/HamburgerMenu.jsx';

function App() {
	return (
		<div className="App bg-gray-50 font-roboto">
			<header className="App-header">
				<AppNav />
				<Table />
			</header>
		</div>
	);
}

export default App;
