import React, { useState, useEffect, useRef } from "react";
import "./InfoPage1.css";
import "./InfoPage2.css";
import "./InfoPage3.css";

function Info() {
	const [currentPage, setCurrentPage] = useState(1);
	const containerRef = useRef(null);
	const scrolling = useRef(false);
	// ========================================= 頁面轉換
	useEffect(() => {
		const container = containerRef.current;

		const onWheel = (e) => {
			e.preventDefault();
			if (!scrolling.current) {
				const threshold = 50;
				if (Math.abs(e.deltaY) > threshold) {
					scrolling.current = true;
					const direction = e.deltaY > 0 ? 1 : -1;
					const newPage = Math.max(1, Math.min(3, currentPage + direction));
					setCurrentPage(newPage);
					container.children[newPage - 1].scrollIntoView({
						behavior: "smooth",
					});
					setTimeout(() => {
						scrolling.current = false;
					}, 1000); // 調整這個值以匹配你的過渡效果持續時間
				}
			}
		};

		if (container) {
			container.addEventListener("wheel", onWheel, { passive: false });
		}

		return () => {
			if (container) {
				container.removeEventListener("wheel", onWheel);
			}
		};
	}, [currentPage]);

	const handleDotClick = (pageNum) => {
		setCurrentPage(pageNum);
		containerRef.current.children[pageNum - 1].scrollIntoView({
			behavior: "smooth",
		});
	};
	const [activeSection, setActiveSection] = useState("homeDoc");

	const handleButtonClick = (section) => {
		setActiveSection(section);
	};
	// ========================================= page 2 crad js

	// ================================================== page2 info js
	useEffect(() => {
		const newsContainer = document.getElementById("page2News");

		const onNewsWheel = (e) => {
			const isAtTop = newsContainer.scrollTop === 0;
			const isAtBottom =
				newsContainer.scrollHeight - newsContainer.scrollTop ===
				newsContainer.clientHeight;

			// 如果不在頂部或底部，阻止事件冒泡，允許 news 區域自由滾動
			if (!(isAtTop && e.deltaY < 0) && !(isAtBottom && e.deltaY > 0)) {
				e.stopPropagation();
			}
		};

		if (newsContainer) {
			newsContainer.addEventListener("wheel", onNewsWheel);
		}

		return () => {
			if (newsContainer) {
				newsContainer.removeEventListener("wheel", onNewsWheel);
			}
		};
	}, []);
	return (
		<div>
			<div className="dots-nav">
				{[1, 2, 3].map((pageNum) => (
					<span
						key={pageNum}
						className={`dot ${currentPage === pageNum ? "active" : ""}`}
						data-page={pageNum}
						onClick={() => handleDotClick(pageNum)}
					></span>
				))}
			</div>
			<div className="container" ref={containerRef}>
				<div className="page" id="page1">
					<video
						autoPlay
						muted={true}
						loop
						src="../大專素材/影片/狗/3045714-sd_640_360_25fps.mp4"
					></video>
					<div class="sectionText">
						<h2>關於我們</h2>
						<span>
							歡迎來到寵醫網，我們致力於整合本地寵物醫院。我們與超過50家在地寵物醫院合作
							，提供多項服務，包括預約手術和寵物看診。使用者可以查找距離最近的寵物醫院並立即預約。
							此外，我們還提供寵物美容和夜間收容等其他服務，以滿足您和您的寵物的各種需求。
						</span>
					</div>
					<div className="homeSelect">
						<div className="selectTop">
							<div
								id="homeDoc"
								className={activeSection === "homeDoc" ? "changeColor" : ""}
								onClick={() => handleButtonClick("homeDoc")}
							>
								<img
									alt="看診icon"
									src="https://img.icons8.com/ios-filled/100/FFFFFF/calendar--v1.png"
								/>
								<p>看診預約</p>
							</div>
							<hr />
							<div
								id="homeBeauty"
								className={activeSection === "homeBeauty" ? "changeColor" : ""}
								onClick={() => handleButtonClick("homeBeauty")}
							>
								<img
									alt="美容icon"
									src="https://img.icons8.com/ios-filled/100/FFFFFF/barber-scissors.png"
								/>
								<p>美容預約</p>
							</div>
							<hr />
							<div
								id="homeNight"
								className={activeSection === "homeNight" ? "changeColor" : ""}
								onClick={() => handleButtonClick("homeNight")}
							>
								<img
									alt="收容icon"
									src="https://img.icons8.com/ios/100/FFFFFF/home-page.png"
								/>
								<p>收容預約</p>
							</div>
						</div>
						<div
							className="selectBottom docSelectBottom"
							style={{ display: activeSection === "homeDoc" ? "flex" : "none" }}
						>
							<input id="docDate" type="date" />
							<select name="docLocation" id="docLocation">
								<option value="選擇地區">選擇地區</option>
								<option>台北</option>
								<option>新北</option>
								<option>桃園</option>
								<option>新竹</option>
								<option>苗栗</option>
								<option>台中</option>
								<option>彰化</option>
								<option>南投</option>
								<option>雲林</option>
								<option>嘉義</option>
								<option>台南</option>
								<option>屏東</option>
								<option>高雄</option>
							</select>
							<select name="docSubject" id="docSubject">
								<option value="選擇專科">選擇專科</option>
							</select>
							<input
								type="submit"
								id="docConfirm"
								value="確認"
								src="./docSelector/docSelector.html"
							/>
						</div>
						<div
							className="selectBottom beautySelectBottom"
							style={{
								display: activeSection === "homeBeauty" ? "flex" : "none",
							}}
						>
							<input id="beautyDate" type="date" />
							<select name="beautyLocation" id="beautyLocation">
								<option value="選擇地區">選擇地區</option>
								<option>台北</option>
								<option>新北</option>
								<option>桃園</option>
								<option>新竹</option>
								<option>苗栗</option>
								<option>台中</option>
								<option>彰化</option>
								<option>南投</option>
								<option>雲林</option>
								<option>嘉義</option>
								<option>台南</option>
								<option>屏東</option>
								<option>高雄</option>
							</select>
							<input type="submit" id="beautyConfirm" value="確認" />
						</div>
						<div
							className="selectBottom nightSelectBottom"
							style={{
								display: activeSection === "homeNight" ? "flex" : "none",
							}}
						>
							<input id="nightDate" type="date" />
							<select name="nightLocation" id="nightLocation">
								<option value="選擇地區">選擇地區</option>
								<option>台北</option>
								<option>新北</option>
								<option>桃園</option>
								<option>新竹</option>
								<option>苗栗</option>
								<option>台中</option>
								<option>彰化</option>
								<option>南投</option>
								<option>雲林</option>
								<option>嘉義</option>
								<option>台南</option>
								<option>屏東</option>
								<option>高雄</option>
							</select>
							<input type="submit" id="nightConfirm" value="確認" />
						</div>
					</div>
					)
				</div>
				<div className="page" id="page2">
					<video
						autoPlay
						muted={true}
						loop
						src="../大專素材/影片/狗/3045714-sd_640_360_25fps.mp4"
					></video>
					<h2>最新消息</h2>
					<div class="currentCard">
						<img
							id="prev"
							class="control"
							src="https://img.icons8.com/forma-light-filled/96/FFFFFF/circled-chevron-right.png"
							alt="circled-chevron-right"
						/>
						<div class="cards">
							<div class="card">
								<img
									alt="最新消息圖片"
									id="cardImage"
									src="../大專題模擬圖/1719287829-thumbnail.jpeg"
								/>
								<h3 id="cardTitle">【✨台北寵物用品展✨】</h3>
								<span id="cardText">
									📣台北寵物用品展來囉!! ​ 🐱🐶邀請毛孩爸、媽毛們
									一起來逛台北寵物用品展!
								</span>
								<a href="http://localhost:3000/home.html">more</a>
							</div>
							<div class="card">
								<img
									alt="最新消息圖片"
									id="cardImage"
									src="../大專題模擬圖/1719287829-thumbnail.jpeg"
								/>
								<h3 id="cardTitle">【✨台北寵物用品展✨】</h3>
								<span id="cardText">
									📣台北寵物用品展來囉!! ​ 🐱🐶邀請毛孩爸、媽毛們
									一起來逛台北寵物用品展!
								</span>
								<a href="http://localhost:3000/home.html">more</a>
							</div>
							<div class="card">
								<img
									alt="最新消息圖片"
									id="cardImage"
									src="../大專題模擬圖/1719287829-thumbnail.jpeg"
								/>
								<h3 id="cardTitle">【✨台北寵物用品展✨】</h3>
								<span id="cardText">
									📣台北寵物用品展來囉!! ​ 🐱🐶邀請毛孩爸、媽毛們
									一起來逛台北寵物用品展!
								</span>
								<a href="http://localhost:3000/home.html">more</a>
							</div>
							<div class="card">
								<img
									alt="最新消息圖片"
									id="cardImage"
									src="../大專題模擬圖/1719287829-thumbnail.jpeg"
								/>
								<h3 id="cardTitle">【✨台北寵物用品展✨】</h3>
								<span id="cardText">
									📣台北寵物用品展來囉!! ​ 🐱🐶邀請毛孩爸、媽毛們
									一起來逛台北寵物用品展!
								</span>
								<a href="http://localhost:3000/home.html">more</a>
							</div>
							<div class="card">
								<img
									alt="最新消息圖片"
									id="cardImage"
									src="../大專題模擬圖/1719287829-thumbnail.jpeg"
								/>
								<h3 id="cardTitle">【✨台北寵物用品展✨】</h3>
								<span id="cardText">
									📣台北寵物用品展來囉!! ​ 🐱🐶邀請毛孩爸、媽毛們
									一起來逛台北寵物用品展!
								</span>
								<a href="http://localhost:3000/home.html">more</a>
							</div>
							<div class="card">
								<img
									alt="最新消息圖片"
									id="cardImage"
									src="../大專題模擬圖/1719287829-thumbnail.jpeg"
								/>
								<h3 id="cardTitle">【✨台北寵物用品展✨】</h3>
								<span id="cardText">
									📣台北寵物用品展來囉!! ​ 🐱🐶邀請毛孩爸、媽毛們
									一起來逛台北寵物用品展!
								</span>
								<a href="http://localhost:3000/home.html">more</a>
							</div>
							<div class="card">
								<img
									alt="最新消息圖片"
									id="cardImage"
									src="../大專題模擬圖/1719287829-thumbnail.jpeg"
								/>
								<h3 id="cardTitle">【✨台北寵物用品展✨】</h3>
								<span id="cardText">
									📣台北寵物用品展來囉!! ​ 🐱🐶邀請毛孩爸、媽毛們
									一起來逛台北寵物用品展!
								</span>
								<a href="http://localhost:3000/home.html">more</a>
							</div>
							<div class="card">
								<img
									alt="最新消息圖片"
									id="cardImage"
									src="../大專題模擬圖/1719287829-thumbnail.jpeg"
								/>
								<h3 id="cardTitle">【✨台北寵物用品展✨】</h3>
								<span id="cardText">
									📣台北寵物用品展來囉!! ​ 🐱🐶邀請毛孩爸、媽毛們
									一起來逛台北寵物用品展!
								</span>
								<a href="http://localhost:3000/home.html">more</a>
							</div>
							<div class="card">
								<img
									alt="最新消息圖片"
									id="cardImage"
									src="../大專題模擬圖/1719287829-thumbnail.jpeg"
								/>
								<h3 id="cardTitle">【✨台北寵物用品展✨】</h3>
								<span id="cardText">
									📣台北寵物用品展來囉!! ​ 🐱🐶邀請毛孩爸、媽毛們
									一起來逛台北寵物用品展!
								</span>
								<a href="http://localhost:3000/home.html">more</a>
							</div>
						</div>

						<img
							id="next"
							class="control"
							src="https://img.icons8.com/forma-light-filled/96/FFFFFF/circled-chevron-right.png"
							alt="circled-chevron-right"
						/>
					</div>
					<div id="page2News">
						<div id="newsInfo">
							<p id="newsDate">2022.02.18</p>
							<p id="newsText">
								【慈愛海佃分院 停止營業公告】 ​ 親愛的顧客
								感謝您一直以來對慈愛動物醫院 海佃分院的支持與厚愛 ​
								因營運調整慈愛動物醫院海佃分院 ●最後服務日為 2024 年 2 月 27日
								●停止營業日為 2024 年 2 月 28日 對於這造成的不便，我們深表歉意
								​。
							</p>
						</div>
						<div id="newsInfo">
							<p id="newsDate">2022.02.18</p>
							<p id="newsText">
								【慈愛海佃分院 停止營業公告】 ​ 親愛的顧客
								感謝您一直以來對慈愛動物醫院 海佃分院的支持與厚愛 ​
								因營運調整慈愛動物醫院海佃分院 ●最後服務日為 2024 年 2 月 27日
								●停止營業日為 2024 年 2 月 28日 對於這造成的不便，我們深表歉意
								​。
							</p>
						</div>
						<div id="newsInfo">
							<p id="newsDate">2022.02.18</p>
							<p id="newsText">
								【慈愛海佃分院 停止營業公告】 ​ 親愛的顧客
								感謝您一直以來對慈愛動物醫院 海佃分院的支持與厚愛 ​
								因營運調整慈愛動物醫院海佃分院 ●最後服務日為 2024 年 2 月 27日
								●停止營業日為 2024 年 2 月 28日 對於這造成的不便，我們深表歉意
								​。
							</p>
						</div>
						<div id="newsInfo">
							<p id="newsDate">2022.02.18</p>
							<p id="newsText">
								【慈愛海佃分院 停止營業公告】 ​ 親愛的顧客
								感謝您一直以來對慈愛動物醫院 海佃分院的支持與厚愛 ​
								因營運調整慈愛動物醫院海佃分院 ●最後服務日為 2024 年 2 月 27日
								●停止營業日為 2024 年 2 月 28日 對於這造成的不便，我們深表歉意
								​。
							</p>
						</div>
						<div id="newsInfo">
							<p id="newsDate">2022.02.18</p>
							<p id="newsText">
								【慈愛海佃分院 停止營業公告】 ​ 親愛的顧客
								感謝您一直以來對慈愛動物醫院 海佃分院的支持與厚愛 ​
								因營運調整慈愛動物醫院海佃分院 ●最後服務日為 2024 年 2 月 27日
								●停止營業日為 2024 年 2 月 28日 對於這造成的不便，我們深表歉意
								​。
							</p>
						</div>
						<div id="newsInfo">
							<p id="newsDate">2022.02.18</p>
							<p id="newsText">
								【慈愛海佃分院 停止營業公告】 ​ 親愛的顧客
								感謝您一直以來對慈愛動物醫院 海佃分院的支持與厚愛 ​
								因營運調整慈愛動物醫院海佃分院 ●最後服務日為 2024 年 2 月 27日
								●停止營業日為 2024 年 2 月 28日 對於這造成的不便，我們深表歉意
								​。
							</p>
						</div>
						<div id="newsInfo">
							<p id="newsDate">2022.02.18</p>
							<p id="newsText">
								【慈愛海佃分院 停止營業公告】 ​ 親愛的顧客
								感謝您一直以來對慈愛動物醫院 海佃分院的支持與厚愛 ​
								因營運調整慈愛動物醫院海佃分院 ●最後服務日為 2024 年 2 月 27日
								●停止營業日為 2024 年 2 月 28日 對於這造成的不便，我們深表歉意
								​。
							</p>
						</div>
						<div id="newsInfo">
							<p id="newsDate">2022.02.18</p>
							<p id="newsText">
								【慈愛海佃分院 停止營業公告】 ​ 親愛的顧客
								感謝您一直以來對慈愛動物醫院 海佃分院的支持與厚愛 ​
								因營運調整慈愛動物醫院海佃分院 ●最後服務日為 2024 年 2 月 27日
								●停止營業日為 2024 年 2 月 28日 對於這造成的不便，我們深表歉意
								​。
							</p>
						</div>
						<div id="newsInfo">
							<p id="newsDate">2022.02.18</p>
							<p id="newsText">
								【慈愛海佃分院 停止營業公告】 ​ 親愛的顧客
								感謝您一直以來對慈愛動物醫院 海佃分院的支持與厚愛 ​
								因營運調整慈愛動物醫院海佃分院 ●最後服務日為 2024 年 2 月 27日
								●停止營業日為 2024 年 2 月 28日 對於這造成的不便，我們深表歉意
								​。
							</p>
						</div>
					</div>
				</div>
				<div className="page" id="page3">
					<video
						autoPlay
						muted={true}
						loop
						src="../大專素材/影片/狗/3045714-sd_640_360_25fps.mp4"
					></video>
				</div>
			</div>
		</div>
	);
}

export default Info;
