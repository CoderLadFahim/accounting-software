import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserIsAuthenticated } from './features/Auth/authSlice.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import AppNav from './components/AppNav/AppNav.jsx';
import SideBar from './components/SideBar/SideBar.jsx';
import LoginForm from './views/LoginForm/LoginForm.jsx';
import AddCategory from './views/AddCategory/AddCategory.jsx';
import AddProduct from './views/AddProduct/AddProduct.jsx';

function App() {
	const userIsAuthenticated = useSelector(selectUserIsAuthenticated);

	return (
		<Router>
			{!userIsAuthenticated ? (
				<LoginForm />
			) : (
				<div className="App mt-16">
					<AppNav />
					<SideBar />
					<button className="w-10 h-10 rounded-full shadow xl:hidden bg-green-400 absolute bottom-5 right-5">
						<FontAwesomeIcon
							icon={faXmark}
							className="text-white transform scale-125"
						/>
					</button>

					<Routes>
						<Route path="/add-category" element={<AddCategory />} />
						<Route path="/add-product" element={<AddProduct />} />
					</Routes>
				</div>
			)}
		</Router>
	);
}

export default App;
