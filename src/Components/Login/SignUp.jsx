import React, { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../Axios/axiosInstance";
import { toast } from "react-toastify";

export const SignUp = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const loginUser = (e) => {
		const data = { email, password };
		console.log(data);
		e.preventDefault();
		localStorage.setItem("User", JSON.stringify(data));
		if (email == "admin" && password == "admin") {
			navigate("/admin-panel");
		}
	};
	const addUser = (e) => {
		e.preventDefault();
		if (email == "" || password == "") {
			toast.error("Please fill all the fields");
		} else {
			var validRegex =
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
			if (email.match(validRegex)) {
				axiosInstance
					.post("auth/add-user", { email, password })
					.then((res) => {
						console.log(res.data);
						toast.success("Account Created Successfully");
						setTimeout(() => {
							navigate("/login");
						}, 1500);
					})
					.catch(() => {
						toast.error("Email is already taken !");
					});
			} else {
				toast.error("Please enter a valid email address");
			}
		}
	};
	return (
		<>
			<div className="Login_container">
				<div className="login_left">
					{" "}
					<h3>Jus Voucher</h3>
				</div>
				<div className="login_right">
					<h4>Create Account</h4>
					<form action="">
						<input
							type="text"
							placeholder="EMAIL"
							className="loginname"
							onChange={(e) => setEmail(e.target.value)}
						/>{" "}
						<br />
						<input
							type="text"
							placeholder="PASSWORD"
							className="loginname"
							onChange={(e) => setPassword(e.target.value)}
						/>
						<div className="login_btn">
							{" "}
							<button onClick={(e) => addUser(e)}>Sign-Up</button>{" "}
						</div>
					</form>
				</div>
			</div>
		</>
	);
};
export default SignUp;
