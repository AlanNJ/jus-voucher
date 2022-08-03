import React, { useState } from "react";
import line from "../Collaborating/Collab_images/Line 14.png";
import form_image from "../Collaborating/Collab_images/form-image.png";
import "./Collaborating_page.css";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import "../Happy Clients/style.css";
import { useEffect } from "react";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import Carousel_Cont from "../Home/Carousel/Carousel_Cont";
import { Carousel } from "3d-react-carousal";
import axiosInstance from "../../Axios/axiosInstance";
import img1 from "../../Images/raining/Rectangle 11.svg";
import img2 from "../../Images/raining/Rectangle 12.svg";
import img3 from "../../Images/raining/Rectangle 13.svg";
import img4 from "../../Images/raining/Rectangle 14.svg";
import img5 from "../../Images/raining/Rectangle 15.svg";
import { toast } from "react-toastify";

// import Testimonial3dCarousel from "../Happy Clients/crousels";

const Collaborating = () => {
	// const [spacing, setSpacing] = useState(4);

	// const jsx = `<Grid container spacing={${spacing}}>`;
	//
	useEffect(() => {
		getDiscounts();
	}, []);
	const [firstName, setFirstName] = useState("");

	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [phoneNo, setPhoneNo] = useState("");
	const submitForm = async (e) => {
		e.preventDefault();
		const data = { firstName, email, message, phoneNo };
		if (!firstName || !email || !message || !phoneNo) {
			toast.error("Please fill all the fields");
		} else {
			var validRegex =
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
			if (email.match(validRegex)) {
				axiosInstance.post("/auth/send-message", data).then((res) => {
					toast.success("Message Sent Successfully");
					console.log(res.data);
				});
			} else {
				toast.error("Email not valid");
			}
		}
	};
	const getDiscounts = () => {
		axiosInstance.get("products/get-raining-items").then((res) => {
			console.log(res);
		});
	};

	const generator = () => {
		const array = [];
	};
	return (
		<>
			<Carousel_Cont />
			<div className="Collaborating_wrapper">
				<div className="Collaborating_head">
					<div className="head_container">
						<div className="line">
							<img src={line} />
						</div>
						<h2 className="head-section">Collabrating with us</h2>
						<div className="line">
							<img src={line} />
						</div>
					</div>

					<div className="content-wrapper">
						<p>
							Who doesn’t love concessions and discounts; especially when prices
							of almost everything are escalating? These days, most of the e-com
							sites and online shopping portals are offering greatdeals and free
							coupons so that buyers can save money while buying from their
							websites.
							<br />
							<br /> Day by day, the financial system is festering and in such
							situations; using special discount codes and coupons have become a
							boon for crazy online shoppers all around the world. So if you are
							one of those quick-witted online shoppers who persistently try to
							dig up deals and coupons which could reduce their expenses to a
							great extent; then here we are to help you. Below are the best
							coupons and deals from leading-com websites like Jabong, Flipkart,
							Amazon, Nykaa, and Myntra which will help you to grab more
							products and items at less expense.
						</p>
					</div>
				</div>

				<br />

				<div className="head_container">
					<div className="line">
						<img src={line} />
					</div>
					<h2 className="head-section">Happy Clients</h2>
					<div className="line">
						<img src={line} />
					</div>
				</div>
				<Crousel2 />
				<div className="Services">
					<div className="head_container">
						<div className="line">
							<img src={line} />
						</div>
						<h2 className="head-section">Services</h2>
						<div className="line">
							<img src={line} />
						</div>
					</div>
					<div className="content-wrapper">
						<p>
							Day by day, the financial system is festering and in such
							situations; using special discount codes and coupons have become a
							boon for crazy online shoppers all around the world. So if you are
							one of those quick-witted online shoppers who persistently try to
							dig up deals and coupons which could reduce their expenses to a
							great extent; then here we are to help you. Below are the best
							coupons and deals from leading-com websites like Jabong, Flipkart,
							Amazon, Nykaa, and Myntra which will help you to grab more
							products and items at less expense.
						</p>
					</div>

					<div>
						<br />
						{/* <Grid sx={{ flexGrow: 1 }} container spacing={8}>
							<Grid item>
								<Grid container justifyContent="center" spacing={spacing}>
									{[0, 1, 2, 3, 4, 5, 6, 7].map((value) => (
										<Grid key={value} item>
											<Paper
												sx={{
													height: 259,
													width: 248,
													backgroundColor: (theme) =>
														theme.palette.mode === "dark" ? "#1A2027" : "#fff",
												}}
											/>
										</Grid>
									))}
								</Grid>
							</Grid>
						</Grid> */}
					</div>
				</div>
				<br />
				<br />
				<br />

				<div className="Quotation">
					<div className="Quotation_image">
						<img className="form_img" src={form_image}></img>
					</div>
					<div className="Quotation_Form">
						<p style={{ color: "#737373" }} variant="h5">
							Name
						</p>
						<TextField
							variant="standard"
							color="warning"
							focused
							fullWidth
							onChange={(e) => setFirstName(e.target.value)}
						/>
						<br />
						<br />
						<p style={{ color: "#737373" }} variant="h5">
							Email
						</p>
						<TextField
							onChange={(e) => setEmail(e.target.value)}
							variant="standard"
							color="warning"
							focused
							fullWidth
						/>
						<br />
						<br />
						<p style={{ color: "#737373" }} variant="h5">
							Mobile Number
						</p>
						<TextField
							onChange={(e) => setPhoneNo(e.target.value)}
							variant="standard"
							color="warning"
							focused
							fullWidth
						/>
						<br />
						<br />

						<p style={{ color: "#737373" }} variant="h5">
							Message
						</p>
						<TextField
							variant="standard"
							color="warning"
							focused
							style={{ color: "black" }}
							size="large"
							multiline
							rows={3}
							fullWidth
							onChange={(e) => setMessage(e.target.value)}
						/>

						<br />
						<br />
						<br />

						<Button
							onClick={submitForm}
							style={{ background: "#FA7D29" }}
							variant="contained"
						>
							Submit
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export const Crousel1 = () => {
	const [arroww, setArroww] = useState();
	const [item, setItems] = useState();
	useEffect(() => {
		/*
		const interval = setInterval(() => {
			const arrow = document.querySelectorAll(
				"Testimonial3dCarousel .react-3d-carousel .slider-container .slider-right i"
			);
			setArroww(arrow);
			console.log("hello");
			console.log(arrow);
			arrow.click();
			simulateMouseClick(arrow);
		}, 1000);

		return clearInterval(interval);
		*/
		axiosInstance.get("products/get-raining-items").then((res) => {
			console.log(res.data.item);
			setItems(res.data.item);
		});
	}, []);
	console.log(item);

	let array = [];
	item &&
		item.forEach((item) => {
			array.push(
				<div className="Testimonial3dCarousel-Slide">
					{
						<img
							src={
								"https://jusvoucher.techjainsupport.co.in/RainingImages/" +
								item.img
							}
						/>
					}
				</div>
			);
		});
	console.log(array);
	/*
	const arrow = document.querySelectorAll(
		".Testimonial3dCarousel .react-3d-carousel .slider-container .slider-right div i"
	);

	async function simulateMouseClick(el) {
		let opts = { view: window, bubbles: true, cancelable: true, buttons: 1 };
		el.dispatchEvent(new MouseEvent("mousedown", opts));
		await new Promise((r) => setTimeout(r, 50));
		el.dispatchEvent(new MouseEvent("mouseup", opts));
		el.dispatchEvent(new MouseEvent("click", opts));
	}
	simulateMouseClick(arrow);
	*/
	let slides = [
		<div className="Testimonial3dCarousel-Slide">
			{<img src={img1} alt="" />}
		</div>,
		<div className="Testimonial3dCarousel-Slide">
			{<img src={img2} alt="" />}
		</div>,
		<div className="Testimonial3dCarousel-Slide">
			{<img src={img3} alt="" />}
		</div>,
		<div className="Testimonial3dCarousel-Slide">
			{<img src={img4} alt="" />}
		</div>,
		<div className="Testimonial3dCarousel-Slide">
			{<img src={img5} alt="" />}
		</div>,
	];
	return (
		<div className="Testimonial3dCarousel-Container">
			<div className="Testimonial3dCarousel">
				<Carousel slides={array && array} />
			</div>
		</div>
	);
};
export const Crousel2 = () => {
	const [arroww, setArroww] = useState();
	const [item, setItems] = useState();
	const [slidess, setSlides] = useState([]);

	useEffect(() => {
		axiosInstance
			.get("products/get-happyClients-items")
			.then((res) => {
				setItems(res.data.item);
			})
			.catch((err) => console.log(err));
	}, []);
	let array = [];
	item &&
		item.forEach((item) => {
			array.push(
				<div className="Testimonial3dCarousel-Slide">
					<div className="Mark">
						<span className="span-comma">
							<b>"</b>
						</span>
					</div>

					<div className="Testimonial-Slide-Content">
						<p>{item.message}</p>
						<div className="Testimonial-Slide-Profile-Row">
							<div className="Testimonials-Profile-Content-Col">
								<h4 className="my-0">{item.name}</h4>
							</div>
						</div>
					</div>
				</div>
			);
		});

	console.log(slidess);
	const helper = (item) => {
		return (
			<div className="Testimonial3dCarousel-Slide">
				<div className="Mark">
					<span className="span-comma">
						<b>"</b>
					</span>
				</div>
				<div className="Testimonial-Slide-Content">
					{/* <img src={r1} alt="" /> */}
					<p>
						The Ritz floor is the leader of floor installation and repair in the
						country sed diam nonumy eirmod tempor invidunt ut labore and
						efficient strategy.
					</p>
					<div className="Testimonial-Slide-Profile-Row">
						<div className="Testimonials-Profile-Image">
							<img src={""} alt="" />
						</div>
						<div className="Testimonials-Profile-Content-Col">
							<h4 className="my-0">Akash Singh</h4>
							<h5 className="my-0">UI/UX Designer</h5>
						</div>
					</div>
				</div>
			</div>
		);
	};
	/*
	const helper = () => {
		for (let i = 0; i <= item.length; i++) {
			setSlides(() => (
				<div className="Mark">
					<span className="span-comma">
						<b>"</b>
					</span>
				</div>
			));
		}
	};
	*/

	let slides = [
		<div className="Testimonial3dCarousel-Slide">
			<div className="Mark">
				<span className="span-comma">
					<b>"</b>
				</span>
			</div>
			<div className="Testimonial-Slide-Content">
				{/* <img src={r1} alt="" /> */}
				<p>
					The Ritz floor is the leader of floor installation and repair in the
					country sed diam nonumy eirmod tempor invidunt ut labore and efficient
					strategy.
				</p>
				<div className="Testimonial-Slide-Profile-Row">
					<div className="Testimonials-Profile-Image">
						<img src={""} alt="" />
					</div>
					<div className="Testimonials-Profile-Content-Col">
						<h4 className="my-0">Akash Singh</h4>
						<h5 className="my-0">UI/UX Designer</h5>
					</div>
				</div>
			</div>
		</div>,
		<div className="Testimonial3dCarousel-Slide">
			<div className="Mark">
				<span className="span-comma">
					<b>"</b>
				</span>
			</div>
			<div className="Testimonial-Slide-Content">
				<p>
					The Ritz floor is the leader of floor installation and repair in the
					country sed diam nonumy eirmod tempor invidunt ut labore and efficient
					strategy.
				</p>
				<div className="Testimonial-Slide-Profile-Row">
					<div className="Testimonials-Profile-Image">
						<img src={""} alt="" />
					</div>
					<div className="Testimonials-Profile-Content-Col">
						<h4 className="my-0">Akash Singh</h4>
						<h5 className="my-0">UI/UX Designer</h5>
					</div>
				</div>
			</div>
		</div>,
		<div className="Testimonial3dCarousel-Slide">
			<div className="Mark">
				<span className="span-comma">
					<b>"</b>
				</span>
			</div>
			<div className="Testimonial-Slide-Content">
				<p>
					The Ritz floor is the leader of floor installation and repair in the
					country sed diam nonumy eirmod tempor invidunt ut labore and efficient
					strategy.
				</p>
				<div className="Testimonial-Slide-Profile-Row">
					<div className="Testimonials-Profile-Image">
						<img src={""} alt="" />
					</div>
					<div className="Testimonials-Profile-Content-Col">
						<h4 className="my-0">Akash Singh</h4>
						<h5 className="my-0">UI/UX Designer</h5>
					</div>
				</div>
			</div>
		</div>,
	];
	return (
		<div className="Testimonial3dCarousel-Container">
			<div className="Testimonial3dCarousel">
				<Carousel slides={array && array} />
			</div>
		</div>
	);
};

export default Collaborating;
