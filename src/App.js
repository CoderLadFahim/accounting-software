import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import LoginForm from './views/LoginForm/LoginForm.jsx';

function App() {
	const [userIsAuthenticated, setUserAuthenticated] = useState(false);

	return (
		<div className="App bg-gray-50 font-roboto">
			<LoginForm userAuthenticator={() => setUserAuthenticated(true)} />
		</div>
	);
}

export default App;
