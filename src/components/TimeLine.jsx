import React, { useState, useEffect, useRef, useCallback } from 'react';
import './styles/TimeLine.css'; 

const sectionsData = [
  {
    title: '省思',
    time: '- 2023.10',
    content: '我一直熱衷於與人互動，享受服務帶來的滿足感。然而，我發現程式設計同樣需要良好的溝通能力，並且具備廣闊的發展前景，這激勵我開始學習程式設計。',
  },
  {
    title: '啟發',
    time: '2023.12 - ',
    content: '最開始我認為程式設計遙不可及，直到我看見許多前輩的分享，他們從零開始自學，最終成為優秀的工程師。這些故事激發了我嘗試的勇氣，雖然挑戰很多，但我找到了屬於自己的興趣。',
  },
  {
    title: '自學',
    time: '2023.12 - 2024.11',
    content: '作為程式設計的新手，我選擇透過網路課程主動學習，配合 Google 和 ChatGPT 來解決疑問與實踐。我的目標是成為一名合格的前端工程師。',
  },
  {
    title: '願景',
    time: '2024.12 - ',
    content: '儘管我並非科班出身，我持續累積作品，學習的同時也積極尋找適合自己的前端工作機會。',
  },
];


const Timeline = () => {
  const [full, setFull] = useState(false); // 是否已達到最大狀態
  const [setHeight, setSetHeight] = useState(0); // 設定高度
  const targetY = window.innerHeight * 0.8; // 目標捲動高度
  let prevScrollY = useRef(window.scrollY); // 上一個捲動位置，使用 ref 避免重新渲染

  const timelineRef = useRef(null); // 參考時間軸的 DOM 元素
  const lineRef = useRef(null); // 參考時間軸線的 DOM 元素
  const sectionsRef = useRef([]); // 參考各個段落的 DOM 元素

  const scrollHandler = useCallback(() => {
    const scrollY = window.scrollY; // 現在捲動位置
    const up = scrollY < prevScrollY.current; // 是否向上捲動
    const down = !up; // 是否向下捲動

    const timelineRect = timelineRef.current.getBoundingClientRect(); // 取得時間軸的位置資訊
    const dist = targetY - timelineRect.top; // 距離目標位置的距離

    if (down && !full) {
      const newSetHeight = Math.max(setHeight, dist);
      lineRef.current.style.bottom = `calc(100% - ${newSetHeight}px)`; // 設定時間軸線的底部位置
      setSetHeight(newSetHeight);
    }

    if (dist > timelineRef.current.offsetHeight + 50 && !full) {
      setFull(true); // 設定已達到最大狀態
      lineRef.current.style.bottom = '-50px'; // 將時間軸線移至底部
    } 

    sectionsRef.current.forEach((item) => {
      const rect = item.getBoundingClientRect(); // 取得各個段落的位置資訊
      if (rect.top + item.offsetHeight / 5 < targetY) {
        item.classList.add('show-me'); // 加入 CSS 類別以顯示段落
      }
    });

    prevScrollY.current = window.scrollY; // 更新上一個捲動位置
  }, [full, setHeight, targetY]);

  // 進行初始化
  useEffect(() => {
    timelineRef.current = document.querySelector('.timeline');
    lineRef.current = document.querySelector('.line');
    sectionsRef.current = Array.from(document.querySelectorAll('.section'));

    window.addEventListener('scroll', scrollHandler); // 監聽捲動事件
    scrollHandler(); // 初始呼叫一次以處理初始狀態

    return () => {
      window.removeEventListener('scroll', scrollHandler); // 移除事件監聽
    };
  }, [scrollHandler]); // 將 scrollHandler 添加為依賴

  return (
    <div className="Timeline-container">
      <div className="top-section">
        <h1>Front-End's Experiences</h1>
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
  );
};

export default Timeline;



