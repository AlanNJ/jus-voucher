import React, { useState } from "react";
import Navbar from "../Home/navbar/Navbar";
import Rec from "../../../src/Images/Contact/Rectangle 56.png";
import inputline from "../../../src/Images/Contact/Line 1.png";
import mail from "../../../src/Images/Contact/mail1.png";
import phone from "../../../src/Images/Contact/phone1.png";
import call from "../../../src/Images/Contact/call.png";
import location from "../../../src/Images/Contact/location.png";

import "./Contact.css";
import axiosInstance from "../../Axios/axiosInstance";
import { toast } from "react-toastify";
const Contact = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [phoneNo, setPhoneNo] = useState("");

	const submitForm = async (e) => {
		e.preventDefault();
		const data = { firstName, lastName, email, message, phoneNo };
		if (!firstName || !lastName || !email || !message || !phoneNo) {
			toast.error("Please fill all the fields");
		} else {
			var validRegex =
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
			if (email.match(validRegex)) {
				axiosInstance.post("/auth/send-message", data).then((res) => {
					toast.success("Message Sent Successfully");
				});
			} else {
				toast.error("Email not Valid");
			}
		}
	};

	return (
		<>
			<div className="Contact-Us-Wrapper">
				<div className="Contact-us-text-wrapper">
					<p>Contact Us</p>
					<div className="img-wrapper">
						<img src={Rec} />
					</div>
					<div className="Text-wrapper">
						<p>
							Feel free to contact us any time.we will get
							<br />
							back to you as soon as we can!
						</p>
					</div>
					<form action="">
						<input
							type="text"
							className="c_input"
							placeholder="First Name"
							onChange={(e) => setFirstName(e.target.value)}
						/>{" "}
						<input
							onChange={(e) => setLastName(e.target.value)}
							type="text"
							className="c_input1"
							placeholder="Last Name"
						/>{" "}
						<br />
						<input
							type="text"
							className="c_input2"
							placeholder="Mobile Number"
							onChange={(e) => setPhoneNo(e.target.value)}
						/>{" "}
						<br />
						<input
							type="text"
							className="c_input2"
							placeholder="Email"
							onChange={(e) => setEmail(e.target.value)}
						/>{" "}
						<br />
						<textarea
							name=""
							id=""
							cols="30"
							rows="9"
							className="c_textarea"
							placeholder="Message"
							onChange={(e) => setMessage(e.target.value)}
						></textarea>
						<button
							onClick={(e) => submitForm(e)}
							style={{
								margin: "1rem 0rem",
								padding: "1rem 4rem",
								borderRadius: "5px",
								background: "#ff5B22",
								border: "none",
							}}
						>
							Send
						</button>
					</form>
				</div>
				<div className="orange1"></div>

				<div className="info">
					<h4 className="info_head">Info</h4>
					<div className="link_div">
						<div className="link_div1">
							<a href="mailto:info@jusvouchers.com">
								{" "}
								<img src={mail} alt="" /> info@jusvouchers.com
							</a>{" "}
						</div>
						<div className="link_div1">
							<a href="tel:1800-889-1312">
								{" "}
								<img src={phone} alt="" /> 1800-889-1312
							</a>
						</div>
						<div className="link_div1">
							<a href="tel:+91-6267757223">
								<img src={call} alt="" />
								+91-6267757223
							</a>
						</div>
						<div className="link_div1">
							<a href="/">
								<img src={location} alt="" /> 2nd Floor Sheela Arcade, Near IDFC
								Bank, MP Nagar, Zone-1,Bhopal (M.P)
							</a>
						</div>
					</div>
					<section className="map">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14758062.939527992!2d74.3007523880328!3d25.4368356041241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43a9552f81b5%3A0x55f8e9c2cb05c478!2sJus%20Vouchers!5e0!3m2!1sen!2sin!4v1658059126209!5m2!1sen!2sin"
							allowfullscreen=""
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
						></iframe>
					</section>
				</div>

				<div className="info1">
					<h4 className="info_head">Info</h4>
					<div className="link_div">
						<div className="link_div1">
							<a href="mailto:info@jusvouchers.com">
								{" "}
								<img src={mail} alt="" /> info@jusvouchers.com
							</a>{" "}
						</div>
						<div className="link_div1">
							<a href="tel:1800-889-1312">
								{" "}
								<img src={phone} alt="" /> 1800-889-1312
							</a>
						</div>
						<div className="link_div1">
							<a href="tel:+91-6267757223">
								<img src={call} alt="" />
								+91-6267757223
							</a>
						</div>
						<div className="link_div1">
							<a href="/">
								<img src={location} alt="" /> 2nd Floor Sheela Arcade, Near IDFC
								Bank, MP Nagar, Zone-1,Bhopal (M.P)
							</a>
						</div>
					</div>
					<section className="map">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14758062.939527992!2d74.3007523880328!3d25.4368356041241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43a9552f81b5%3A0x55f8e9c2cb05c478!2sJus%20Vouchers!5e0!3m2!1sen!2sin!4v1658059126209!5m2!1sen!2sin"
							allowfullscreen=""
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
						></iframe>
					</section>
				</div>
			</div>
		</>
	);
};

export default Contact;
