import { useState, useEffect, useRef } from "react";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import Navbar from "./views/Navbar";
import Home from "./views/Home";
import About from "./views/About";
import Portfolio from "./views/Portfolio";
import Contact from "./views/Contact";
import Footer from "./views/Footer";

import ScrollToTopButton from "./components/ScrollToTopButton";
import FullscreenAnimation from "./components/FullscreenAnimation";

function App() {
  const [animationVisible, setAnimationVisible] = useState(true);
  const [show, setShow] = useState(false);
  const [theme, setTheme] = useState("light");

  const navRef = useRef(null);

  const setDarkTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    if (navRef.current) {
      navRef.current.setAttribute("data-theme", "dark");
    }
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    if (navRef.current) {
      navRef.current.setAttribute("data-theme", "light");
    }
    localStorage.setItem("selectedTheme", "light");
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setDarkTheme();
      localStorage.setItem("selectedTheme", "dark");
    } else {
      setTheme("light");
      setLightTheme();
      localStorage.setItem("selectedTheme", "light");
    }
  };

  const selectedTheme = localStorage.getItem("selectedTheme");
  useEffect(() => {
    // 在元件掛載時，檢查 localStorage 中是否儲存了使用者選擇的主題，讓網頁重新整理後，圖片也能跟著主題改變
    if (selectedTheme) {
      setTheme(selectedTheme);
    }
  }, [selectedTheme]);

  // 用來改變主題
  if (selectedTheme === "dark") {
    setDarkTheme();
  }

  // 這是用於在動畫完成後執行的函數
  const handleHideAnimation = () => {
    setAnimationVisible(false);
  };

  // 使用 useEffect 監聽 animationVisible 的變化
  useEffect(() => {
    if (!animationVisible) {
      // 當 animationVisible 變為 false 時，顯示 Navbar
      setShow(true);
    }
  }, [animationVisible]);

  return (
    <HashRouter>
      <div className="page-container">
        <div className="content-wrap">
          {animationVisible ? (
            <FullscreenAnimation onHide={handleHideAnimation} theme={theme} />
          ) : (
            <Link to="/" />
          )}
          {show && (
            <Navbar
              className="Navbar"
              theme={theme}
              toggleTheme={toggleTheme}
            />
          )}{" "}
          {/* 檢查 Show 的值，如果為 true，則顯示 Navbar */}
          {show && (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} theme={theme} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          )}
        </div>
        {show && (
          <div>
            <ScrollToTopButton />
            <Footer />
          </div>
        )}
      </div>
    </HashRouter>
  );
}

export default App;
