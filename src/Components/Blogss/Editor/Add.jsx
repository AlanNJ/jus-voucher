import React, { useCallback, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "./TextEditor.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../../../Axios/axiosInstance";
import ImageUploader from "../../Utils/ImageUploader/ImageUploader";
import { toast } from "react-toastify";

export function Add(props) {
	const params = useParams();
	const [userInfo, setuserInfo] = useState({
		title: "",
		description: "",
		information: "",
	});
	const [blogImage, setBlogImage] = useState();
	useEffect(() => {
		if (props.action == "update") {
			axiosInstance.get(`blogs/get-single-blog/${params.id}`).then((res) => {
				console.log(res.data.items);
				setuserInfo({
					...userInfo,
					title: res.data.items.title,
					description: res.data.items.description,
					information: res.data.items.information,
				});
			});
		}
	}, []);

	console.log(params.id);
	let history = useNavigate();

	const onChangeValue = (e) => {
		setuserInfo({
			...userInfo,
			[e.target.name]: e.target.value,
		});
	};
	const ondescription = (value) => {
		setuserInfo({ ...userInfo, description: value });
	};
	const oninformation = (value) => {
		setuserInfo({ ...userInfo, information: value });
	};
	const [isError, setError] = useState(null);
	const addDetails = async (event) => {
		try {
			event.preventDefault();
			event.persist();
			if (!blogImage || !userInfo.title || !userInfo.description) {
				toast.error("Please fill all the fields");
			} else {
				let formData = new FormData();
				formData.append("img", blogImage);
				formData.append("title", userInfo.title);
				formData.append("description", userInfo.description);
				formData.append("information", userInfo.information);
				console.log([...formData]);
				axios
					.post(`http://localhost:5000/api/blogs/add-blog`, formData)
					.then((res) => {
						if (res.data) {
							toast.success("Blog added successfully");
							setTimeout(() => {
								window.location.reload();
							}, 1500);
						}
					});
			}
		} catch (error) {
			throw error;
		}
	};
	console.log(userInfo);
	const updateBlog = (e) => {
		e.preventDefault();
		if (!blogImage || !userInfo.title) {
			toast.error("Please fill all the fields");
		} else {
			let formData = new FormData();
			formData.append("img", blogImage);
			formData.append("title", userInfo.title);
			formData.append("description", userInfo.description);
			formData.append("information", userInfo.information);
			e.preventDefault();
			axiosInstance
				.put(`blogs/update-blog/${params.id}`, formData)
				.then((res) => {
					console.log(res);
					toast.success("Blog updated successfully");
				});
		}
	};

	return (
		<>
			<div className="App">
				<div className="container">
					<div className="row">
						<form className="update__forms">
							<h3 className="myaccount-content"> Add </h3>
							<div className="form-row">
								<div className="form-group col-md-12">
									<label className="font-weight-bold">
										{" "}
										Title <span className="required"> * </span>{" "}
									</label>
									<input
										type="text"
										name="title"
										value={userInfo.title}
										onChange={onChangeValue}
										className="form-control"
										placeholder={userInfo.title}
										required
									/>
									<div className="input-wrapper">
										<label htmlFor="">Main Blog Banner Image</label>
										<ImageUploader
											name="HOME_IMAGE_1"
											passImage={setBlogImage}
											isFileAvailable={blogImage ? true : false}
										/>
									</div>
								</div>
								<div className="clearfix"></div>
								<div className="form-group col-md-12 editor">
									<label className="font-weight-bold">
										{" "}
										Description <span className="required"> * </span>{" "}
									</label>

									<ReactQuill
										theme="snow"
										value={userInfo.description}
										onChange={ondescription}
										placeholder={"Write something awesome..."}
									/>
								</div>
								<br />
								<div className="form-group col-md-12 editor">
									<label className="font-weight-bold">
										{" "}
										Additional Information{" "}
									</label>

									<ReactQuill
										theme="snow"
										value={userInfo.information}
										onChange={oninformation}
										placeholder={"Write something awesome..."}
									/>
								</div>
								<br />
								{isError !== null && <div className="errors"> {isError} </div>}
								<div className="form-group col-sm-12 text-right">
									{props.action == "update" ? (
										<button
											type="submit"
											className="btn btn__theme"
											onClick={(e) => updateBlog(e)}
										>
											{" "}
											{}
											update{" "}
										</button>
									) : (
										<button
											type="submit"
											className="btn btn__theme"
											onClick={addDetails}
										>
											{" "}
											{}
											Submit{" "}
										</button>
									)}
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
export default Add;
