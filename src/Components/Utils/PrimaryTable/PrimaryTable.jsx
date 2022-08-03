import React, { Fragment, useEffect, useState } from "react";
import {
	AiFillDelete,
	AiFillCloseCircle,
	AiFillCheckCircle,
} from "react-icons/ai";
import { MdUpdate, MdTipsAndUpdates } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import axiosInstance from "../../../Axios/axiosInstance";
import Modal from "../../Modal/Modal";
import "./PrimaryTable.css";
import { toast } from "react-toastify";

export default function PrimaryTable({
	tableHeader,
	tableBody,
	deleteCol,
	deleteRow,
	isAction,
	updateRow,
	backendURL,
	testimonialUpdate,
	updateAdmin,
	update
}) {
	const [openModal, setOpenModal] = useState(false);
	const [image, setImage] = useState("");
	const handleTask = async (e, item) => {
		setOpenModal(true);
		updateRow(item.id).then((res) => setImage(res));
	};

	const approveComment = (id, index) => {
		axiosInstance.put(`/products/approve-client-testimonial/${id}`);
	};
	const updateAdminAccess = (id) => {
		axiosInstance.put(`/auth/approve-admin/${id}`).then(() => {
			toast.success("Admin role updated successfully !!");
			setTimeout(() => {
				window.location.reload();
			}, 1500);
		});
	};

	return (
		<>
			{openModal && (
				<Modal
					type={"image"}
					onClick={(e) => setOpenModal(!openModal)}
					openModal={openModal}
					setOpenModal={setOpenModal}
					img={image}
				/>
			)}

			{tableBody && tableBody[0] ? (
				<table className="primary-table" cellPadding={0} cellSpacing={0}>
					<thead>
						<tr>
							{tableHeader.map((item, index) => (
								<th key={index}>{item}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{tableBody.map((item, index) => (
							<tr key={index}>
								{Object.keys(item).map((key, keyIndex) => (
									<td onClick={(e) => handleTask(e, item)}>
										{key === "id" ? index + 1 : item[key]}
									</td>
								))}
								{deleteCol && (
									<td
										className="delete-icon"
										onClick={() => deleteRow(item.id, index)}
									>
										<AiFillDelete />
									</td>
								)}
								{updateRow && (
									<td
										className="delete-icon"
										onClick={() => updateRow(item.id, index)}
									>
										<MdUpdate />
									</td>
								)}
								{updateAdmin && (
									<td
										className="delete-icon"
										onClick={() => updateAdminAccess(item.id, index)}
									>
										<MdUpdate />
									</td>
								)}

								{testimonialUpdate && (
									<td
										className="delete-icon"
										onClick={() => approveComment(item.id)}
									>
										<MdTipsAndUpdates />
									</td>
								)}
								{isAction && (
									<td className="action-wrapper">
										<AiFillCloseCircle className="action-icons" />
										<AiFillCheckCircle className="action-icons" />
									</td>
								)}
							</tr>
						))}
					</tbody>
				</table>
			) : (
				"No data found"
			)}
		</>
	);
}
