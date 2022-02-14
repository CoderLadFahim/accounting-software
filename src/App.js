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
				<Table
					data={[
						{
							serial: 0,
							date: '14-2-2002',
							name: 'fahim',
							balance: 10000,
						},
						{
							serial: 1,
							date: '13-2-2002',
							age: 20,
							name: 'Nazmul',
							balance: 14000,
						},
						{
							serial: 2,
							date: '16-2-2002',
							name: 'Nishat',
							balance: 12000,
						},
					]}
				/>
			</header>
		</div>
	);
}

export default App;
