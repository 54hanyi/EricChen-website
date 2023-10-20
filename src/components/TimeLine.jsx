import React, { useState, useEffect, useRef } from 'react';
import './styles/TimeLine.css'; 

const sectionsData = [
  {
    title: '省思',
    time: '- 2022.06',
    content: '從小喜愛與人互動，也喜歡提供服務後獲得的反饋，所以一直往服務業方面走，後來發現程式設計也非常需要與人溝通的能力，並且有更好的前景，因此決定嘗試朝這方面學習。',
  },
  {
    title: '啟發',
    time: '2022.07 - ',
    content: '在尚未接觸到程式設計之前，一直以為這是非常遙不可及的，直到偶然看到許多前輩分享從毫無相關經驗，到自學成為一位優秀的工程師後，決定自己也試試看，雖然其中還有非常非常多東西等著我去學習，但也因此找到了興趣。',
  },
  {
    title: '自學',
    time: '2022.10 - 2023.11',
    content: '毫無底子的我，經過一番摸索，決定以網路課程為主，google及chatGPT為輔，自行摸索程式語言培養興趣和學習，目標成為一名合格的前端工程師。',
  },
  {
    title: '願景',
    time: '2024.01 - ',
    content: '非本科出生的我努力累積作品，邊學習邊找機會，尋找一個需要且適合我的前端工作職位！',
  },
];

const Timeline = () => {
  // const [up, setUp] = useState(false); // 監聽向上捲動
  // const [down, setDown] = useState(false); // 監聽向下捲動
  const [full, setFull] = useState(false); // 是否已達到最大狀態
  const [setHeight, setSetHeight] = useState(0); // 設定高度

  const targetY = window.innerHeight * 0.8; // 目標捲動高度
  let prevScrollY = window.scrollY; // 上一個捲動位置

  const scrollHandler = () => {
    const scrollY = window.scrollY; // 現在捲動位置
    const up = scrollY < prevScrollY; // 是否向上捲動
    const down = !up; // 是否向下捲動

    const timelineRect = timelineRef.current.getBoundingClientRect(); // 取得時間軸的位置資訊
    // const lineRect = lineRef.current.getBoundingClientRect(); // 取得時間軸線的位置資訊
    const dist = targetY - timelineRect.top; // 距離目標位置的距離

    if (down && !full) {
      // 如果向下捲動且尚未達到最大狀態
      const newSetHeight = Math.max(setHeight, dist);
      lineRef.current.style.bottom = `calc(100% - ${newSetHeight}px)`; // 設定時間軸線的底部位置
      setSetHeight(newSetHeight);
    }

    if (dist > timelineRef.current.offsetHeight + 50 && !full) {
      // 如果距離目標位置超過時間軸的高度加上一些偏移，且尚未達到最大狀態
      setFull(true); // 設定已達到最大狀態
      lineRef.current.style.bottom = '-50px'; // 將時間軸線移至底部
    }

    sectionsRef.current.forEach((item) => {
      const rect = item.getBoundingClientRect(); // 取得各個段落的位置資訊

      if (rect.top + item.offsetHeight / 5 < targetY) {
        // 如果段落的頂部距離目標位置的距離小於段落高度的五分之一
        item.classList.add('show-me'); // 加入 CSS 類別以顯示段落
      }
    });

    prevScrollY = window.scrollY; // 更新上一個捲動位置
  };

  const timelineRef = useRef(null); // 參考時間軸的 DOM 元素
  const lineRef = useRef(null); // 參考時間軸線的 DOM 元素
  const sectionsRef = useRef([]); // 參考各個段落的 DOM 元素

  useEffect(() => {
    // 在 componentDidMount 和 componentDidUpdate 時設定 DOM 參考和事件監聽
    timelineRef.current = document.querySelector('.timeline');
    lineRef.current = document.querySelector('.line');
    sectionsRef.current = Array.from(document.querySelectorAll('.section'));

    window.addEventListener('scroll', scrollHandler); // 監聽捲動事件
    scrollHandler(); // 初始呼叫一次以處理初始狀態

    return () => {
      // 在 componentWillUnmount 時移除事件監聽
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [full, setHeight]); // 僅在 full 和 setHeight 更新時執行
  
  return (
    <>
      <div className="Timeline-container">
        <div className="top-section">
          <h1>前端之路</h1>
        </div>

        <div className="timeline" ref={timelineRef}>
          <div className="line" ref={lineRef}></div>
          {sectionsData.map((section, index) => (
            <div className="section" key={index}>
            <div className="bead"></div>
            <div className="content">
              <h2>{section.title}</h2>
              <h3>{section.time}</h3>
              <p>{section.content}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Timeline;

