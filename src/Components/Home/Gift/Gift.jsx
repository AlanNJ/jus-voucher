import React, { useState, useEffect } from "react";
import "./Gift.css";
import line from "../../../Images/Discount/Line 14.png";
// import { Carousel } from "react-responsive-carousel";
import Opd from "../../../Images/Gift/Opd.png";
import gym from "../../../Images/Gift/GYM.png";
import yoga from "../../../Images/Gift/YOGA.png";
import Dietician from "../../../Images/Gift/Dietician.png";
import hospital from "../../../Images/Gift/image 35.png";
import pathology from "../../../Images/Gift/pathology.png";
import ayurveda from "../../../Images/Gift/ayurveda.png";
import homoeopathic from "../../../Images/Gift/homoeopathic.png";
import radiology from "../../../Images/Gift/radiology.png";
import Physio from "../../../Images/Gift/Physio.png";
import axiosInstance from "../../../Axios/axiosInstance";

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Gift = () => {
	const [freegiftItems, setFreeGiftItems] = useState([]);
	useEffect(() => {
		axiosInstance.get("/products/get-free-gift-voucher-items").then((res) => {
			setFreeGiftItems(res.data);
		});
	}, []);
	const chunkSize = 5;
	let array = [];
	for (let i = 0; i < freegiftItems.length; i += chunkSize) {
		const chunk = freegiftItems.slice(i, i + chunkSize);
		array.push(chunk);
		// do whatever
	}
	console.log(array);
	return (
		<div className="gift-wrapper">
			<div className="gift-container">
				<div className="head_container">
					<div className="line">
						<img src={line} />
					</div>
					<h2 className="head-section">Free Gift Vouchers</h2>
					<div className="line">
						<img src={line} />
					</div>
				</div>
				<div className="carousel_div">
					<Carousel
						showThumbs={false}
						showArrows={false}
						showStatus={false}
						autoPlay={true}
						infiniteLoop={true}
					>
						{array.map((item) => (
							<div className="car_img">
								{item.map((i) => (
									<div className="img_card">
										<img
											src={`http://localhost:5000/FreeGiftVouchersImages/${i.img}`}
										/>{" "}
									</div>
								))}
							</div>
						))}
					</Carousel>
				</div>
			</div>
		</div>
	);
};

export default Gift;
