import './LoginFormStyles.css';
import AppInput from '../../components/AppInput/AppInput.jsx';
import AppButton from '../../components/AppButton.jsx';

function LoginForm() {
	return (
		<section className="LoginForm h-screen w-screen bg-sky-500">
			<div className="page-hero">
				<img src="login-bg.jpeg" alt="" className="shadow"/>
				<div className="branding bg-white w-9/12 py-5 mx-auto rounded-xl shadow flex items-center justify-center gap-3">
					<img src="logos_temp/Logo.png" alt="Brand Logo" className="h-9 w-9"/>
					<h3 className="text-slate-700 text-xl">Classic IT & Sky Mart Ltd.</h3>
				</div>
			</div>
		</section>
	);
}

export default LoginForm;
