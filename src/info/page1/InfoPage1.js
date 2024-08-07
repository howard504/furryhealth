import React from "react";
import "./InfoPage1.css";

const InfoPage1 = () => {
	return (
		<div className="page" id="page1">
			<video
				autoPlay
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
						<img
							alt="看診icon"
							src="https://img.icons8.com/ios-filled/100/FFFFFF/calendar--v1.png"
						/>
						<p>看診預約</p>
					</div>
					<hr />
					<div id="homeBeauty">
						<img
							alt="美容icon"
							src="https://img.icons8.com/ios-filled/100/FFFFFF/barber-scissors.png"
						/>
						<p>美容預約</p>
					</div>
					<hr />
					<div id="homeNight">
						<img
							alt="收容icon"
							src="https://img.icons8.com/ios/100/FFFFFF/home-page.png"
						/>
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
					<input type="submit" id="docConfirm" value="確認" />
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
	);
};

export default InfoPage1;
