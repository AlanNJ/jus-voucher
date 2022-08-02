import React, { useEffect } from "react";
import "./style.css";

//npm install 3d-react-carousal
import { Carousel } from "3d-react-carousal";
import PlaceHolder from "../../Images/placehonderimg.png";
import axiosInstance from "../../Axios/axiosInstance";

export default function Testimonial3dCarousel() {
	const [clients, setClients] = useState();
	useEffect(() => {
		axiosInstance.get("products/get-happyClients").then(() => {
			console.log(res.data);
			setClients(res.data);
		});
		const interval = setInterval(() => {
			const arrow = document.querySelectorAll(
				"Testimonial3dCarousel .react-3d-carousel .slider-container .slider-right i"
			);
			console.log(arrow);
		}, []);
		return clearInterval(interval);
	}, []);
	let array = [];
	clients &&
		clients.forEach((item) => {
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
	let slides = [
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
						<img src={PlaceHolder} alt="" />
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
						<img src={PlaceHolder} alt="" />
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
}
