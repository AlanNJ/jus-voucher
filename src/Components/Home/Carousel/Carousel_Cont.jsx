import React, { useState, useEffect } from "react";
import "./Carousel_Cont.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import car1 from "../../../Images/Carousel/image 31.png";
import axiosInstance from "../../../Axios/axiosInstance";

const Carousel_Cont = () => {
	const [bannerImage, setBannerImage] = useState([]);
	useEffect(() => {
		axiosInstance.get("products/get-banner-items").then((res) => {
			setBannerImage(res.data.item);
		});
	}, []);

	return (
		<div className="carousel-container">
			<p>
				Welcome to JusVouchers - Bhopal Trusted Coupons, Offers & Cashback
				Website
			</p>
			<div className="carousel_div6">
				<Carousel
					autoPlay={true}
					infiniteLoop={true}
					showArrows={false}
					showThumbs={false}
					showStatus={false}
				>
					{bannerImage.map((item) => (
						<div className="carou">
							<img
								src={`https://jusvoucher.techjainsupport.co.in/BannerImages/${item.img}`}
							/>
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);
};

export default Carousel_Cont;
