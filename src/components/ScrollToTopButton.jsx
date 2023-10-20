import React, { useState,useEffect } from 'react';
import './styles/ScrollToTopButton.css';
import up from '../images/up-arrow.png'

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // 若螢幕下滑高度>100才顯示按鈕
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // 平滑滚動到頁面最上方
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // 組件掛載時，監聽滾動事件
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // 根据isVisible的狀態來顯示or隐藏按鈕
    isVisible && (
        <button className="scroll-to-top-button" onClick={scrollToTop}>
            <img src={up} alt="Scroll to Top" />
        </button>
    )   
  );
}

export default ScrollToTopButton;
