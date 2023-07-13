import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

const LoginComponent = ({ onLogin, onForgotPassword }) => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [pass, setPass] = useState("");
	const [confirmPass, setConfirmPass] = useState("");
	const [error, setError] = useState("");
	const [showForgotPassword, setShowForgotPassword] = useState(false);
	const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");

	const handleLogin = (e) => {
		e.preventDefault();
		onLogin(userName);
		localStorage.setItem("username", userName);
	};

	const handleForgotPassword = (e) => {
		e.preventDefault();
		if (pass !== confirmPass) {
			setError("Passwords do not match");
		} else {
			console.log(userName);
			setError("");
		}
		onForgotPassword(forgotPasswordEmail);
	};

	const handleBackToLogin = () => {
		setShowForgotPassword(false);
	};

	if (showForgotPassword) {
		return (
			<div className="form-container">
				<h1 className="h1">Forgot Password?</h1>
				<h3 className="h3">Reset your account</h3>
				<form className="login-form" onSubmit={handleForgotPassword}>
					<label htmlFor="username">Username</label>
					<input
						value={forgotPasswordEmail}
						onChange={(e) => setForgotPasswordEmail(e.target.value)}
						type="text"
						placeholder="Enter Username or Email"
						id="username"
						name="username"
					/>
					<label htmlFor="password">Password</label>
					<input
						value={pass}
						onChange={(e) => setPass(e.target.value)}
						type="password"
						placeholder="Enter Your Password"
						id="password"
						name="password"
					/>
					<label htmlFor="confirmPassword">Confirm Password</label>
					<input
						value={confirmPass}
						onChange={(e) => setConfirmPass(e.target.value)}
						type="password"
						placeholder="Confirm Password"
						id="confirmPassword"
						name="confirmPassword"
					/>
					<p className="error" style={{ fontWeight: "700", color: "red" }}>
						{error}
					</p>
					<button className="submit-btn" type="submit">
						Reset Password
					</button>
					<button className="link-btn" onClick={handleBackToLogin}>
						Back to Login
					</button>
				</form>
			</div>
		);
	}

	return (
		<div className="form-container">
			<h1 className="h1">Welcome</h1>
			<h3 className="h3">Login into your account</h3>
			<form className="login-form" onSubmit={handleLogin}>
				<label htmlFor="userName">Username</label>
				<input
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
					type="text"
					placeholder="Enter Username or Email"
					id="userName"
					name="userName"
				/>
				<label htmlFor="password">Password:</label>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Enter your Password"
					id="password"
					name="password"
				/>
				<Link to="/welcome">
					<button className="submit-btn" type="submit">
						Login
					</button>
				</Link>
				<button
					className="link-btn"
					onClick={() => setShowForgotPassword(true)}
				>
					Forgot Password
				</button>
			</form>
		</div>
	);
};

export default LoginComponent;
