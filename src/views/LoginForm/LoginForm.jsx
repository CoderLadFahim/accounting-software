import './LoginFormStyles.css';
import AppInput from '../../components/AppInput/AppInput.jsx';
import AppButton from '../../components/AppButton.jsx';

function LoginForm() {
	return (
		<section className="LoginForm">
			<div className="app-form-parent">
				<div className="heading">
					<div className="company-branding">
						<img src="" alt="" />
						<h3>COMPANY_NAME</h3>
					</div>

					<h2>Login to your account</h2>
				</div>

				<form action="">
					<AppInput labelText="Username" />
					<AppInput labelText="Password" />

					<AppButton className="rounded-md">Login</AppButton>
				</form>
			</div>

			<img src="" alt="" />
		</section>
	);
}

export default LoginForm;
