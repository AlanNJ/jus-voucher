import React, { useCallback, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "./TextEditor.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../../../Axios/axiosInstance";

export function Add(props) {
	const params = useParams();
	const [userInfo, setuserInfo] = useState({
		title: "",
		description: "",
		information: "",
	});
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
			if (userInfo.description.length < 5) {
				setError("Required, Add description minimum length 50 characters");
				return;
			}
			axios
				.post(`http://localhost:5000/api/blogs/add-blog`, {
					title: userInfo.title,
					description: userInfo.description,
					information: userInfo.information,
				})
				.then((res) => {
					if (res.data.items === true) {
						history.push("/admin-panel/blogs");
					}
				});
		} catch (error) {
			throw error;
		}
	};
	const updateBlog = (e) => {
		e.preventDefault();
		axiosInstance
			.put(`blogs/update-blog/${params.id}`, userInfo)
			.then((res) => {
				console.log(res);
			});
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
								</div>
								<div className="clearfix"></div>
								<div className="form-group col-md-12 editor">
									<label className="font-weight-bold">
										{" "}
										Description <span className="required"> * </span>{" "}
									</label>
									<EditorToolbar toolbarId={"t1"} />
									<ReactQuill
										theme="snow"
										value={userInfo.description}
										onChange={ondescription}
										placeholder={"Write something awesome..."}
										modules={modules("t1")}
										formats={formats}
									/>
								</div>
								<br />
								<div className="form-group col-md-12 editor">
									<label className="font-weight-bold">
										{" "}
										Additional Information{" "}
									</label>
									<EditorToolbar toolbarId={"t2"} />
									<ReactQuill
										theme="snow"
										value={userInfo.information}
										onChange={oninformation}
										placeholder={"Write something awesome..."}
										modules={modules("t2")}
										formats={formats}
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
