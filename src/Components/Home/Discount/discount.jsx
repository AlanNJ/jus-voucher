import React, { useState, useEffect } from "react";
import "./discount.css";
import line from "../../../Images/Discount/Line 14.png";

import { Carousel } from "react-responsive-carousel";

import axiosInstance from "../../../Axios/axiosInstance";

export const Discount = () => {
	const [discountItems, setDiscountItems] = useState([]);
	useEffect(() => {
		axiosInstance.get("products/get-discount-items").then((res) => {
			setDiscountItems(res.data);
		});
	}, []);
	const chunkSize = 2;
	let array = [];
	for (let i = 0; i < discountItems.length; i += chunkSize) {
		const chunk = discountItems.slice(i, i + chunkSize);
		array.push(chunk);
		// do whatever
	}
	console.log(array);
	return (
		<div>
			<div className="Discount-container">
				<div className="head_container">
					<div className="line">
						<img src={line} />
					</div>
					<h2 className="head-section">Discount Coupons</h2>
					<div className="line">
						<img src={line} />
					</div>
				</div>
				{/* <div className="coup-container">
      <div className="coupanimg"> <img src={Hospital} /></div>
      <div className="coupanimg"> <img src={opd} /></div>

    </div> */}
				<div className="carousel_div1">
					<Carousel
						showThumbs={false}
						showArrows={false}
						showStatus={false}
						autoPlay={true}
						infiniteLoop={true}
					>
						{array.map((item, i) => (
							<div key={i} className="car_img1">
								{item.map((i) => (
									<div className="img_card1">
										<img
											src={`http://localhost:5000/DiscountImages/${i.img}`}
										/>{" "}
									</div>
								))}
							</div>
						))}
					</Carousel>
				</div>

				{/* <Sliders {...settings} className="slider">
      <div className="card-div">
        <img src={Hospital} alt="" />

      </div>
      <div className="card-div">
        <img src={opd} alt="" />

      </div>


    </Sliders> */}
			</div>
		</div>
	);
};
export default Discount;
