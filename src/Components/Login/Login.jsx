import react, { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../Axios/axiosInstance";
import { toast } from "react-toastify";

export default function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const loginUser = (e) => {
		e.preventDefault();
		const data = { email, password };

		if (!email || !password) {
			toast.error("please fill all the fields !!");
		} else {
			if (email !== "admin" && password !== "admin") {
				axiosInstance
					.post("auth/login-user", { email, password })
					.then((res) => {
						localStorage.setItem("User", JSON.stringify(res.data.exist));
						toast.success("Logged in successfully");
						setTimeout(() => {
							navigate("/");
						}, 1500);
					})
					.catch((err) => {
						toast.error("Username or password didnt match");
					});
			}

			// if (email == "admin" && password == "admin") {
			// 	let fis = JSON.parse(localStorage.getItem("User"));

			// 	if (fis.approved === 1) {
			// 		navigate("/admin-panel");
			// 	}
			// }
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
					<h4>Login Account</h4>
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
							<button onClick={(e) => loginUser(e)}>Login</button>{" "}
						</div>
						<p>
							Don’t have an account?{" "}
							<span onClick={() => navigate("/sign-up")}> Sign-up</span>{" "}
						</p>
					</form>
				</div>
			</div>
		</>
	);
}
