import React, { useState, useEffect } from "react";
import "./Client.css";
import line from "../../../Images/Discount/Line 14.png";
import doc1 from "../../../Images/Clients/image 41.png";
import doc2 from "../../../Images/Clients/image 42.png";
import doc3 from "../../../Images/Clients/image 43.png";
import doc4 from "../../../Images/Clients/health-plus-card-16.png.webp";
import doc5 from "../../../Images/Clients/7health-plus-card-1.png.webp";
import doc6 from "../../../Images/Clients/health-plus-card-18.png.webp";
import doc7 from "../../../Images/Clients/health-plus-card-22.png.webp";
import doc8 from "../../../Images/Clients/health-plus-card-20.png.webp";
import doc9 from "../../../Images/Clients/health-plus-card-21.png.webp";
import doc10 from "../../../Images/Clients/health-plus-card-23.png.webp";
import doc11 from "../../../Images/Clients/health-plus-card-24.png.webp";
import doc12 from "../../../Images/Clients/health-plus-card-25.png.webp";
import doc13 from "../../../Images/Clients/health-plus-card-26.png.webp";
import doc14 from "../../../Images/Clients/health-plus-card-27.png.webp";
import doc15 from "../../../Images/Clients/health-plus-card-28.png.webp";
import doc16 from "../../../Images/Clients/health-plus-card-29.png.webp";
import doc17 from "../../../Images/Clients/health-plus-card-30.png.webp";
import doc18 from "../../../Images/Clients/health-plus-card-31.png.webp";
import doc19 from "../../../Images/Clients/health-plus-card-32.png.webp";
import doc20 from "../../../Images/Clients/health-plus-card-33.png.webp";
import doc21 from "../../../Images/Clients/health-plus-card-34.png.webp";
import doc22 from "../../../Images/Clients/health-plus-card-35.png.webp";
import doc23 from "../../../Images/Clients/health-plus-card-36.png.webp";
import doc24 from "../../../Images/Clients/health-plus-card-37.png.webp";
import axiosInstance from "../../../Axios/axiosInstance";
import { Carousel } from "react-responsive-carousel";

const Client = () => {
	const [ourClients, setOurClients] = useState([]);
	useEffect(() => {
		axiosInstance.get("products/get-our-clients-items").then((res) => {
			setOurClients(res.data);
		});
	}, []);
	const chunkSize = 3;
	let array = [];
	for (let i = 0; i < ourClients.length; i += chunkSize) {
		const chunk = ourClients.slice(i, i + chunkSize);
		array.push(chunk);
		// do whatever
	}
	console.log(array);
	return (
		<div className="client-wrapper">
			<div className="client-container">
				<div className="head_container">
					<div className="line">
						<img src={line} />
					</div>
					<h2 className="head-section">Our Client’s</h2>
					<div className="line">
						<img src={line} />
					</div>
				</div>
				{/* <div className='client-flex'>
          <div style={{ marginRight: "2rem" }}><img src={doc1}></img></div>
          <div style={{ marginRight: "2rem" }}> <img src={doc2}></img></div>
          <img src={doc3}></img>
        </div> */}
				<div className="carousel_div2">
					<Carousel
						showThumbs={false}
						showArrows={false}
						showStatus={false}
						autoPlay={true}
						infiniteLoop={true}
					>
						{array.map((item) => (
							<div className="car_img2">
								{item.map((i) => (
									<div className="img_card2">
										<img
											src={`http://localhost:5000/OurClientsImages/${i.img}`}
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

export default Client;
