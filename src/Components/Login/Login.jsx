import react, { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const loginUser = (e) => {
		if (email == "admin" && password == "admin") {
			navigate("/admin-panel");
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
							Don’t have an account? <span> Sign-up</span>{" "}
						</p>
					</form>
				</div>
			</div>
		</>
	);
}
