import React, { useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../../../Axios/axiosInstance";
import "./AddUserForm.css";

export default function AddUserForm({ update }) {
	const [formData, setFormData] = useState({ email: "", password: "" });

	const createUser = (event) => {
		event.preventDefault();
		if (formData.email && formData.password) {
			var validRegex =
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
			if (formData.email.match(validRegex)) {
				axiosInstance
					.post("/auth/add-user", formData)
					.then((res) => {
						console.log(res);
						toast.success(res.data.message);
						setTimeout(() => {
							window.location.reload();
						});
					})
					.catch((err) => {
						console.log(err);
						toast.error(err.response.data.message);
					});
			} else {
				toast.error("Please enter a valid email address");
			}
		} else {
			toast.error("All fields are required");
		}
	};

	const handleFilling = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};
	return (
		<form className="add-user-form">
			<label htmlFor="email">Email</label>
			<input
				type="email"
				for="email"
				name="email"
				onChange={handleFilling}
				className="add-user-input"
				required
			/>
			<label htmlFor="email">Password</label>
			<input
				type="password"
				name="password"
				onChange={handleFilling}
				className="add-user-input"
				required
			/>
			{update ? (
				<button onClick={update} className="btn-submit">
					Update User
				</button>
			) : (
				<button onClick={createUser} className="btn-submit">
					Add User
				</button>
			)}
		</form>
	);
}
