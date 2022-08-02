import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import line from "../Blogs/blog-image/image 24.png";
import line2 from "../Blogs/blog-image/image 24 (1).png";
import line3 from "../Blogs/blog-image/image 25.png";
import line4 from "../Blogs/blog-image/image 26.png";
import { FaComment } from "react-icons/fa";
import "./Blog.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../Axios/axiosInstance";
import TestBlog from "./TestBlog";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
	const [blogs, setBlogs] = useState();
	const navigate = useNavigate();
	useEffect(() => {
		axiosInstance
			.get("blogs/get-all-blog")
			.then((res) => setBlogs(res.data.items));
	}, []);
	const viewBlog = (e, id) => {
		e.preventDefault();
		console.log(id);
		navigate(`/blog_category/${id}`);
	};

	return (
		<div className="Blogs_container">
			<Grid container spacing={4}>
				{blogs &&
					blogs.map((item) => (
						<>
							<Grid item sm={6} xs={12} md={3}>
								<Card>
									<CardMedia
										component="img"
										image={`http://localhost:5000/BlogImages/${item.blog_image}`}
										alt="green iguana"
										height="460rem"
									/>
								</Card>
							</Grid>

							<Grid item sm={6} xs={12} md={3}>
								{/* <IconButton className="circle"><img src={circle}></img></IconButton> */}
								<div className="card">
									<h2 className="Blog_heading">{item.title}</h2>

									<Typography className="icon">
										<FaComment />
									</Typography>

									<br />

									<Button
										style={{ backgroundColor: "#FA7D29" }}
										variant="contained"
										onClick={(e) => viewBlog(e, item.id)}
									>
										Read More
									</Button>
								</div>
							</Grid>
						</>
					))}
			</Grid>
		</div>
	);
};

export default Blogs;
