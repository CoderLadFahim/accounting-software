import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserIsAuthenticated } from './features/auth/authSlice.js';
import { useState } from 'react';

import './App.css';
import LoginForm from './views/LoginForm/LoginForm.jsx';

function App() {
	const userIsAuthenticated = useSelector(selectUserIsAuthenticated);

	return (
		<div className="App bg-gray-50 font-roboto">
			<LoginForm />
		</div>
	);
}

export default App;
