import './LoginFormStyles.css';
import { useState } from 'react';
import AppInput from '../../components/AppInput/AppInput.jsx';
import AppButton from '../../components/AppButton.jsx';
import loginFormImg from './login-bg.jpeg';

function LoginForm() {
	const [username, setUsername] = useState('admin@gmail.com');
	const [password, setPassword] = useState('123456');

	return (
		<section className="LoginForm h-screen w-screen bg-gray-100">
			<div className="page-hero">
				<div
					className="img w-full h-64 bg-cover brightness-75 shadow"
					style={{ backgroundImage: `url(${loginFormImg})` }}
				></div>
				{/* <img src="login-bg.jpeg" alt="" className="shadow brightness-50" /> */}
				<div className="branding bg-white w-9/12 py-5 mx-auto rounded-xl shadow flex items-center justify-center gap-3 relative bottom-10 sm:gap-6 sm:w-7/12 md:w-6/12">
					<img
						src="logos_temp/Logo.png"
						alt="Brand Logo"
						className="h-9 w-9"
					/>
					<h3 className="text-slate-700 text-xl">
						Classic IT ERP Software
					</h3>
				</div>
			</div>

			<form
				action=""
				className="w-9/12 mt-12 mx-auto flex flex-col justify-between text-center gap-y-12 sm:w-7/12 md:w-6/12 lg:h-1/3 lg:mt-28"
			>
				<h1 className="text-xl text-gray-700 md:text-left">
					Login to your account
				</h1>
				<AppInput
					onChange={(e) => setUsername(e.target.value)}
					value={username}
					className="rounded-lg lg:py-3 lg:px-4 lg:text-xl"
					placeholder="Username"
					required
				></AppInput>

				<AppInput
					onChange={(e) => setPassword(e.target.value)}
					value={password}
					className="rounded-lg lg:py-3 lg:px-4 lg:text-xl"
					placeholder="Password"
					type="password"
					required
				></AppInput>

				<AppButton
					className="transition-none lg:py-3 lg:text-xl"
					disabled={!username || !password}
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
