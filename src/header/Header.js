import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
	const [isNavVisible, setNavVisible] = useState(false);
	const navigate = useNavigate();

	const toggleNav = () => {
		setNavVisible(!isNavVisible);
	};

	const navigateTo = (path) => {
		navigate(path);
		setNavVisible(false); // 關閉導航菜單（如果打開）
	};

	return (
		<header className="homeNavBar">
			<div className={`navBarShowOut ${isNavVisible ? "show" : ""}`}>
				<img
					className="closeNavBarShowOut"
					src="https://img.icons8.com/ios-glyphs/60/FFFFFF/delete-sign.png"
					alt="Close"
					onClick={toggleNav}
				/>
				<button onClick={() => navigateTo("/")}>首頁</button>
				<button onClick={() => navigateTo("/reservation")}>預約服務</button>
				<button onClick={() => navigateTo("/shop")}>購物</button>
				<button onClick={() => navigateTo("/health")}>衛教知識</button>
			</div>
			<img
				className="hamburger"
				src="https://img.icons8.com/stamp/32/menu.png"
				alt="menu"
				onClick={toggleNav}
			/>
			<span
				className="navItemLeft"
				id="navHome"
				onClick={() => navigateTo("/")}
			>
				首頁
			</span>
			<span
				className="navItemLeft"
				id="navReserve"
				onClick={() => navigateTo("/reservation")}
			>
				預約服務
			</span>
			<div className="logoBg">
				<div onClick={() => navigateTo("/")}>
					<img
						id="navBarLogo"
						src="../大專素材/logo/螢幕擷取畫面 2024-06-29 164954.png"
						alt="Logo"
					/>
				</div>
			</div>
			<span
				className="navItemRight"
				id="navShop"
				onClick={() => navigateTo("/shop")}
			>
				購物
			</span>
			<span
				className="navItemRight"
				id="navEdu"
				onClick={() => navigateTo("/health")}
			>
				衛教知識
			</span>
			<div className="navIcon">
				<button onClick={() => navigateTo("/user")}>
					<i style={{ color: "black" }} className="fa-regular fa-user"></i>
				</button>
				<button onClick={() => navigateTo("/cart")}>
					<i
						style={{ color: "black" }}
						className="fa-solid fa-cart-shopping"
					></i>
				</button>
			</div>
		</header>
	);
}

export default Header;
