import './App.css';
import AppNav from './components/AppNav/AppNav.jsx';
import SideBar from './components/SideBar/SideBar.jsx';
import AppInput from './components/AppInput/AppInput.jsx';
import AppButton from './components/AppButton.jsx';
import HamburgerMenu from './components/HamburgerMenu.jsx';

function App() {
	return (
		<div className="App bg-gray-50 font-roboto">
			<header className="App-header">
				<AppNav />
				<SideBar />
				<AppButton
					className="bg-red-500 hidden"
					onClick={() => console.log('Salaam')}
				>
					Click me
				</AppButton>
				<HamburgerMenu />
				<div className="w-64">
					<AppInput labelText="Name" />
				</div>
			</header>
		</div>
	);
}

export default App;
