import React, { useEffect, useState } from 'react';
import "./styles/FullscreenAnimation.css";


const FullscreenAnimation = ({ onHide, theme }) => {
    const [fading, setFading] = useState(false);

    useEffect(() => {
        const fadeTimeout = setTimeout(() => {
          setFading(true); // 設置 fading 為 true，觸發漸隱效果
        }, 900);
    
        const hideTimeout = setTimeout(() => {
          onHide(); // 在逐漸消失後調用 onHide 函數
        }, 1100);
    
        return () => {
          clearTimeout(fadeTimeout);
          clearTimeout(hideTimeout);
        };
    }, [onHide]);

    return(
        <>
            <div className={`fa-container ${fading ? 'fade-out' : ''}`} data-theme={theme}>
                <div className="text">
                    <h1>Loading...</h1>
                </div>
                <div className="loading">
                    <div className="line-box">
                        <div className="load-line"></div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default FullscreenAnimation;
