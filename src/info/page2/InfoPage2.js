import React, { useState, useEffect, useRef, useCallback } from "react";
import "./InfoPage2.css";

const InfoPage2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsRef = useRef(null);

  const cardData = [
    {
      id: 0,
      image: "../大專題模擬圖/pet_event_1.jpg",
      title: "【✨台北寵物用品展✨】",
      text: "📣台北寵物用品展來囉!! 🐱🐶邀請毛孩爸、媽們一起來逛台北寵物用品展!",
    },
    {
      id: 1,
      image: "../大專題模擬圖/pet_event_2.jpg",
      title: "【愛心領養日】",
      text: "給毛孩一個溫暖的家！本週六日舉辦大型領養活動，歡迎參加！",
    },
    {
      id: 2,
      image: "../大專題模擬圖/pet_event_3.jpg",
      title: "【寵物美容優惠月】",
      text: "本月寵物美容服務享有8折優惠，讓您的毛孩展現最佳風采！",
    },
    {
      id: 3,
      image: "../大專題模擬圖/pet_event_4.jpg",
      title: "【毛孩健康講座】",
      text: "專業獸醫分享寵物保健知識，本週日下午2點線上直播，歡迎收看！",
    },
    {
      id: 4,
      image: "../大專題模擬圖/pet_event_5.jpg",
      title: "【寵物友善餐廳聚會】",
      text: "週末帶著毛孩一起用餐吧！精選10家寵物友善餐廳，歡迎預約！",
    },
    {
      id: 5,
      image: "../大專題模擬圖/pet_event_6.jpg",
      title: "【寵物訓練課程】",
      text: "專業訓犬師開班授課，助您與愛寵建立更好的溝通！名額有限，速報從速！",
    },
    {
      id: 6,
      image: "../大專題模擬圖/pet_event_7.jpg",
      title: "【毛孩寫真活動】",
      text: "專業攝影師為您的寵物拍攝美照，留下珍貴回憶！本月特惠中。",
    },
    {
      id: 7,
      image: "../大專題模擬圖/pet_event_8.jpg",
      title: "【寵物嘉年華】",
      text: "一年一度的大型寵物嘉年華即將登場！遊戲、表演、美食，精彩活動不容錯過！",
    },
    {
      id: 8,
      image: "../大專題模擬圖/pet_event_9.jpg",
      title: "【寵物SPA體驗】",
      text: "讓您的毛孩也能享受奢華SPA！新開幕優惠，限時預約85折。",
    },
    {
      id: 9,
      image: "../大專題模擬圖/pet_event_10.jpg",
      title: "【寵物變裝秀】",
      text: "萬聖節寵物變裝比賽開始報名啦！豐富獎品等您來拿！",
    },
    {
      id: 10,
      image: "../大專題模擬圖/pet_event_11.jpg",
      title: "【健康寵食展】",
      text: "各大品牌齊聚，讓您挑選最適合毛孩的優質飼料！現場還有試吃活動哦！",
    },
    {
      id: 11,
      image: "../大專題模擬圖/pet_event_12.jpg",
      title: "【愛心義賣活動】",
      text: "為流浪動物募款！本週六日義賣活動，您的支持是浪浪的希望！",
    }
  ];

  const clonedCardData = [
    ...cardData.slice(-3),
    ...cardData,
    ...cardData.slice(0, 3),
  ];

  const moveCards = useCallback(
    (direction) => {
      const container = cardsRef.current;
      if (!container) return; // 添加空值檢查
      const cardWidth = container.children[0].offsetWidth + 40; // 卡片寬度 + margin
      let newIndex = currentIndex + direction;

      if (newIndex < 0) {
        newIndex = cardData.length - 1;
        container.style.transition = "none";
        container.style.transform = `translateX(-${
          (cardData.length + 2) * cardWidth
        }px)`;
        setTimeout(() => {
          container.style.transition = "transform 0.5s ease";
          setCurrentIndex(newIndex);
        }, 10);
      } else if (newIndex >= cardData.length) {
        newIndex = 0;
        container.style.transition = "none";
        container.style.transform = `translateX(-${3 * cardWidth}px)`;
        setTimeout(() => {
          container.style.transition = "transform 0.5s ease";
          setCurrentIndex(newIndex);
        }, 10);
      } else {
        setCurrentIndex(newIndex);
      }

      container.style.transform = `translateX(-${
        (newIndex + 2) * cardWidth
      }px)`;
    },
    [currentIndex, cardData.length]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      moveCards(1);
    }, 3000);

    return () => clearInterval(interval);
  }, [moveCards]);

  const newsData = [
    { date: "2024.03.01", text: "【新店開幕】全新寵物精品店在台北市中心盛大開幕，首週所有商品85折！" },
    { date: "2024.03.05", text: "【義診活動】本週末在中正公園舉行流浪動物義診，歡迎帶家中毛孩來檢查健康。" },
    { date: "2024.03.10", text: "【寵物旅館優惠】暑假將至，預訂寵物旅館享早鳥9折優惠，名額有限請儘速預約。" },
    { date: "2024.03.15", text: "【寵物攝影展】知名寵物攝影師聯展，3/20-3/30在華山文創園區展出，票價200元。" },
    { date: "2024.03.20", text: "【寵物食品安全講座】邀請營養學專家分享如何為毛孩挑選安全健康的食品，線上免費參加。" },
    { date: "2024.03.25", text: "【寵物美容比賽】第一屆全國寵物美容師大賽開始報名，優勝者可獲得高額獎金和國際認證機會。" },
    { date: "2024.03.28", text: "【寵物友善公園啟用】台中市新建的寵物友善公園正式啟用，設有專屬狗狗遊樂區和飲水設施。" },
    { date: "2024.04.01", text: "【春季寵物健檢】全國連鎖寵物醫院推出春季健檢優惠，即日起至4月底享7折優惠。" },
    { date: "2024.04.05", text: "【寵物用品DIY工作坊】學習製作天然寵物玩具和零食，本週日在市民廣場舉行，需提前報名。" },
    { date: "2024.04.10", text: "【流浪動物認養日】與台北市動物保護處合作，舉辦大型認養活動，給流浪動物一個溫暖的家。" },
    { date: "2024.04.15", text: "【寵物行為訓練課程】知名犬貓行為專家開設線上課程，教您如何理解和改善寵物行為問題。" },
    { date: "2024.04.20", text: "【寵物友善餐廳月】全台50家寵物友善餐廳聯合推出優惠，帶毛孩用餐即可享85折。" },
    { date: "2024.04.25", text: "【寵物保險講座】了解如何為您的寵物選擇合適的保險計劃，保障毛孩的健康和未來。" },
    { date: "2024.04.30", text: "【寵物攝影教學】專業寵物攝影師分享如何拍出完美寵物照片，線上課程只要999元。" },
    { date: "2024.05.05", text: "【母親節寵物香氛活動】特邀調香師製作寵物專屬香水，為毛孩媽媽們獻上特別的母親節禮物。" },
    { date: "2024.05.10", text: "【寵物友善旅遊展】各大寵物友善飯店和旅遊行程展示，為您和毛孩規劃完美假期。" },
    { date: "2024.05.15", text: "【寵物營養師諮詢日】資深寵物營養師提供一對一諮詢服務，解答您關於寵物飲食的所有疑問。" },
    { date: "2024.05.20", text: "【寵物友善辦公室論壇】探討如何打造寵物友善的工作環境，促進工作與生活的平衡。" },
    { date: "2024.05.25", text: "【寵物嘉年華】一年一度的大型寵物嘉年華即將登場！遊戲、表演、美食，精彩活動不容錯過！" },
    { date: "2024.05.30", text: "【寵物醫療新知講座】邀請國際獸醫專家分享最新的寵物醫療技術和趨勢，歡迎醫療相關人員參加。" },
    { date: "2024.06.01", text: "【兒童寵物互動工作坊】教導孩子如何安全地與寵物互動，培養愛心和責任感。" },
    { date: "2024.06.05", text: "【寵物飼養證照班】開設寵物飼養管理證照班，完成課程可獲得專業證書。" }
  ];

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
          onClick={() => moveCards(-1)}
        />
        <div className="cards-container">
          <div className="cards" ref={cardsRef}>
            {clonedCardData.map((card, index) => (
              <div className="card" key={index}>
                <img alt="最新資訊小卡" id="cardImage" src={card.image} />
                <h3 id="cardTitle">{card.title}</h3>
                <span id="cardText">{card.text}</span>
                <a href="http://localhost:3000/">more</a>
              </div>
            ))}
          </div>
        </div>
        <img
          id="next"
          className="control"
          src="https://img.icons8.com/forma-light-filled/96/FFFFFF/circled-chevron-right.png"
          alt="circled-chevron-right"
          onClick={() => moveCards(1)}
        />
      </div>

      <div id="page2News">
        {newsData.map((news, index) => (
          <div id="newsInfo" key={index}>
            <p id="newsDate">{news.date}</p>
            <p id="newsText">{news.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoPage2;