import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../Axios/axiosInstance";
import "./comments.css";
import { MdAddBox } from "react-icons/md";
import { toast } from "react-toastify";

export const Comments = () => {
	const params = useParams();

	const [approvedComments, setApprovedComments] = useState();
	const [unapprovedComments, setUnApprovedComments] = useState();
	useEffect(() => {
		axiosInstance.get(`/blogs/get-blog-comments/${params.id}`).then((res) => {
			console.log(res.data);
			setApprovedComments(res.data.approvedComments);
			setUnApprovedComments(res.data.unapprovedComments);
		});
	}, []);
	const approve = async (id) => {
		axiosInstance.put(`/blogs/approve-comment/${id}`).then((res) => {
			console.log(res.data);
			toast.success("Comment Approved Successfully");
			setTimeout(() => {
				window.location.reload();
			}, 1500);
		});
	};
	return (
		<div className="comment-main">
			<div>
				<h1>Approved</h1>
				{approvedComments &&
					approvedComments.map((item) => (
						<div key={item.id} className="comment-container">
							<h1>{item.name}</h1>
							<p>{item.comment}</p>
						</div>
					))}
			</div>
			<div>
				<h1>UnApproved</h1>
				{unapprovedComments &&
					unapprovedComments.map((item) => (
						<div key={item.id} className="comment-container">
							<MdAddBox
								style={{
									position: "relative",
									left: "97%",
									top: "-10%",
									transform: "Scale(2)",
								}}
								onClick={(e) => approve(item.id)}
							/>
							<h1>{item.name}</h1>
							<p>{item.comment}</p>
						</div>
					))}
			</div>
		</div>
	);
};
export default Comments;
