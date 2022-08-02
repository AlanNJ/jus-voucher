import React, { useEffect, useState, useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axiosInstance from "../Axios/axiosInstance";
import AdminLayout from "../Components/Admin/AdminLayout/AdminLayout";
import { MdUpdate } from "react-icons/md";
import AddUserForm from "../Components/Admin/Manage Users/add user/AddUserForm";
import ManageUsers from "../Components/Admin/Manage Users/ManageUsers";
import HomePageManager from "../Components/Admin/ManagePages/HomaPageManager/HomePageManager";
import ManagePages from "../Components/Admin/ManagePages/ManagePages";
import SpecialOfferManager from "../Components/Admin/ManagePages/specialOfferManager/SpecialOfferManager";
import TestimonialManager from "../Components/Admin/Testimonials/Testimonials";
import WhyChooseUseManager from "../Components/Admin/ManagePages/WhyChooseUsManager/WhyChooseUseManager";
import NewsLetter from "../Components/Admin/NewsLetter/NewsLetter";
import ReferAndEarn from "../Components/Admin/ReferAndEarn/ReferAndEarn";
import Testimonials from "../Components/Admin/Testimonials/Testimonials";
import PrimaryTable from "../Components/Utils/PrimaryTable/PrimaryTable";
import Blogs from "../Components/Blogss/Blogs";
import Testimonial from "../Components/Admin/Testimonials/Testimonial";
import ContactUs from "../Components/Admin/Contact Us/ContactUs";
import Add from "../Components/Blogss/Editor/Add";
import Editpost from "../Components/Blogss/Editor/Editpost";
import { useNavigate } from "react-router-dom";
import Comments from "../Components/Blogss/Comments";

let userViewHeaders = [
	"SiNo",
	"Email",
	"Password",
	"Approved",
	"Delete",
	"Action",
];

export default function AdminNavigation({ setAdmin }) {
	const [users, setUsers] = useState([]);
	const navigate = useNavigate();
	const location = useLocation();
	const [updateUser, setUpdateUser] = useState(false);
	const updateRow = (id) => {
		axiosInstance.put(`/auth/approve-admin/${id}`);
	};

	useEffect(() => {
		let paths = location.pathname.split("/");
		if (paths.includes("admin-panel")) {
			setAdmin(true);
		} else {
			setAdmin(false);
		}
	}, [location]);
	// useEffect(() => {
	// 	let user = JSON.parse(localStorage.getItem("User"));
	// 	if (user) {
	// 		if (user.approved !== 1) {
	// 			navigate("/");
	// 		}
	// 	}
	// }, []);

	const deleteUser = (id, index) => {
		let isConfirmed = window.confirm("Are you sure to delete the user?");
		if (isConfirmed) {
			axiosInstance
				.delete("/auth/delete-user/" + id)
				.then((res) => {
					toast.success(res.data.message);
					window.location.reload();
				})
				.catch((err) => {
					toast.error("Something went wrong!");
				});
		}
	};
	console.log(users[0]);

	useLayoutEffect(() => {
		axiosInstance
			.get("/auth/get-all-user")
			.then((res) => {
				console.log(res.data);
				setUsers(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	const update = () => {};
	return (
		<Routes>
			<Route path="/admin-panel" element={<AdminLayout />}>
				<Route path="manage-users" element={<ManageUsers />}>
					<Route path="add-user" element={<AddUserForm />} />
					<Route
						path="view-users"
						element={
							<div style={{ display: "flex", flexDirection: "column" }}>
								{updateUser && <AddUserForm update={update} />}
								<>
									{users[0] ? (
										<PrimaryTable
											tableHeader={userViewHeaders}
											tableBody={users}
											deleteCol={true}
											deleteRow={deleteUser}
											updateAdmin={true}
										/>
									) : (
										"No users found"
									)}
								</>
							</div>
						}
					/>
				</Route>
				<Route path="manage-pages" element={<ManagePages />}>
					<Route path="home/:section" element={<HomePageManager />} />
					<Route path="about/:section" element={<WhyChooseUseManager />} />
					<Route
						path="special-offers/:section"
						element={<SpecialOfferManager />}
					/>
				</Route>
				<Route path="blogs" element={<Blogs />}>
					<Route path="add-blog" element={<Add action="add" />} />
					<Route path="edit-blog/:id" element={<Editpost />} />
				</Route>
				<Route path="comments/:id" element={<Comments />} />

				<Route path="edit-post/:id" element={<Add action="update" />} />

				<Route path="testimonials/:section" element={<Testimonials />} />

				<Route path="contact-us" element={<ContactUs />} />
				<Route path="refer-and-earn" element={<ReferAndEarn />} />
			</Route>
		</Routes>
	);
}
