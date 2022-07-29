import React, { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css"; // ES6
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../Axios/axiosInstance";
import Add from "./Editor/Add";
import "../Admin/ManagePages/ManagePages.css";
import Home from "./Editor/Home";
import "./blogs.css";
export const Blogs = (props) => {
	useEffect(() => {
		setBlogState("view");
	}, []);
	const [content, setContent] = useState("");
	const navigate = useNavigate();
	console.log(content);
	const [blogState, setBlogState] = useState("view");
	const submitBlog = async () => {
		console.log(content);
		await axiosInstance
			.post("blogs/add-blog", content)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};
	return (
		<div>
			<div className="user-btns-wrapper btn-wrap">
				<h1 onClick={(e) => setBlogState("add")}>Add Blog</h1>
				<h1 onClick={(e) => setBlogState("view")}>View Blog</h1>
			</div>
			{blogState == "add" ? <Add /> : <Home />}
		</div>
	);
};
export default Blogs;
