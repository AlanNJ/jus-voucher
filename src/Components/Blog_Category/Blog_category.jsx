import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";
import circle from "../Blog_Category/Blog_category_images/circle.svg";
import line from "../Blog_Category/Blog_category_images/Rectangle 103.png";
import line2 from "../Blog_Category/Blog_category_images/Line 14.png";
import { FaComment } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import "./Blog_page.css";
import { useEffect, useState } from "react";
import axiosInstance from "../../Axios/axiosInstance";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import NewBlog from "../Blogs/NewBlog";

const Blog = () => {
	const params = useParams();

	const [blog, setBlog] = useState();
	const [openComment, setOpenComment] = useState(false);
	const [name, setName] = useState(false);
	const [comment, setComment] = useState(false);
	const [blogComments, setBlogComments] = useState(false);

	useEffect(() => {
		axiosInstance.get(`blogs/get-single-blog/${params.id}`).then((res) => {
			setBlog(res.data.items);
			setBlogComments(res.data.comments);
		});
	}, []);
	const addComment = async (id) => {
		console.log(params.id);
		const data = { name, comment, blog_id: params.id, approved: false };
		axiosInstance
			.post(`blogs/add-comment`, data)
			.then((res) => toast.success("Comment added successfully"));
	};
	const getComments = () => {
		axiosInstance.get("blogs/get-all-comments");
	};
	console.log(comment);
	const likeBlog = async (e, id) => {
		console.log(id);
		axiosInstance.get(`blogs/like-blog/${params.id}`).then((res) => {
			console.log(res.data);
			window.location.reload();
		});
	};
	console.log(blogComments);
	/**<h1>{blog && blog.title}</h1>
			{blog && (
				<div dangerouslySetInnerHTML={{ __html: blog.description }}></div>
			)}
			{blog && blog.information && (
				<div dangerouslySetInnerHTML={{ __html: blog.information }}></div>
			)} */
	return (
		<div className="blog_categories">
			<div className="head_container">
				<div className="line">
					<img src={line2} />
				</div>
				<img src={circle}></img>
				<div className="line">
					<img src={line2} />
				</div>
			</div>
			<NewBlog blog={blog} />

			<br />
			<br />

			<br />
			<Typography className="heart_comment" style={{ cursor: "pointer" }}>
				<BsHeart fontSize="3.5rem" onClick={(e) => likeBlog(blog.id)} />
				<span> {blog ? blog.likes : 0}</span>
				<FaComment
					style={{ fontSize: "3.5rem", paddingLeft: "4rem" }}
					onClick={() => setOpenComment(!openComment)}
				/>{" "}
			</Typography>
			<br />

			{blogComments ? (
				blogComments.map((item) => (
					<div className="comment-container">
						<h1>{item.name}</h1>
						<p>{item.comment}</p>
					</div>
				))
			) : (
				<h1>No Comments</h1>
			)}
			{openComment && blog && (
				<div className="comment-input">
					<h1>Add comment</h1>
					<input placeholder="name" onChange={(e) => setName(e.target.value)} />
					<textarea
						placeholder="comment"
						onChange={(e) => setComment(e.target.value)}
					></textarea>
					<button
						className="comment-button"
						onClick={(e) => addComment(blog.id)}
					>
						Submit
					</button>
				</div>
			)}

			<div className="head_container">
				<div className="line">
					<img src={line2} />
				</div>
				<h2 className="head-section">Categories</h2>
				<div className="line">
					<img src={line2} />
				</div>
			</div>
			<br />
			<div style={{ marginLeft: "4rem" }}>
				<Grid container spacing={2}>
					<Grid item sm={6} xs={12} md={3}>
						<div className="img"></div>
					</Grid>
					<Grid item sm={6} xs={12} md={3}>
						<div className="img2"></div>
					</Grid>
					<Grid item sm={6} xs={12} md={3}>
						<div className="img3"></div>
					</Grid>
					<Grid item sm={6} xs={12} md={3}>
						<div className="img4"></div>
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default Blog;
