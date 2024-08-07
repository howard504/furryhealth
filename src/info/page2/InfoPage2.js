import React from "react";
import "./InfoPage2.css";

const InfoPage2 = () => {
	return (
		<div className="page" id="page2">
			<video
				autoPlay
				muted={true}
				loop
				src="../大專素材/影片/狗/3045714-sd_640_360_25fps.mp4"
			></video>
			<h2>最新消息</h2>
			<div className="currentCard">
				<img
					id="prev"
					className="control"
					src="https://img.icons8.com/forma-light-filled/96/FFFFFF/circled-chevron-right.png"
					alt="circled-chevron-right"
				/>
				<div className="cards">
					{Array.from({ length: 12 }).map((_, index) => (
						<div className="card" key={index}>
							<img
								alt="最新資訊小卡"
								id="cardImage"
								src="../大專題模擬圖/1719287829-thumbnail.jpeg"
							/>
							<h3 id="cardTitle">【✨台北寵物用品展✨】</h3>
							<span id="cardText">
								📣台北寵物用品展來囉!! ​ 🐱🐶邀請毛孩爸、媽毛們
								一起來逛台北寵物用品展!
							</span>
							<a href="http://localhost:3000/">more</a>
						</div>
					))}
				</div>
				<img
					id="next"
					className="control"
					src="https://img.icons8.com/forma-light-filled/96/FFFFFF/circled-chevron-right.png"
					alt="circled-chevron-right"
				/>
			</div>
			<div id="page2News">
				{Array.from({ length: 10 }).map((_, index) => (
					<div id="newsInfo" key={index}>
						<p id="newsDate">2022.02.18</p>
						<p id="newsText">
							【慈愛海佃分院 停止營業公告】 ​ 親愛的顧客
							感謝您一直以來對慈愛動物醫院 海佃分院的支持與厚愛 ​
							因營運調整慈愛動物醫院海佃分院 ●最後服務日為 2024 年 2 月 27日
							●停止營業日為 2024 年 2 月 28日 對於這造成的不便，我們深表歉意 ​。
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default InfoPage2;
