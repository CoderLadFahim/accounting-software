import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserIsAuthenticated } from './features/Auth/authSlice.js';

import AppNav from './components/AppNav/AppNav.jsx';
// import SideBar from './components/SideBar/SideBar.jsx';
import LoginForm from './views/LoginForm/LoginForm.jsx';
import AddCategory from './views/Category/AddCategory.jsx';

function App() {
	const userIsAuthenticated = useSelector(selectUserIsAuthenticated);

	return (
		<Router>
			{!userIsAuthenticated ? (
				<LoginForm />
			) : (
				<div className="App mt-16">
					<AppNav />
					{/* <SideBar /> */}

					<Routes>
						<Route path="add-category" element={<AddCategory />} />
					</Routes>
				</div>
			)}
		</Router>
	);
}

export default App;
