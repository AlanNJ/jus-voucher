import React, { useEffect, useState } from "react";
import "./ClientTestimonial.css";
import man from "../../../Images/man.png";
import { Carousel } from "react-responsive-carousel";
import { toast } from "react-toastify";
import axiosInstance from "../../../Axios/axiosInstance";

function ClientTestimonial() {
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");
	const [testimonials, setTestimonials] = useState("");
	useEffect(() => {
		axiosInstance.get("/products/get-client-testimonial-items").then((res) => {
			setTestimonials(res.data.approveClientTestimonialsItem);
		});
	}, []);
	const submitForm = (e) => {
		e.preventDefault();
		const data = { name, message };
		if (!name || !message) {
			toast.error("Please fill all the fields");
		} else {
			axiosInstance
				.post("/products/add-client-testimonial-items", data)

				.then((res) => toast.success("Message Sent Successfully"));
		}
	};
	console.log(testimonials);
	return (
		<div className="testimonialclient_container">
			<div className="testimonial">
				<h1 className="client_head">Client Testimonial</h1>
				<p className="client_para">
					Our work speak for itself. We are 100% commited towards the best
					quality product delivery.
				</p>
				<form>
					<input
						type="text"
						className="client_input"
						placeholder="Name"
						onChange={(e) => setName(e.target.value)}
					/>{" "}
					<br />
					<textarea
						name=""
						id=""
						cols="30"
						rows="10"
						className="client_textarea"
						placeholder="Message"
						onChange={(e) => setMessage(e.target.value)}
					></textarea>{" "}
					<br />
					<button className="ex_button" onClick={(e) => submitForm(e)}>
						Exclusive Package
					</button>
				</form>
			</div>

			<div className="carousel_div4">
				<Carousel
					showThumbs={false}
					showArrows={false}
					showStatus={false}
					autoPlay={true}
					infiniteLoop={true}
				>
					{testimonials &&
						testimonials.map((item) => (
							<div className="clientcarousel">
								<div className="img_head">
									<div className="img_head2">
										<h3 className="head3">{item.name}</h3>
									</div>
								</div>
								<p className="carouselpara">"{item.message}"</p>
							</div>
						))}
				</Carousel>
			</div>
		</div>
	);
}

export default ClientTestimonial;
