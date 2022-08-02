import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../../../Axios/axiosInstance";
import { toast } from "react-toastify";
import "./home.css";

function Home() {
	const navigate = useNavigate();
	const location = useState();
	useEffect(() => {
		viewPost();
	}, []);

	const [ispost, setpost] = useState([]);
	const viewPost = async () => {
		try {
			await axios
				.get(`http://localhost:5000/api/blogs/get-all-blog`)
				.then((res) => {
					console.log(res.data.items);
					if (res.data.success === true) {
						setpost(res.data.items);
					}
				});
		} catch (error) {
			throw error;
		}
	};
	const deleteBlog = (id) => {
		axiosInstance.delete(`blogs/delete-blog/${id}`).then((res) => {
			console.log(res);
			toast.success("Item Deleted Successfully");
			setTimeout(() => {
				window.location.reload();
			}, [1500]);
		});
	};

	return (
		<div className="App">
			<div className="containe">
				<div className="row">
					<h1 className="App__tittle"></h1>

					{ispost.map((item, index) => (
						<div className="blog-comment">
							{" "}
							<div className="flex">
								<div className="post__list" key={index}>
									<h2>{item.title}</h2>

									<div
										className="post__description"
										dangerouslySetInnerHTML={{ __html: item.description }}
									/>
									<div
										className="post__description"
										dangerouslySetInnerHTML={{ __html: item.information }}
									/>
								</div>
								<Link
									to={`/admin-panel/edit-post/${item.id}`}
									className="btnn btn__theme"
								>
									{" "}
									Edit{" "}
								</Link>
								<button
									className="btnn btn__theme"
									style={{ marginLeft: "1rem" }}
									onClick={() => deleteBlog(item.id)}
								>
									Delete
								</button>

								<button
									onClick={() => navigate(`/admin-panel/comments/${item.id}`)}
									className="btnn btn__theme"
									style={{ marginLeft: "1rem" }}
								>
									Comments
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Home;
