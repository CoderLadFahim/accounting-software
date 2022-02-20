import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import './App.css';
import LoginForm from './views/LoginForm/LoginForm.jsx';

function App() {
	const userIsAuthenticated = useSelector(
		(state) => state.auth.userIsAuthenticated
	);

	return (
		<div className="App bg-gray-50 font-roboto">
			<LoginForm />
		</div>
	);
}

export default App;
