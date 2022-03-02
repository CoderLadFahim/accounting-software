import './LoginFormStyles.css';
import { useState } from 'react';

// Redux hooks and actions
import { useDispatch } from 'react-redux';
import { login } from '../../features/Auth/authSlice.js';

// Components
import AppInput from '../../components/AppInput/AppInput.jsx';
import AppButton from '../../components/AppButton.jsx';
import loginFormImg from './login-bg.jpeg';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

function LoginForm() {
	const dispatch = useDispatch();

	// AppInput values
	const [username, setUsername] = useState('admin@gmail.com');
	const [password, setPassword] = useState('123456');

	// this state controls the validity of the form, remains null at first, gets changed to true from handleSubmit
	const [credentialsInvalid, setCredentialsInvalid] = useState(null);

	// jsx that sits above the inputs
	const formMsg =
		credentialsInvalid === true ? (
			<h1 className="text-red-400 font-bold text-xl text-left">
				<FontAwesomeIcon icon={faCircleExclamation} className="mr-3" />
				Invalid credentials
			</h1>
		) : (
			<h1 className="text-xl text-gray-700 md:text-left xl:text-4xl xl:font-bold">
				Login to your account
			</h1>
		);

	const handleSubmit = (e) => {
		e.preventDefault();

		const [usernameInput, passwordInput] = e.target.elements;
		const { value: userEnteredUsername } = usernameInput;
		const { value: userEnteredPassword } = passwordInput;

		// temporary
		const validCredentials = {
			username: 'admin@gmail.com',
			password: '123456',
		};

		if (
			userEnteredUsername === validCredentials.username &&
			userEnteredPassword === validCredentials.password
		)
			return dispatch(login());

		return setCredentialsInvalid(true);
	};

	return (
		<section className="LoginForm h-screen w-screen bg-gray-100 xl:flex xl:overflow-y-hidden">
			<div className="page-hero xl:order-last xl:w-2/5 xl:h-screen xl:w-5/12">
				<div
					className="img w-full h-64 bg-cover brightness-75 shadow xl:h-full"
					style={{ backgroundImage: `url(${loginFormImg})` }}
				></div>
				<div
					className="branding bg-white w-9/12 py-5 mx-auto rounded-xl shadow flex items-center justify-center gap-6 relative bottom-10 
					sm:gap-6 sm:w-7/12 
					md:w-6/12 md:gap-9
					lg:gap-6 
					xl:hidden"
				>
					<img
						src="logos_temp/Logo.png"
						alt="Brand Logo"
						className="h-9 w-9"
					/>
					<h3 className="text-slate-700 text-lg md:text-xl lg:text-2xl">
						Classic IT ERP Software
					</h3>
				</div>
			</div>

			<form
				action=""
				onSubmit={handleSubmit}
				className="w-9/12 mt-12 mx-auto flex flex-col justify-between text-center gap-y-12 
				sm:w-7/12 
				md:w-6/12 
				lg:h-1/3 lg:mt-28 
				xl:mt-12 xl:w-1/2 xl:w-2/5 xl:h-screen xl:gap-y-16 xl:justify-center 
				3xl:w-1/3"
			>
				<div className="branding hidden xl:flex items-center gap-x-5 transform -translate-y-12">
					<img
						src="logos_temp/Logo.png"
						alt="Brand Logo"
						className="h-14 w-14"
					/>
					<h3 className="text-slate-700 text-4xl">
						Classic IT ERP Software
					</h3>
				</div>
				{formMsg}
				<AppInput
					onChange={(e) => {
						setUsername(e.target.value);
						setCredentialsInvalid(null);
					}}
					value={username}
					className={`rounded-lg lg:py-3 lg:px-4 lg:text-xl lg:border-2 ${
						credentialsInvalid === true && 'valid:border-red-400'
					}`}
					placeholder="Username"
					required
				></AppInput>

				<AppInput
					onChange={(e) => {
						setPassword(e.target.value);
						setCredentialsInvalid(null);
					}}
					value={password}
					className={`rounded-lg lg:py-3 lg:px-4 lg:text-xl lg:border-2 ${
						credentialsInvalid === true && 'valid:border-red-400'
					}`}
					placeholder="Password"
					type="password"
					required
				></AppInput>

				<AppButton
					className="transition-none lg:py-3 lg:text-xl"
					disabled={!username || !password || credentialsInvalid}
				>
					<span className="font-bold">Login</span>
				</AppButton>
			</form>

			<span className="text-xs text-slate-600 absolute left-1/2 bottom-1 -translate-x-1/2">
				Developed by Classic IT
			</span>
		</section>
	);
}

export default LoginForm;
