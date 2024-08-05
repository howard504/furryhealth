import React from "react";
import "./InfoPage1.css";
import "./InfoPage2.css";
import "./InfoPage3.css";

function Info() {
	return (
		<body>
			<div class="dots-nav">
				<span class="dot" data-page="1"></span>
				<span class="dot" data-page="2"></span>
				<span class="dot" data-page="3"></span>
			</div>
			<div class="container">
				<div class="page" id="page1">
					<video
						autoplay
						muted
						loop
						src="../大專素材/影片/狗/3045714-sd_640_360_25fps.mp4"
					></video>
					<div className="sectionText">
						<h2>關於我們</h2>
						<span>
							歡迎來到寵醫網，我們致力於整合本地寵物醫院。我們與超過50家在地寵物醫院合作
							，提供多項服務，包括預約手術和寵物看診。使用者可以查找距離最近的寵物醫院並立即預約。
							此外，我們還提供寵物美容和夜間收容等其他服務，以滿足您和您的寵物的各種需求。
						</span>
					</div>
					<div className="homeSelect">
						<div className="selectTop">
							<div id="homeDoc">
								<img src="https://img.icons8.com/ios-filled/100/FFFFFF/calendar--v1.png" />
								<p>看診預約</p>
							</div>
							<hr />
							<div id="homeBeauty">
								<img src="https://img.icons8.com/ios-filled/100/FFFFFF/barber-scissors.png" />
								<p>美容預約</p>
							</div>
							<hr />
							<div id="homeNight">
								<img src="https://img.icons8.com/ios/100/FFFFFF/home-page.png" />
								<p>收容預約</p>
							</div>
						</div>
						<div className="selectBottom docSelectBottom">
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
						<div className="selectBottom beautySelectBottom">
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
						<div className="selectBottom nightSelectBottom">
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
				</div>
				<div className="page" id="page2">
					<video
						autoplay
						muted
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
							<div className="card">
								<img
									id="cardImage"
									src="../大專題模擬圖/1719287829-thumbnail.jpeg"
								/>
								<h3 id="cardTitle">【✨台北寵物用品展✨】</h3>
								<span id="cardText">
									📣台北寵物用品展來囉!! ​ 🐱🐶邀請毛孩爸、媽毛們
									一起來逛台北寵物用品展!
								</span>
								<a href="#">more</a>
							</div>
						</div>
						<img
							id="next"
							className="control"
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
						autoplay
						muted
						loop
						src="../大專素材/影片/狗/3045714-sd_640_360_25fps.mp4"
					></video>
					<h2 id="page3TopTitle">公益活動</h2>
					<span id="page3TopText">
						寵醫網誠摯邀請您參加我們的流浪貓狗救助活動！無論您身在何處，我們歡迎您成為我們的志工，前往台灣各地的流浪貓狗園區，親身參與救助工作，幫助小動物提供溫暖與愛心。
						除此之外，您也可以選擇定期捐助口糧，幫助各地的流浪貓狗園區。您的善心捐助將能夠改善牠們的生活條件，給予牠們更好的未來，一起行動，讓這個世界對流浪貓狗更加友善！
					</span>
					<div id="commonPage">
						<div className="common">
							<img
								className="commonIcon"
								src="https://img.icons8.com/ios-filled/100/FFFFFF/home.png"
							/>
							<p className="commonText">正在幫助的浪浪園區有</p>
							<div class="unit">
								<p class="commonNumber Number1">0</p>
								<p>個</p>
							</div>

							<button class="commonButton">瞭解更多</button>
						</div>
						<div class="common">
							<img
								class="commonIcon"
								src="https://img.icons8.com/windows/96/FFFFFF/hand-holding-dollar.png"
							/>
							<p class="commonText">已捐出貓狗飼料總金額</p>
							<div class="unit">
								<p class="commonNumber Number2">0</p>
								<p>元</p>
							</div>
							<button class="commonButton">瞭解更多</button>
						</div>
						<div class="common">
							<img
								class="commonIcon"
								src="https://img.icons8.com/sf-regular/96/FFFFFF/like.png"
							/>
							<p class="commonText">已捐出的貓狗飼料總重</p>
							<div class="unit">
								<p class="commonNumber Number3">0</p>
								<p>kg</p>
							</div>
							<button class="commonButton">瞭解更多</button>
						</div>
						<div class="common">
							<img
								class="commonIcon"
								src="https://img.icons8.com/ios/100/FFFFFF/dog--v1.png"
							/>
							<p class="commonText">正在受惠的貓狗總數</p>
							<div class="unit">
								<p class="commonNumber Number4">0</p>
								<p>隻</p>
							</div>
							<button class="commonButton">瞭解更多</button>
						</div>
					</div>
				</div>
			</div>

			<script
				src="https://kit.fontawesome.com/a89a722df2.js"
				crossorigin="anonymous"
			></script>
			<script src="./homePage1.js"></script>
			<script src="../header/header.js"></script>
		</body>
	);
}

export default Info;
