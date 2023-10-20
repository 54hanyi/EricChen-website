import React, { useEffect, useState } from 'react';
// import styled from '@emotion/styled';
import "./styles/FullscreenAnimation.css";
// import cat1 from '../images/cat1.png';
// import cat2 from '../images/cat2.png';
// import cat3 from '../images/cat3.png';

// // 使用 Emotion 的 styled 函數來定義外層容器的樣式
// const FullscreenAnimationWrapper = styled.div`
//   position: fixed; /* 使用固定定位，以便不影響原始內容的佈局 */
//   top: 0; /* 搭配'position: fixed'固定至左上角，不會因為捲動改變位子 */
//   left: 0;
//   width: 100vw; /* 視窗寬度 */
//   height: 100vh; /* 視窗高度 */
//   background-color: #222; /* 背景顏色 */
//   display: flex;
//   justify-content: center; /* 水平置中對齊 */
//   align-items: center; /* 垂直置中對齊 */
//   overflow: hidden;
//   opacity: ${({ fading }) => (fading ? 0 : 1)}; /* 透明度，用於逐漸消失效果 */
//   transition: opacity 1s ease-in-out; /* 過渡效果 */
// `;

// // 使用 Emotion 的 styled 函數來定義動畫內容的樣式
// const AnimationContent = styled.div`
//   text-align: center;
//   color: white; /* 文字顏色 */
// `;

// // 使用 Emotion 的 styled 函數來定義標題的樣式
// const Heading = styled.h1`
//   font-size: 3rem;
//   margin-bottom: 1rem; /* 底部間距 */
// `;

// // 使用 Emotion 的 styled 函數來定義副標題的樣式
// const Subheading = styled.p`
//   font-size: 1.5rem;
// `;

// const Image = styled.img`
//   max-width: 100%;
//   height: auto; /* 確保圖片正確顯示、保持原始比例 */
// `;

// const images = [cat1, cat2, cat3];

// const FullscreenAnimation = ({ onHide }) => {
//   const [fading, setFading] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     // 設置一個定時器，在 5 秒後開始逐漸消失
//     const fadeTimeout = setTimeout(() => {
//       setFading(true);
//     }, 1800);

//     const imageChangeInterval = setInterval(() => {
//       // 切換到下一張圖片
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 910);

//     const hideTimeout = setTimeout(() => {
//       onHide(); // 在逐渐消失后调用 onHide 函数
//     }, 2800);

//     // 在組件卸載時清除定時器
//     return () => {
//       clearTimeout(fadeTimeout);
//       clearInterval(imageChangeInterval);
//       clearTimeout(hideTimeout);
//     };
//   }, [onHide]);

//   return (
//     // 應用 fading 狀態以觸發逐漸消失效果
//     <FullscreenAnimationWrapper fading={fading}>
//       <AnimationContent>
//         <Heading>Welcome to My Website</Heading>
//         <Image src={images[currentImageIndex]} alt="cat" />
//         <Subheading>Enjoy the journey ahead!</Subheading>
//       </AnimationContent>
//     </FullscreenAnimationWrapper>
//   );
// };

const FullscreenAnimation = ({ onHide, theme }) => {
    const [fading, setFading] = useState(false);

    useEffect(() => {
        const hideTimeout = setTimeout(() => {
            onHide(); // 在逐漸消失後調用 onHide 函數
        }, 1100);

        return () => {
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
