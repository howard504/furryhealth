import React, { useState } from "react";
import "./Header.css";

function Header() {
	const [isNavVisible, setNavVisible] = useState(false);

	const toggleNav = () => {
		setNavVisible(!isNavVisible);
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
				<button href="">首頁</button>
				<button href="">預約服務</button>
				<button href="">購物</button>
				<button href="">衛教知識</button>
			</div>
			<img
				className="hamburger"
				src="https://img.icons8.com/stamp/32/menu.png"
				alt="menu"
				onClick={toggleNav}
			/>
			<span className="navItemLeft" id="navHome">
				首頁
			</span>
			<span className="navItemLeft" id="navReserve">
				預約服務
			</span>
			<div className="logoBg">
				<a href="./home.html">
					<div>
						<img
							id="navBarLogo"
							src="../大專素材/logo/螢幕擷取畫面 2024-06-29 164954.png"
							alt="Logo"
						/>
					</div>
				</a>
			</div>
			<span className="navItemRight" id="navShop">
				購物
			</span>
			<span className="navItemRight" id="navEdu">
				衛教知識
			</span>
			<div className="navIcon">
				<button href="#">
					<i style={{ color: "black" }} className="fa-regular fa-user"></i>
				</button>
				<button href="#">
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
