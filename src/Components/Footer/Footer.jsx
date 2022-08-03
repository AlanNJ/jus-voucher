import React from "react";
import footer from "../../Images/Footer/fup.png";
import flogo from "../../Images/Footer/flogo.png";
import floc from "../../Images/Footer/flocation.png";
import fcall from "../../Images/Footer/fcall.png";
import fmobile from "../../Images/Footer/fmobile.png";
import fwhatsapp from "../../Images/Footer/fwhatsapp.png";
import insta from "../../Images/Footer/insta.png";
import twitter from "../../Images/Footer/twitter.png";
import facebook from "../../Images/Footer/facebook.png";
import fimg from "../../Images/Footer/Footer.svg";

import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<>
			<div className="footer_container">
				<div className="f_up">
					{/* <img src={footer} alt="" className='fup_img' /> */}
					<img src={flogo} alt="" className="flogo1" />
				</div>

				<div className="footer_down">
					<div className="f1">
						<section className="map1">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14758062.939527992!2d74.3007523880328!3d25.4368356041241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43a9552f81b5%3A0x55f8e9c2cb05c478!2sJus%20Vouchers!5e0!3m2!1sen!2sin!4v1658059126209!5m2!1sen!2sin"
								allowfullscreen=""
								loading="lazy"
								referrerpolicy="no-referrer-when-downgrade"
							></iframe>
						</section>
					</div>

					<div className="f2">
						<h4 className="footer_head">Quick Links</h4>
						<div className="orange"></div>
						<Link to="/" onClick={() => window.scrollTo(0, 0)}>
							<li>Home</li>
						</Link>
						<Link to="/about" onClick={() => window.scrollTo(0, 0)}>
							<li>About Us</li>
						</Link>
						<Link to="/Blogs" onClick={() => window.scrollTo(0, 0)}>
							<li>Blog</li>
						</Link>
						<Link to="contact" onClick={() => window.scrollTo(0, 0)}>
							<li>Contact Us</li>
						</Link>
					</div>

					<div className="f3">
						<h4 className="footer_head">Contact Us</h4>
						<div className="orange"></div>
						<Link to="/">
							<li>
								<img src={floc} alt="" />
								Address:
							</li>
						</Link>
						<p className="footer_para">
							2nd Floor Sheela Arcade, Near IDFC Bank, MP Nagar, Zone-1, Bhopal
							(M.P)
						</p>
						<Link to="/about">
							<li>
								<img src={fcall} alt="" />
								Phone:
							</li>
						</Link>
						<p className="footer_para">1800-889-1312</p>
						<Link to="/Blogs">
							<li>
								<img src={fmobile} alt="" />
								Mobile:
							</li>
						</Link>
						<p className="footer_para">+91-6267 757 223</p>
					</div>
					<div className="f4">
						<Link to="/">
							<li>
								<img src={fwhatsapp} alt="" className="social" />
							</li>
						</Link>
						<Link to="/about">
							<li>
								<img src={facebook} alt="" className="social" />
							</li>
						</Link>
						<Link to="/Blogs">
							<li>
								<img src={twitter} alt="" className="social" />
							</li>
						</Link>
						<Link to="contact">
							<li>
								<img src={insta} alt="" className="social" />
							</li>
						</Link>
					</div>

					<div className="f5">
						<section className="map1">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14758062.939527992!2d74.3007523880328!3d25.4368356041241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43a9552f81b5%3A0x55f8e9c2cb05c478!2sJus%20Vouchers!5e0!3m2!1sen!2sin!4v1658059126209!5m2!1sen!2sin"
								allowfullscreen=""
								loading="lazy"
								referrerpolicy="no-referrer-when-downgrade"
							></iframe>
						</section>
					</div>
				</div>
			</div>
		</>
	);
}

export default Footer;
