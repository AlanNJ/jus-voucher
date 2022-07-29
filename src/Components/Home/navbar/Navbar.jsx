import React, { useState } from "react";
import logo from "../../../Images/Navbar/Logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
const Navbar = () => {
	const [isMobile, setIsMobile] = useState(false);
	return (
		<div className="navbar">
			<div className="image">
				<Link to="/">
					<img src={logo} />
				</Link>
			</div>
			<div className="nav-link">
				<div
					className={isMobile ? "nav-L nav-links-mobile" : "nav-L"}
					onClick={() => setIsMobile(false)}
				>
					<ul>
						<Link to="/">
							<li>Home</li>
						</Link>
						<Link to="/about">
							<li>About Us </li>
						</Link>
						{/* <Link to="/" ><li>Testimonial</li></Link>  */}
						<Link to="/blogs">
							<li>Our Blogs</li>
						</Link>
						<Link to="/collaborating">
							<li>Vendors</li>
						</Link>
						<Link to="/contact">
							<li>Contact Us</li>
						</Link>
						<Link to="/login">
							<li>Login</li>
						</Link>
					</ul>
				</div>
			</div>
			<button
				className="mobile-menu-icon"
				onClick={() => setIsMobile(!isMobile)}
			>
				{isMobile ? (
					<i>
						<FeatherIcon icon="x" />
					</i>
				) : (
					<i>
						<FeatherIcon icon="menu" />
					</i>
				)}{" "}
			</button>
		</div>
	);
};

export default Navbar;
