import React, { useState } from "react";
import logo from "../../../Images/Navbar/Logo.png";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
const Navbar = () => {
	const navigate = useNavigate();
	const [isMobile, setIsMobile] = useState(false);
	const user = JSON.parse(localStorage.getItem("User"));
	const firstLetter = user && user.email[0];
	console.log(firstLetter);
	const logOutUser = () => {
		localStorage.removeItem("User");
		window.location.reload();
	};
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
						<Link to="/" onClick={() => window.scrollTo(0, 0)}>
							<li>Home</li>
						</Link>
						<Link to="/about" onClick={() => window.scrollTo(0, 0)}>
							<li>About Us </li>
						</Link>
						{/* <Link to="/" ><li>Testimonial</li></Link>  */}
						<Link to="/blogs" onClick={() => window.scrollTo(0, 0)}>
							<li>Our Blogs</li>
						</Link>
						<Link to="/collaborating" onClick={() => window.scrollTo(0, 0)}>
							<li>Vendors</li>
						</Link>
						<Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
							<li>Contact Us</li>
						</Link>
						{user ? (
							<>
								<div class="dropdown">
									<button class="dropbtn">{firstLetter}</button>
									<div class="dropdown-content">
										{user && user.approved === 1 && (
											<a href="#" onClick={() => navigate("/admin-panel")}>
												Admin Panel
											</a>
										)}
										<a href="#" onClick={() => logOutUser()}>
											LogOut
										</a>
									</div>
								</div>
							</>
						) : (
							<Link to="/login">
								<li>Login</li>
							</Link>
						)}
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
