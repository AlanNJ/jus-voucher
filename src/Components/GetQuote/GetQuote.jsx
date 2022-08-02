import React, { useState, useEffect } from "react";
import "./GetQuote.css";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";

function GetQuote() {
	const [openModal, setOpenModal] = useState(false);
	useEffect(() => {
		openModal && (document.body.style.overflow = "hidden");
		!openModal && (document.body.style.overflow = "unset");
	}, [openModal]);
	return (
		<div>
			<div className="getquote" onClick={() => setOpenModal(!openModal)}>
				Get Quote
			</div>
			{openModal === true && (
				<Modal openModal={openModal} setOpenModal={setOpenModal} />
			)}
		</div>
	);
}

export default GetQuote;
