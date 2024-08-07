import React from "react";
import "./Info.css";
import InfoPage1 from "./page1/InfoPage1";
import InfoPage2 from "./page2/InfoPage2";
import InfoPage3 from "./page3/InfoPage3";
function Info() {
	return (
		<div>
			<div class="dots-nav">
				<span class="dot" data-page="1"></span>
				<span class="dot" data-page="2"></span>
				<span class="dot" data-page="3"></span>
			</div>
			<div className="container">
				<InfoPage1 />
				<InfoPage2 />
				<InfoPage3 />
			</div>
		</div>
	);
}

export default Info;
