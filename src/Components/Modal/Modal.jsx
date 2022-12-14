import React, { useEffect, useState } from "react";
import "./modal.css";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { maxWidth } from "@mui/system";
import axiosInstance from "../../Axios/axiosInstance";
import { toast } from "react-toastify";

export const Modal = ({ openModal, setOpenModal, type, img }) => {
	console.log(type);
	const doWork = async () => {
		if (type === "image") {
			setOpenModal(!openModal);
		}
	};
	return (
		<div>
			<RiDeleteBack2Fill
				style={{
					transform: "Scale(2)",

					zIndex: "1000000000",
					cursor: "pointer",
				}}
				onClick={() => doWork()}
			/>
			<div className="modal-container" onClick={() => doWork()}>
				<div className="modal-card">
					{type == "image" ? (
						<ModalTypeImage
							img={img}
							openModal={openModal}
							setOpenModal={setOpenModal}
						/>
					) : (
						<ModalType openModal={openModal} setOpenModal={setOpenModal} />
					)}
				</div>
			</div>
		</div>
	);
};
const ModalType = ({ setOpenModal, openModal }) => {
	const [emailId, setEmail] = useState("");
	const submitQuote = async () => {
		if (!emailId) {
			toast.error("Please provide an email !");
		} else {
			const formData = new FormData();
			formData.append("email", emailId);

			const data = { email: emailId };
			var validRegex =
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
			if (emailId.match(validRegex)) {
				setOpenModal(!openModal);

				axiosInstance.post("/auth/add-quote", formData).then((res) => {
					toast.success("You will get message from us soon !!");
				});
			} else {
				toast.error("Please enter a valid email address");
			}
		}
	};
	return (
		<div className="modal-type-container">
			<h1>Drop your email below and we will connect with you automatically</h1>
			<div class="input-container">
				<input
					type="email"
					required=""
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Enter email"
				/>
			</div>
			<button className="modal-submit-button" onClick={(e) => submitQuote(e)}>
				Submit
			</button>
		</div>
	);
};
const ModalTypeImage = ({ img, setOpenModal, openModal }) => {
	const [email, setEmail] = useState("");
	return (
		<div className="modal-type-container">
			<img style={{ height: "100%", width: "100%" }} src={img} />
		</div>
	);
};
export default Modal;
