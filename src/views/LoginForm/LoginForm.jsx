import './LoginFormStyles.css';
import AppInput from '../../components/AppInput/AppInput.jsx';
import AppButton from '../../components/AppButton.jsx';

function LoginForm() {
	return (
		<section className="LoginForm h-screen w-screen bg-gray-100">
			<div className="page-hero">
				<img src="login-bg.jpeg" alt="" className="shadow brightness-50" />
				<div className="branding bg-white w-9/12 py-5 mx-auto rounded-xl shadow flex items-center justify-center gap-3 relative bottom-10">
					<img
						src="logos_temp/Logo.png"
						alt="Brand Logo"
						className="h-9 w-9"
					/>
					<h3 className="text-slate-700 text-xl">
						Classic IT & Sky Mart Ltd.
					</h3>
				</div>
			</div>

			<form
				action=""
				className="w-9/12 mt-12 mx-auto flex flex-col justify-between text-center gap-y-12"
			>
				<h1 className="text-lg text-gray-700">Login to your account</h1>
				<AppInput placeholder="Username"></AppInput>
				<AppInput placeholder="Password"></AppInput>

				<AppButton>
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
