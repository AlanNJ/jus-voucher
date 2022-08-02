import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../Components/Home/home/Home";
import Blogs from "../Components/Blogs/Blogs";

import Contact from "../Components/Contact/Contact";

import Health_Plus_Card from "../Components/Voucher/Health_Plus_Card";

import About_Hompage from "../Components/About_Us_Page/About_Hompage";
import DigitalMarketingPage from "../Components/DigitalMarketing/DigitalMarketingPage";

import Collaborating from "../Components/Collaborating/Collaborating";
import Blog_category from "../Components/Blog_Category/Blog_category";
import Login from "../Components/Login/Login";
import SignUp from "../Components/Login/SignUp";
import NewBlog from "../Components/Blogs/NewBlog";

export const MainNavigation = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/Blogs" element={<Blogs />}></Route>
			<Route path="/contact" element={<Contact />}></Route>
			<Route path="/about" element={<About_Hompage />}></Route>
			<Route path="/health" element={<Health_Plus_Card />}></Route>
			<Route path="/digital" element={<DigitalMarketingPage />}></Route>
			<Route path="/collaborating" element={<Collaborating />}></Route>
			<Route path="/blog_category/:id" element={<Blog_category />}></Route>
			<Route path="/login" element={<Login />}></Route>
			<Route path="/sign-up" element={<SignUp />}></Route>
		</Routes>
	);
};
export default MainNavigation;
