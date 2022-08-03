import React, { useState, useEffect } from "react";
import "./Trend.css";
import line from "../../../Images/Discount/Line 14.png";
import img1 from "../../../Images/Trend/image 44.png";
import img2 from "../../../Images/Trend/image 45.png";
import { Carousel } from "react-responsive-carousel";
import axiosInstance from "../../../Axios/axiosInstance";

const Trend = () => {
	const [trendingOffers, setTrendingOffers] = useState([]);
	useEffect(() => {
		axiosInstance.get("products/get-trending-offer-items").then((res) => {
			setTrendingOffers(res.data);
		});
	}, []);
	const chunkSize = 3;
	let array = [];
	for (let i = 0; i < trendingOffers.length; i += chunkSize) {
		const chunk = trendingOffers.slice(i, i + chunkSize);
		array.push(chunk);
		// do whatever
	}
	console.log(array);
	return (
		<div className="trend-container">
			<div class="trend">
				<div className="head_container">
					<div className="line">
						<img src={line} />
					</div>
					<h2 className="head-section">Trending Offers</h2>
					<div className="line">
						<img src={line} />
					</div>
				</div>
			</div>
			{/* <div className='img-container'>
        <div className='img1'><img src={img1}></img></div>
        <div className='img1'><img src={img2}></img></div>
      </div> */}
			<div className="carousel_div3">
				<Carousel
					showThumbs={false}
					showArrows={false}
					showStatus={false}
					autoPlay
					infiniteLoop
				>
					{array.map((item) => (
						<div className="car_img3">
							{item.map((i) => (
								<div className="img_card3">
									<img
										src={`https://jusvoucher.techjainsupport.co.in/TrendingOffersImages/${i.img}`}
									/>{" "}
								</div>
							))}
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);
};

export default Trend;
