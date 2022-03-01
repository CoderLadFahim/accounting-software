import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setMobileSidebarActive } from './features/Navigation/navigationSlice.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import AppNav from './components/AppNav/AppNav.jsx';
import SideBar from './components/SideBar/SideBar.jsx';
import LoginForm from './views/LoginForm/LoginForm.jsx';
import AddCategory from './views/AddCategory/AddCategory.jsx';
import AddProduct from './views/AddProduct/AddProduct.jsx';

function App() {
	const navSliceDispatcher = useDispatch();
	const userIsAuthenticated = useSelector(
		(state) => state.auth.userIsAuthenticated
	);

	const showSidebar = useSelector(
		(state) => state.navigation.mobileSidebarActive
	);

	const setShowSidebar = () => {
		navSliceDispatcher(setMobileSidebarActive());
	};

	return (
		<Router>
			{!userIsAuthenticated ? (
				<LoginForm />
			) : (
				<div className="App mt-16">
					<AppNav />
					<SideBar
						showSidebar={showSidebar}
						hideSidebar={setShowSidebar}
					/>
					<button
						className="w-10 h-10 rounded-full shadow-md xl:hidden bg-green-400 absolute bottom-5 right-5"
						onClick={() => setShowSidebar((prev) => !prev)}
					>
						<FontAwesomeIcon
							icon={showSidebar ? faXmark : faBars}
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
