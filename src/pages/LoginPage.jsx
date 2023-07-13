import LoginComponent from "../components/LoginComponent";

const LoginPage = () => {
	const handleLogin = (username) => {
		// Perform login logic
		console.log(`Logged in as ${username}`);
	};

	const handleForgotPassword = (email) => {
		// Perform forgot password logic
		console.log(`Reset password for email: ${email}`);
	};

	return (
		<div>
			<LoginComponent
				onLogin={handleLogin}
				onForgotPassword={handleForgotPassword}
			/>
		</div>
	);
};

export default LoginPage;
