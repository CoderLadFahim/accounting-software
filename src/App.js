import './App.css';
import AppNav from './components/AppNav/AppNav.jsx';
import SideBar from './components/SideBar/SideBar.jsx';
import AppButton from './components/AppButton.jsx';

function App() {
	return (
		<div className="App bg-gray-50 font-roboto">
			<header className="App-header">
				<AppNav />
				<SideBar />
				<AppButton>Click me</AppButton>
			</header>
		</div>
	);
}

export default App;
