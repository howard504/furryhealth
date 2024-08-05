import React, { useEffect, useRef } from "react";
import "./Footer.css";

function Footer() {
	const footerHandles = useRef(null);

	useEffect(() => {
		footerHandles.current = document.querySelectorAll(".footer");

		const handleClick = (event) => {
			const footer = event.currentTarget.closest(".footer");
			footer.classList.toggle("footer-expanded");
		};

		footerHandles.current.forEach((handle) => {
			handle.addEventListener("click", handleClick);
		});

		// 清理函數，在組件卸載時移除事件監聽器
		return () => {
			footerHandles.current.forEach((handle) => {
				handle.removeEventListener("click", handleClick);
			});
		};
	}, []);

	return (
		<div className="footer">
			<div className="footerIcon">
				<img
					src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/96/FFFFFF/external-instagram-social-media-tanah-basah-basic-outline-tanah-basah.png"
					alt="Instagram"
				/>
				<img
					src="https://img.icons8.com/ios/100/FFFFFF/line-me.png"
					alt="Line"
				/>
				<img
					src="https://img.icons8.com/ios-filled/100/FFFFFF/twitterx--v2.png"
					alt="Twitter"
				/>
			</div>
			<div id="buttonMoveUp">
				<img
					src="https://img.icons8.com/ios-filled/100/FFFFFF/up--v1.png"
					alt="Up"
				/>
				<p>see more</p>
				<span>地址:台中市公益路 二段 338號 8樓之8</span>
				<span>連絡電話 : 04-2278-5847</span>
				<span>隱私權政策</span>
				<hr />
				<span>Copy right©2024 Furry Health寵醫網</span>
			</div>
		</div>
	);
}

export default Footer;
