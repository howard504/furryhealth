import React, { useEffect } from "react";
import "./InfoPage1.css";
import "./InfoPage2.css";
import "./InfoPage3.css";

function Info() {
	useEffect(() => {
		//==============================page1==============================
		function handleTabClick(tabId, showClass) {
			document.querySelector(".docSelectBottom").style.display = "none";
			document.querySelector(".beautySelectBottom").style.display = "none";
			document.querySelector(".nightSelectBottom").style.display = "none";
			document.querySelector(showClass).style.display = "flex";

			document.getElementById("homeDoc").classList.remove("changeColor");
			document.getElementById("homeBeauty").classList.remove("changeColor");
			document.getElementById("homeNight").classList.remove("changeColor");

			document.getElementById(tabId).classList.add("changeColor");
		}

		document.getElementById("homeDoc").addEventListener("click", () => {
			handleTabClick("homeDoc", ".docSelectBottom");
		});

		document.getElementById("homeBeauty").addEventListener("click", () => {
			handleTabClick("homeBeauty", ".beautySelectBottom");
		});

		document.getElementById("homeNight").addEventListener("click", () => {
			handleTabClick("homeNight", ".nightSelectBottom");
		});

		// ========== Document Ready Equivalent ==========

		const dots = document.querySelectorAll(".dot");
		const pages = document.querySelectorAll(".page");
		const container = document.querySelector(".container");
		let animated = false; // 修改部分

		function currentPage(pageNum) {
			// 使用 scrollIntoView 方法，將指定的頁面元素平滑地滾動到可視區域
			pages[pageNum - 1].scrollIntoView({ behavior: "smooth" });

			// 更新導航點的狀態
			updateDots(pageNum);

			// 在翻頁到第三頁時觸發動畫，並確保動畫只會執行一次
			if (pageNum === 3 && !animated) {
				// 修改部分
				startAnimation(); // 修改部分
				animated = true; // 修改部分
			} // 修改部分
		}

		function updateDots(activePage) {
			dots.forEach((dot, index) => {
				if (index + 1 === activePage) {
					dot.classList.add("active");
				} else {
					dot.classList.remove("active");
				}
			});
		}

		function onScroll() {
			const scrollPos = container.scrollTop + window.innerHeight / 2;
			pages.forEach((page, index) => {
				if (
					scrollPos >= page.offsetTop &&
					scrollPos < page.offsetTop + page.offsetHeight
				) {
					updateDots(index + 1);
					// 在翻頁到第三頁時觸發動畫，並確保動畫只會執行一次
					if (index + 1 === 3 && !animated) {
						// 修改部分
						startAnimation(); // 修改部分
						animated = true; // 修改部分
					} // 修改部分
				}
			});
		}

		container.addEventListener("scroll", onScroll);

		dots.forEach((dot, index) => {
			dot.addEventListener("click", () => {
				currentPage(index + 1);
			});
		});

		// 初始化滾動位置，確保正確的圓點被設置為活動狀態
		onScroll();

		// ========== Footer Click Handling ==========

		const footerHandles = document.querySelectorAll(".footer");
		footerHandles.forEach((handle) => {
			handle.addEventListener("click", () => {
				const footer = handle.closest(".footer");
				footer.classList.toggle("footer-expanded");
			});
		});

		// =========================Page2=========================================
		const scrollcontainer = document.querySelector(".cards");
		const prev = document.getElementById("prev");
		const next = document.getElementById("next");

		scrollcontainer.addEventListener("wheel", (evt) => {
			evt.preventDefault();
			scrollcontainer.scrollLeft += evt.deltaY;
		});

		next.addEventListener("click", () => {
			scrollcontainer.style.scrollBehavior = "smooth";
			scrollcontainer.scrollLeft += 400;
		});

		prev.addEventListener("click", () => {
			scrollcontainer.style.scrollBehavior = "smooth";
			scrollcontainer.scrollLeft -= 400;
		});

		//==========================page3===================================
		// 修改部分：新增 startAnimation 函數，用於觸發數字動畫
		function startAnimation() {
			const animalHome = document.querySelector(".Number1");
			animateNumber(animalHome, 1, 200, 3000);

			const animalMoney = document.querySelector(".Number2");
			animateNumber(animalMoney, 1, 1866224, 3000);

			const animalfood = document.querySelector(".Number3");
			animateNumber(animalfood, 1, 3212531, 3000);

			const animalNumber = document.querySelector(".Number4");
			animateNumber(animalNumber, 1, 120000, 3000);
		}

		function animateNumber(element, start, end, duration) {
			let startTime = null;

			function updateNumber(currentTime) {
				if (!startTime) startTime = currentTime;

				const progress = currentTime - startTime;

				const currentNumber = Math.min(
					Math.floor((progress / duration) * (end - start) + start),
					end
				);

				element.textContent = currentNumber.toLocaleString();

				if (currentNumber < end) {
					requestAnimationFrame(updateNumber);
				}
			}

			requestAnimationFrame(updateNumber);
		}

		// 清理事件
		return () => {
			document
				.getElementById("homeDoc")
				.removeEventListener("click", handleTabClick);
			document
				.getElementById("homeBeauty")
				.removeEventListener("click", handleTabClick);
			document
				.getElementById("homeNight")
				.removeEventListener("click", handleTabClick);
			container.removeEventListener("scroll", onScroll);
			dots.forEach((dot, index) => {
				dot.removeEventListener("click", () => currentPage(index + 1));
			});
			footerHandles.forEach((handle) => {
				handle.removeEventListener("click", () => {
					const footer = handle.closest(".footer");
					footer.classList.toggle("footer-expanded");
				});
			});
			scrollcontainer.removeEventListener("wheel", (evt) => {
				evt.preventDefault();
				scrollcontainer.scrollLeft += evt.deltaY;
			});
			next.removeEventListener("click", () => {
				scrollcontainer.style.scrollBehavior = "smooth";
				scrollcontainer.scrollLeft += 400;
			});
			prev.removeEventListener("click", () => {
				scrollcontainer.style.scrollBehavior = "smooth";
				scrollcontainer.scrollLeft -= 400;
			});
		};
	}, []);

	return (
		<div>
			<div className="dots-nav">
				<span className="dot" data-page="1"></span>
				<span className="dot" data-page="2"></span>
				<span className="dot" data-page="3"></span>
			</div>
			<div className="container">
				<div className="page" id="page1">
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
								<img
									src="https://img.icons8.com/ios-filled/100/FFFFFF/calendar--v1.png"
									alt="小狗"
								/>
								<p>看診預約</p>
							</div>
							<hr />
							<div id="homeBeauty">
								<img
									src="https://img.icons8.com/ios-filled/100/FFFFFF/barber-scissors.png"
									alt="小狗"
								/>
								<p>美容預約</p>
							</div>
							<hr />
							<div id="homeNight">
								<img
									src="https://img.icons8.com/ios/100/FFFFFF/home-page.png"
									alt="小狗"
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
									alt="小狗"
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
								alt="小狗"
								className="commonIcon"
								src="https://img.icons8.com/ios-filled/100/FFFFFF/home.png"
							/>
							<p className="commonText">正在幫助的浪浪園區有</p>
							<div className="unit">
								<p className="commonNumber Number1">0</p>
								<p>個</p>
							</div>

							<button className="commonButton">瞭解更多</button>
						</div>
						<div className="common">
							<img
								alt="小狗"
								className="commonIcon"
								src="https://img.icons8.com/windows/96/FFFFFF/hand-holding-dollar.png"
							/>
							<p className="commonText">已捐出貓狗飼料總金額</p>
							<div className="unit">
								<p className="commonNumber Number2">0</p>
								<p>元</p>
							</div>
							<button className="commonButton">瞭解更多</button>
						</div>
						<div className="common">
							<img
								alt="小狗"
								className="commonIcon"
								src="https://img.icons8.com/sf-regular/96/FFFFFF/like.png"
							/>
							<p className="commonText">已捐出的貓狗飼料總重</p>
							<div className="unit">
								<p className="commonNumber Number3">0</p>
								<p>kg</p>
							</div>
							<button className="commonButton">瞭解更多</button>
						</div>
						<div className="common">
							<img
								alt="小狗"
								className="commonIcon"
								src="https://img.icons8.com/ios/100/FFFFFF/dog--v1.png"
							/>
							<p className="commonText">正在受惠的貓狗總數</p>
							<div className="unit">
								<p className="commonNumber Number4">0</p>
								<p>隻</p>
							</div>
							<button className="commonButton">瞭解更多</button>
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
		</div>
	);
}

export default Info;
