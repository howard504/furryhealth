import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Info from "./info/Info";
import Health from "./info/health/Health";

const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Info />} />
				<Route path="/health" element={<Health />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
