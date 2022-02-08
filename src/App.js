import './App.css';
import AppNav from './components/AppNav/AppNav.jsx';
import SideNav from './components/SideNav/SideNav.jsx';

function App() {
	return (
		<div className="App bg-gray-50 font-roboto">
			<header className="App-header">
				<AppNav />
				<SideNav />
			</header>
		</div>
	);
}

export default App;
