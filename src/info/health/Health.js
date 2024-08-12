import React, { useState, useRef } from "react";
import "./Health.css";

function Health() {
	const icons = [
		{
			id: 1,
			src: "https://img.icons8.com/pastel-glyph/64/FFFFFF/surprise--v2.png",
			alt: "Icon 1",
			text: "眼、耳、口",
			info: {
				eye: ["角膜潰瘍", "結膜炎", "白內障"],
				ear: ["耳血腫", "耳外炎"],
				mouth: ["扁桃腺炎", "口腔黏膜發炎"],
			},
		},
		{
			id: 2,
			src: "https://img.icons8.com/ios/50/FFFFFF/tooth.png",
			alt: "Icon 2",
			text: "牙科",
			info: {
				dental: ["蛀牙", "牙周病", "口腔癌"],
			},
		},
		{
			id: 3,
			src: "https://img.icons8.com/ink/48/FFFFFF/medical-heart.png",
			alt: "Icon 3",
			text: "心血管",
			info: {
				cardiovascular: ["高血壓", "心臟病", "中風"],
			},
		},
		{
			id: 4,
			src: "https://img.icons8.com/ios/100/FFFFFF/lungs.png",
			alt: "Icon 4",
			text: "呼吸系統",
			info: {
				respiratory: ["哮喘", "肺炎", "慢性阻塞性肺病"],
			},
		},
		{
			id: 5,
			src: "https://img.icons8.com/ios/50/FFFFFF/stomach.png",
			alt: "Icon 5",
			text: "腸胃",
			info: {
				gastrointestinal: ["胃潰瘍", "腸胃炎", "結腸癌"],
			},
		},
		{
			id: 6,
			src: "https://img.icons8.com/ios/50/FFFFFF/knee-joint.png",
			alt: "Icon 6",
			text: "骨科",
			info: {
				orthopedic: ["骨折", "關節炎", "骨質疏鬆"],
			},
		},
		{
			id: 7,
			src: "https://img.icons8.com/external-glyph-icons-maxicons/85/FFFFFF/external-anatomy-medical-glyph-glyph-icons-maxicons-3.png",
			alt: "Icon 7",
			text: "胸腔、腹腔",
			info: {
				thoracicAbdominal: ["肺癌", "肝炎", "胰臟炎"],
			},
		},
		{
			id: 8,
			src: "https://img.icons8.com/external-solidglyph-m-oki-orlando/32/FFFFFF/external-urology-science-solid-solidglyph-m-oki-orlando.png",
			alt: "Icon 8",
			text: "泌尿專科",
			info: {
				urological: ["腎結石", "膀胱炎", "前列腺癌"],
			},
		},
		{
			id: 9,
			src: "https://img.icons8.com/external-outline-andi-nur-abdillah/64/FFFFFF/external-Skin-skincare-(outline)-outline-andi-nur-abdillah.png",
			alt: "Icon 9",
			text: "皮膚腫瘤",
			info: {
				dermatological: ["皮膚癌", "黑色素瘤", "濕疹"],
			},
		},
	];

	const [scrollPosition, setScrollPosition] = useState(0);
	const [selectedIcon, setSelectedIcon] = useState(icons[0]);
	const scrollerRef = useRef(null);

	const scroll = (direction) => {
		const scrollAmount = 200;
		const newPosition =
			direction === "left"
				? Math.max(0, scrollPosition - scrollAmount)
				: Math.min(
						scrollerRef.current.scrollWidth - scrollerRef.current.clientWidth,
						scrollPosition + scrollAmount
				  );

		setScrollPosition(newPosition);
		scrollerRef.current.scrollTo({
			left: newPosition,
			behavior: "smooth",
		});
	};

	const handleIconClick = (icon) => {
		setSelectedIcon(icon);
	};

	return (
		<div className="healthPage">
			<div className="healthNav">
				<div className="navContainer">
					<button
						className="navArrow navArrowLeft"
						onClick={() => scroll("left")}
					>
						&lt;
					</button>
					<div className="iconScroller" ref={scrollerRef}>
						{icons.map((icon) => (
							<div
								key={icon.id}
								className={`iconItem ${
									selectedIcon.id === icon.id ? "selected" : ""
								}`}
								onClick={() => handleIconClick(icon)}
							>
								<img src={icon.src} alt={icon.alt} />
								<span>{icon.text}</span>
							</div>
						))}
					</div>
					<button
						className="navArrow navArrowRight"
						onClick={() => scroll("right")}
					>
						&gt;
					</button>
				</div>
			</div>
			<div className="healthBottom">
				<div className="InfoLeft">
					{Object.entries(selectedIcon.info).map(([key, diseases]) => (
						<div className="InfoLeftItem" key={key}>
							<h3>{key}</h3>
							<hr />
							{diseases.map((disease, index) => (
								<button key={index}>{disease}</button>
							))}
						</div>
					))}
				</div>
				<div className="InfoRight"></div>
			</div>
		</div>
	);
}

export default Health;
