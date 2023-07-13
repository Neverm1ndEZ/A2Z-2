import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar">
			{/* <Link to="/" className="catalogue-btn"></Link> */}
			<div className="logo">HEHE</div>
			<Link to="/catalogue" className="catalogue-btn">
				<div className="text">Menu</div>
			</Link>
			<Link to="/" className="catalogue-btn">
				<button className="logout-btn">Logout</button>
			</Link>
		</div>
	);
};

export default Navbar;
