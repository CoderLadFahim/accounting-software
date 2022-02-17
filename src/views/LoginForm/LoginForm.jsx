import './LoginFormStyles.css';
import AppInput from '../../components/AppInput/AppInput.jsx';
import AppButton from '../../components/AppButton.jsx';

function LoginForm() {
	return (
		<section className="LoginForm h-screen w-screen bg-sky-500">
			<div className="app-form-parent bg-white flex flex-col items-center justify-evenly w-9/12 h-64 mx-auto rounded-xl p-8">
				<div className="heading">
					<div className="company-branding flex items-center justify-center gap-3">
						<img
							src="logos_temp/Logo.png"
							alt="logo"
							className="w-7 h-7"
						/>
						<h3 className="text-gray-800 text-lg">
							Classic IT & Sky Mart Ltd.
						</h3>
					</div>

					<h2 className="text-gray-700">Login to your account</h2>
				</div>

				<form action="" className="w-full flex flex-col items-center">
					<AppInput labelText="Username" />
					<AppInput labelText="Password" />

					<AppButton
						className="rounded-md bg-blue-500"
						onClick={() => console.log('heelo')}
					>
						<span className="text-base font-bold hover:bg-blue-400">
							Login
						</span>
					</AppButton>
				</form>
			</div>
		</section>
	);
}

export default LoginForm;
