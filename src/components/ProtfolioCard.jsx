import React from 'react';
import './styles/ProtfolioCard.css';
import ya from '../images/ya.png';
import react_weather_app from '../images/react-weather-app.jpg';
import react_fiverr from "../images/react-fiverr.jpg";

const cardData = [
    {
        title: 'react_fiverr',
        body: '名為"接包吧"的接案網站UI',
        href: 'https://54hanyi.github.io/react-fiverr/',
        imageSrc: react_fiverr, 
    },
    {
      title: 'react-weather-app',
      body: '一個小型簡易的響應式氣象網頁',
      href: 'https://54hanyi.github.io/react-weather-app/',
      imageSrc: react_weather_app, 
    },
    {
        title: 'ya我真Q',
        body: '我是一隻牛逼得老鼠，會比耶哈哈哈哈哈我超屌，這樣的老鼠你會幾點回家？',
        href: 'https://www.youtube.com/',
        imageSrc: ya, 
    },
    {
        title: 'ya我真Q',
        body: '我是一隻牛逼得老鼠，會比耶哈哈哈哈哈我超屌，這樣的老鼠你會幾點回家？',
        href: 'https://www.youtube.com/',
        imageSrc: ya, 
    },
    {
        title: 'ya我真Q',
        body: '我是一隻牛逼得老鼠，會比耶哈哈哈哈哈我超屌，這樣的老鼠你會幾點回家？',
        href: 'https://www.youtube.com/',
        imageSrc: ya, 
    },
  ];

function ProtfolioCard() {

  return (
    <>
        {cardData.map((card, index) => (
            <div key={index} className="card-container">
                <div className="image-container">
                <img src={card.imageSrc} alt="" />
                </div>
                <div className="card-content">
                <div className="card-title">
                    <h2>{card.title}</h2>
                </div>
                <div className="card-body">
                    <p>{card.body}</p>
                </div>
                </div>
                <div className="see-btn">
                <button>
                    <a href={card.href} target="_blank" rel="noreferrer noopener">讓我看看</a>
                    {/* 添加` target="_blank" rel="noreferrer noopener" `有助於防止惡意網站通過`window.opener`訪問自己的網站 */}
                </button>
                </div>
            </div>
        ))}
    </>
  )
}

export default ProtfolioCard;