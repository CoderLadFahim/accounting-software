import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserIsAuthenticated } from './features/auth/authSlice.js';

import AppNav from './components/AppNav/AppNav.jsx';
import SideBar from './components/SideBar/SideBar.jsx';
import LoginForm from './views/LoginForm/LoginForm.jsx';

function App() {
	const userIsAuthenticated = useSelector(selectUserIsAuthenticated);

	return (
		<Router>
			<div className="App bg-gray-50 font-roboto">
				{!userIsAuthenticated ? (
					<LoginForm />
				) : (
					<>
						<AppNav />
						<SideBar />

						<Routes>{/* routes go here */}</Routes>
					</>
				)}
			</div>
		</Router>
	);
}

export default App;
