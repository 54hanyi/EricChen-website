import { useState, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './styles/Navbar.css';
import ThemeButtom from '../components/ThemeButtom';


function Navbar({ theme, toggleTheme }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const formRef = useRef(null);
    
    const handleAndScrolMenu = () => {
        window.scrollTo(0, 0); // 讓頁面跳轉到最頂端
        setMenuOpen(!menuOpen)
    };

    const handleMenu = () => {
        setMenuOpen(!menuOpen)
    };

    const ScrollTop= () => {
        window.scrollTo(0, 0); 
    };


    // 添加事件監聽器，以關閉表單
    useEffect(() => {
        const handleClickOutside = (event) => {
            // formRef.current 來訪問這個元素或執行相關的操作
            // 先檢查 formRef.current 是否存在且不為 null(只要有將ref={formRef}綁定在元素內)
            // formRef.current.contains(event.target)用於檢查 event.target（點擊事件的目標元素）是否位於 formRef 中
            if (formRef.current && !formRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);  // 每當點擊事件發生時，都會呼叫 handleClickOutside 函數
        return () => {
            document.removeEventListener('click', handleClickOutside); // 移除之前註冊的點擊事件監聽器
        };
    }, []);
    
  return (
    <>
        <nav data-theme={theme}>
            <div ref={formRef} className='toggle-btn' onClick={handleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="logo" onClick={ScrollTop}><Link to="/">EricChen.Dev</Link></div>
            <div className="menu-wrapper">
                <ul className={menuOpen ? "open" : ""}>
                    <li><NavLink to="/" onClick={handleAndScrolMenu}>Home</NavLink></li>
                    <li><NavLink to="/about" onClick={handleAndScrolMenu}>Experience</NavLink></li>
                    <li><NavLink to="/portfolio" onClick={handleAndScrolMenu}>Portfolios</NavLink></li>
                    {/* <li><NavLink to="/contact" onClick={handleAndScrolMenu}>contact</NavLink></li> */}
                </ul>  
            </div>
            <ThemeButtom theme={theme} toggleTheme={toggleTheme} />
        </nav>
    </>
  );
}

export default Navbar;
