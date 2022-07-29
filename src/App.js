import "./App.css";
import { useState } from "react";

import Navbar from "./Components/Home/navbar/Navbar";

import Footer from "./Components/Footer/Footer";

import GetQuote from "./Components/GetQuote/GetQuote";

import MainNavigation from "./Navigation/MainNavigation";
import AdminNavigation from "./Navigation/AdminNavigation";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const [isAdmin, setIsAdmin] = useState(false);
	return (
		<>
			<div className="App">
				<Router>
					{!isAdmin && <Navbar />}
					{!isAdmin && <GetQuote />}
					<MainNavigation />
					<AdminNavigation setAdmin={setIsAdmin} />
					<ToastContainer />
					{!isAdmin && <Footer />}
				</Router>
			</div>
		</>
	);
}

export default App;
