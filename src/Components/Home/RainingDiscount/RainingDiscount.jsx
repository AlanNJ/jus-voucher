import React from "react";
import line from "../../../Images/Discount/Line 14.png";
import { Crousel1 } from "../../Collaborating/Collaborating";

function RainingDiscount() {
	return (
		<div className="raining_container">
			<div className="head_container">
				<div className="line">
					<img src={line} />
				</div>
				<h2 className="head-section">Raining Discounts</h2>
				<div className="line">
					<img src={line} />
				</div>
			</div>
			<Crousel1 />
		</div>
	);
}

export default RainingDiscount;
