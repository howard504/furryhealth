import React from "react";
import "./InfoPage3.css";

const InfoPage3 = () => {
	return (
		<div className="page" id="page3">
			<video
				autoPlay
				muted={true}
				loop
				src="../大專素材/影片/狗/3045714-sd_640_360_25fps.mp4"
			></video>
			<h2 id="page3TopTitle">公益活動</h2>
			<span id="page3TopText">
				寵醫網誠摯邀請您參加我們的流浪貓狗救助活動！無論您身在何處，我們歡迎您成為我們的志工，前往台灣各地的流浪貓狗園區，親身參與救助工作，幫助小動物提供溫暖與愛心。除此之外，您也可以選擇定期捐助口糧，幫助各地的流浪貓狗園區。您的善心捐助將能夠改善牠們的生活條件，給予牠們更好的未來，一起行動，讓這個世界對流浪貓狗更加友善！
			</span>
			<div id="commonPage">
				<div className="common">
					<img
						alt="home"
						className="commonIcon"
						src="https://img.icons8.com/ios-filled/100/FFFFFF/home.png"
					/>
					<p className="commonText">正在幫助的浪浪園區有</p>
					<p className="commonNumber Number1">0</p>
					<button className="commonButton">瞭解更多</button>
				</div>
				<div className="common">
					<img
						alt="money"
						className="commonIcon"
						src="https://img.icons8.com/windows/96/FFFFFF/hand-holding-dollar.png"
					/>
					<p className="commonText">已捐出的貓狗飼料總金額</p>
					<p className="commonNumber Number2">0</p>
					<button className="commonButton">瞭解更多</button>
				</div>
				<div className="common">
					<img
						alt="heavy"
						className="commonIcon"
						src="https://img.icons8.com/sf-regular/96/FFFFFF/like.png"
					/>
					<p className="commonText">已捐出的貓狗飼料總重</p>
					<p className="commonNumber Number3">0</p>
					<button className="commonButton">瞭解更多</button>
				</div>
				<div className="common">
					<img
						alt="howmany"
						className="commonIcon"
						src="https://img.icons8.com/ios/100/FFFFFF/dog--v1.png"
					/>
					<p className="commonText">正在受惠的貓狗總數</p>
					<p className="commonNumber Number4">0</p>
					<button className="commonButton">瞭解更多</button>
				</div>
			</div>
		</div>
	);
};

export default InfoPage3;
