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
				眼科: ["乾眼症", "結膜炎", "白內障"],
				耳科: ["耳血腫", "耳外炎"],
				口科: ["扁桃腺炎", "口腔黏膜發炎"],
			},
		},
		{
			id: 2,
			src: "https://img.icons8.com/ios/50/FFFFFF/tooth.png",
			alt: "Icon 2",
			text: "牙科",
			info: {
				牙科: ["蛀牙", "齒槽廔管", "牙齦肉瘤", "牙菌斑"],
			},
		},
		{
			id: 3,
			src: "https://img.icons8.com/ink/48/FFFFFF/medical-heart.png",
			alt: "Icon 3",
			text: "心血管",
			info: {
				心血管: ["高血壓", "心臟病", "中風"],
			},
		},
		{
			id: 4,
			src: "https://img.icons8.com/ios/100/FFFFFF/lungs.png",
			alt: "Icon 4",
			text: "呼吸系統",
			info: {
				呼吸系統: ["哮喘", "肺炎", "慢性阻塞性肺病"],
			},
		},
		{
			id: 5,
			src: "https://img.icons8.com/ios/50/FFFFFF/stomach.png",
			alt: "Icon 5",
			text: "腸胃",
			info: {
				腸胃: ["胃潰瘍", "腸胃炎", "結腸癌"],
			},
		},
		{
			id: 6,
			src: "https://img.icons8.com/ios/50/FFFFFF/knee-joint.png",
			alt: "Icon 6",
			text: "骨科",
			info: {
				骨科: ["骨折", "關節炎", "骨質疏鬆"],
			},
		},
		{
			id: 7,
			src: "https://img.icons8.com/external-glyph-icons-maxicons/85/FFFFFF/external-anatomy-medical-glyph-glyph-icons-maxicons-3.png",
			alt: "Icon 7",
			text: "胸腔、腹腔",
			info: {
				胸腔腹腔: ["肺癌", "肝炎", "胰臟炎"],
			},
		},
		{
			id: 8,
			src: "https://img.icons8.com/external-solidglyph-m-oki-orlando/32/FFFFFF/external-urology-science-solid-solidglyph-m-oki-orlando.png",
			alt: "Icon 8",
			text: "泌尿專科",
			info: {
				泌尿專科: ["腎結石", "膀胱炎", "前列腺癌"],
			},
		},
		{
			id: 9,
			src: "https://img.icons8.com/external-outline-andi-nur-abdillah/64/FFFFFF/external-Skin-skincare-(outline)-outline-andi-nur-abdillah.png",
			alt: "Icon 9",
			text: "皮膚腫瘤",
			info: {
				皮膚腫瘤: ["皮膚癌", "黑色素瘤", "濕疹"],
			},
		},
	];

	const [scrollPosition, setScrollPosition] = useState(0);
	const [selectedIcon, setSelectedIcon] = useState(icons[0]);
	const [selectedDisease, setSelectedDisease] = useState(null);
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
		setSelectedDisease(null);
	};

	const handleDiseaseClick = (disease) => {
		setSelectedDisease(disease);
	};

	const diseaseInfo = {
		乾眼症: {
			症狀: "由於「眼睛淚水樣淚液」分泌減少，造成「角膜」與「結膜發炎」產生病變。診斷上，獸醫師主要靠「臨床症狀」以及「Schirmer氏淚液試驗（STT）」的試驗結果。為主。Schirmer氏淚液試驗（STT）是將「淚液試驗紙條」放置於「角膜」與「下眼瞼間」測量一分鐘水樣淚液的製造量。犬的STT正常值>15~16mm/min、貓>10~12mm/min。若犬的SPP數值低於10mm，或貓的STT數值低於5mm加上有黏液樣或粘液膜樣分泌物及結膜炎的發生，則獸醫師就會強烈懷疑您的毛寶貝患有乾眼症。",
			發生原因:
				"自體免疫性、先天原膜發育不良、眼內發炎或是不當使用某些眼藥...等",
			臨床症狀:
				"外觀可見毛寶貝的眼睛分泌物異常增加，如：大量黏稠的眼屎（特別是早上）、紅眼（血絲多）、眼睛中的角膜失去原有的明亮與光澤，可能還會伴隨色素沉澱",
			好發時機: "中老年時期的狗狗貓貓更容易發生",
			治療方法: {
				刺激淚液的產生:
					"使用CYCLOSPORINE眼藥膏，每日兩次，可以增加淚液的生成及改善角結膜炎的情況。另外1~4滴PILOCARPINE 2% 眼藥水口服也達到刺激淚液產生的效果",
				提供局部的潤滑: "如：人工淚液或人工淚膏的使用",
				治療繼發的細菌感染: "",
				在無角膜潰瘍的情況下: "可以使用類固醇藥膏減緩眼睛的發炎",
				清潔眼睛周圍的分泌物: "",
			},
		},
		結膜炎: {
			症狀: "出現頻繁的搔抓、揉眼睛等舉動，此時可能就是在告訴你罹患的眼睛正感覺到疼痛。有時也會伴有隨意眨、流淚、結膜充血、分泌物增多...等症狀發生。",
			好發時機:
				"白內障及水晶體核硬化症是9歲以上的老年寵物最常見的眼睛疾病，估計在9歲以上的寵物約有50%的發生率，而13歲以上的寵物幾達100%的發生率。",
			治療方法: {
				檢查: "醫師會透過「淚液試紙檢查」、「螢光染劑檢查」、「外觀視診」來做確診。",
				治療: "當確診為結膜炎後，可以使用生理鹽水、2~3%硼酸水或1%明礬溶液來清洗患者的眼睛，然後給予眼藥水或眼藥膏。",
			},
		},
		白內障: {
			症狀: "晶狀體變得混濁，導致視力逐漸下降，可能會引發視力模糊或失明。",
			發生原因: "年齡相關的晶狀體退化、糖尿病等內科疾病可能導致白內障。",
			好發時機: "老年犬貓最為常見，尤其是8歲以上的寵物。",
			治療方法: {
				檢查: "眼科檢查、視力測試。",
				治療: "手術移除晶狀體並植入人工晶狀體。",
			},
		},
		耳血腫: {
			症狀: "耳朵腫脹、疼痛、搔癢，耳朵內部或外部可見血液囊泡。",
			發生原因: "搔抓或撕裂耳朵內的血管，通常是由於耳外炎或耳道寄生蟲引發。",
			好發時機: "耳外炎或搔抓耳朵引發，所有年齡層的寵物都可能發生。",
			治療方法: {
				檢查: "耳朵外觀檢查、超音波檢查。",
				治療: "抽取血液或手術修復，並處理引起搔抓的原始原因。",
			},
		},
		耳外炎: {
			症狀: "耳朵內部紅腫、分泌物增加，可能伴有強烈的臭味。",
			發生原因: "細菌、酵母菌或寄生蟲感染引發耳道炎症。",
			好發時機: "多見於有耳毛或耳道狹窄的犬貓品種。",
			治療方法: {
				檢查: "耳鏡檢查及分泌物培養。",
				治療: "使用耳道清潔液和抗生素或抗真菌藥物治療。",
			},
		},
		扁桃腺炎: {
			症狀: "喉嚨疼痛、吞嚥困難、食慾減退，可能會伴隨發熱。",
			發生原因: "細菌或病毒感染引起扁桃腺發炎。",
			好發時機: "主要發生於年幼或免疫系統較弱的寵物。",
			治療方法: {
				檢查: "口腔及咽喉檢查，可能需要進行喉鏡檢查。",
				治療: "抗生素治療及止痛藥物，嚴重時可能需要手術切除扁桃腺。",
			},
		},
		口腔黏膜發炎: {
			症狀: "口腔內部出現紅腫、潰瘍、疼痛，可能伴隨口臭。",
			發生原因: "口腔衛生不良、牙菌斑堆積、口腔感染等原因引起。",
			好發時機:
				"各年齡層的寵物都可能發生，特別是在牙齒或牙齦健康不良的情況下。",
			治療方法: {
				檢查: "口腔內視鏡檢查。",
				治療: "清潔口腔並使用抗生素藥物。",
			},
		},
		蛀牙: {
			症狀: "牙齒出現黑點或洞，食物易卡在牙齒中，可能伴隨疼痛或口臭。",
			發生原因: "飲食中的糖分與口腔中的細菌結合形成酸，腐蝕牙齒。",
			好發時機: "中老年犬貓更容易出現蛀牙，尤其是進食軟食或糖分高的食物。",
			治療方法: {
				檢查: "牙科檢查及X光拍攝。",
				治療: "鑲補蛀牙或拔除嚴重蛀蝕的牙齒。",
			},
		},
		齒槽廔管: {
			症狀: "牙齦出現膿包，疼痛且易流血，口臭明顯。",
			發生原因: "牙齦炎症或牙根感染導致的膿液積聚。",
			好發時機: "通常發生於患有牙齦疾病或牙齒感染的寵物。",
			治療方法: {
				檢查: "牙科X光、口腔檢查。",
				治療: "抽取膿液，可能需要手術清創或拔牙。",
			},
		},
		高血壓: {
			症狀: "可能無明顯症状，或出現視力問題、疲倦、癲癇。",
			發生原因: "老年疾病、腎臟疾病或心臟問題引起的血壓升高。",
			好發時機: "多發於老年犬貓或患有其他慢性疾病的寵物。",
			治療方法: {
				檢查: "血壓測量、心臟超音波。",
				治療: "使用降壓藥物控制血壓。",
			},
		},
		心臟病: {
			症狀: "呼吸困難、咳嗽、運動耐受性降低，可能出現昏厥。",
			發生原因: "心臟瓣膜退化、心肌病變或心律失常。",
			好發時機: "老年犬貓尤其容易患上心臟病。",
			治療方法: {
				檢查: "心臟超音波、心電圖。",
				治療: "使用心臟藥物、利尿劑，必要時進行手術。",
			},
		},
		哮喘: {
			症狀: "突發性呼吸困難、喘鳴、咳嗽，有時伴隨嘔吐。",
			發生原因: "對花粉、灰塵、煙霧等過敏源過度敏感。",
			好發時機: "某些品種如貓更易發生哮喘，尤其是在過敏季節。",
			治療方法: {
				檢查: "胸部X光、支氣管鏡檢查。",
				治療: "支氣管擴張劑、吸入類固醇，減少過敏源接觸。",
			},
		},
		肺炎: {
			症狀: "持續性咳嗽、發燒、呼吸困難，食慾不振。",
			發生原因: "細菌、病毒、真菌感染，或吸入異物引發。",
			好發時機: "免疫力低下的犬貓特別容易患上肺炎。",
			治療方法: {
				檢查: "胸部X光、血液檢查。",
				治療: "抗生素治療、支氣管擴張劑及支持療法。",
			},
		},
		胃潰瘍: {
			症狀: "食慾減退、嘔吐、腹痛、體重減輕。",
			發生原因: "長期服用非類固醇抗炎藥、應激反應、慢性疾病。",
			好發時機: "各年齡層的寵物，尤其是在壓力大或服用藥物後。",
			治療方法: {
				檢查: "胃鏡檢查、X光。",
				治療: "使用抗酸藥物及改變飲食。",
			},
		},
		腸胃炎: {
			症狀: "嘔吐、腹瀉、腹痛、脫水。",
			發生原因: "病毒、細菌感染或進食變質食物。",
			好發時機: "各年齡層的犬貓，特別是在食用異物或過期食物後。",
			治療方法: {
				檢查: "糞便檢查、血液檢查。",
				治療: "禁食、靜脈輸液及使用止瀉藥物。",
			},
		},
		骨折: {
			症狀: "明顯疼痛、無法正常行走、腫脹。",
			發生原因: "外傷、跌倒或強力撞擊導致的骨頭斷裂。",
			好發時機: "任何年齡層的寵物，尤其是在意外事故中受傷時。",
			治療方法: {
				檢查: "X光檢查。",
				治療: "石膏固定、手術修復。",
			},
		},
		關節炎: {
			症狀: "關節僵硬、行動困難、疼痛，天冷時加劇。",
			發生原因: "關節磨損、骨質疏鬆或免疫系統異常。",
			好發時機: "老年犬貓最容易患上關節炎，特別是大型犬種。",
			治療方法: {
				檢查: "關節超音波、X光。",
				治療: "止痛藥、抗炎藥，物理治療或手術。",
			},
		},
		肝炎: {
			症狀: "食慾減退、黃疸、嘔吐、體重減輕。",
			發生原因: "病毒性、細菌性或中毒性肝損傷。",
			好發時機: "免疫力低下或接觸有毒物質的犬貓容易患上肝炎。",
			治療方法: {
				檢查: "血液檢查、肝臟超音波。",
				治療: "支持療法、抗生素或肝保護藥物。",
			},
		},
		膀胱炎: {
			症狀: "頻尿、血尿、排尿困難、尿痛。",
			發生原因: "細菌感染、膀胱結石或異物引發膀胱炎症。",
			好發時機: "尤其容易發生於母犬或長期飲水不足的寵物。",
			治療方法: {
				檢查: "尿液檢查、超音波檢查。",
				治療: "使用抗生素治療並增加飲水量。",
			},
		},
		皮膚癌: {
			症狀: "皮膚上出現異常增生或變色的腫塊，可能潰爛或流血。",
			發生原因: "長期暴露在紫外線下或基因突變。",
			好發時機: "老年犬貓，尤其是毛髮稀疏或淺色毛的品種。",
			治療方法: {
				檢查: "皮膚活檢、X光。",
				治療: "手術切除腫瘤，必要時配合放射治療或化療。",
			},
		},
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
								<button
									key={index}
									onClick={() => handleDiseaseClick(disease)}
									className={selectedDisease === disease ? "selected" : ""}
								>
									{disease}
								</button>
							))}
						</div>
					))}
				</div>
				<div className="InfoRight">
					{selectedDisease && diseaseInfo[selectedDisease] && (
						<div className="diseaseInfo">
							<h2>{selectedDisease}</h2>
							<hr />
							<div className="infoContent">
								{Object.entries(diseaseInfo[selectedDisease]).map(
									([key, value]) => (
										<div key={key} className="infoSection">
											<h3>{key}</h3>
											<hr />
											{typeof value === "string" ? (
												<p>{value}</p>
											) : (
												Object.entries(value).map(([subKey, subValue]) => (
													<div key={subKey} className="subSection">
														<h4>{subKey}</h4>
														<p>{subValue}</p>
													</div>
												))
											)}
										</div>
									)
								)}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Health;
