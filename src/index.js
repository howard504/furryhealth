import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header/Header";
import Info from "./info/Info"; // 确保正确导入 Info 组件
import Footer from "./footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Header />
		<Info />
		<Footer />
	</React.StrictMode>
);
