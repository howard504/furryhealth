import React, {
	useState,
	useEffect,
	useRef,
	useMemo,
	useCallback,
} from "react";
import "./InfoPage3.css";

const InfoPage3 = () => {
	const [numbers, setNumbers] = useState({
		Number1: 0,
		Number2: 0,
		Number3: 0,
		Number4: 0,
	});

	const [isVisible, setIsVisible] = useState(false);

	const targetNumbers = useMemo(
		() => ({
			Number1: 200,
			Number2: 1821352,
			Number3: 654652,
			Number4: 12041,
		}),
		[]
	);

	const animationDuration = 2000;
	const frameRate = 60;

	const pageRef = useRef(null);

	const observerCallback = useCallback(([entry]) => {
		if (entry.isIntersecting) {
			setIsVisible(true);
		}
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(observerCallback, {
			threshold: 0.1, // 當10%的元素可見時觸發
		});

		if (pageRef.current) {
			observer.observe(pageRef.current);
		}

		return () => {
			if (pageRef.current) {
				observer.unobserve(pageRef.current);
			}
		};
	}, [observerCallback]);

	useEffect(() => {
		if (!isVisible) return;

		const interval = 1000 / frameRate;
		const steps = animationDuration / interval;

		const timers = Object.keys(targetNumbers).map((key) => {
			const increment = targetNumbers[key] / steps;
			return setInterval(() => {
				setNumbers((prevNumbers) => ({
					...prevNumbers,
					[key]: Math.min(prevNumbers[key] + increment, targetNumbers[key]),
				}));
			}, interval);
		});

		return () => timers.forEach(clearInterval);
	}, [isVisible, targetNumbers, animationDuration, frameRate]);

	return (
		<div className="page" id="page3" ref={pageRef}>
			<video
				muted={true}
				loop
				playsInline
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
					<div className="unit">
						<p className="commonNumber Number1">
							{Math.round(numbers.Number1).toLocaleString()}
						</p>
						<p className="unitText">個</p>
					</div>
					<button className="commonButton">瞭解更多</button>
				</div>
				<div className="common">
					<img
						alt="money"
						className="commonIcon"
						src="https://img.icons8.com/windows/96/FFFFFF/hand-holding-dollar.png"
					/>
					<p className="commonText">已捐出的貓狗飼料金額</p>
					<div className="unit">
						<p className="commonNumber Number2">
							{Math.round(numbers.Number2).toLocaleString()}
						</p>
						<p className="unitText">元</p>
					</div>
					<button className="commonButton">瞭解更多</button>
				</div>
				<div className="common">
					<img
						alt="heavy"
						className="commonIcon"
						src="https://img.icons8.com/sf-regular/96/FFFFFF/like.png"
					/>
					<p className="commonText">已捐出的貓狗飼料總重</p>
					<div className="unit">
						<p className="commonNumber Number3">
							{Math.round(numbers.Number3).toLocaleString()}
						</p>
						<p className="unitText">kg</p>
					</div>
					<button className="commonButton">瞭解更多</button>
				</div>
				<div className="common">
					<img
						alt="howmany"
						className="commonIcon"
						src="https://img.icons8.com/ios/100/FFFFFF/dog--v1.png"
					/>
					<p className="commonText">正在受惠中的貓狗總數</p>
					<div className="unit">
						<p className="commonNumber Number4">
							{Math.round(numbers.Number4).toLocaleString()}
						</p>
						<p className="unitText">隻</p>
					</div>
					<button className="commonButton">瞭解更多</button>
				</div>
			</div>
		</div>
	);
};

export default InfoPage3;
