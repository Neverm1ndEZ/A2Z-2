import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<LoginPage />} />
			<Route path="/welcome" element={<LandingPage />} />
		</Routes>
	);
};

export default App;
