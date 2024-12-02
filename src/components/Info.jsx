import React from 'react';
import './styles/Info.css'


const iconData = [
  { img: `${process.env.PUBLIC_URL}/images/icons/html5.png`, alt: 'html5' },
  { img: `${process.env.PUBLIC_URL}/images/icons/css3.png`, alt: 'css3' },
  { img: `${process.env.PUBLIC_URL}/images/icons/sass.png`, alt: 'sass' },
  { img: `${process.env.PUBLIC_URL}/images/icons/tailwind.png`, alt: 'tailwind CSS' },
  { img: `${process.env.PUBLIC_URL}/images/icons/materialUI.png`, alt: 'Material UI' },
  { img: `${process.env.PUBLIC_URL}/images/icons/bootstrap.png`, alt: 'bootstrap' },
  { img: `${process.env.PUBLIC_URL}/images/icons/js.png`, alt: 'js' },
  { img: `${process.env.PUBLIC_URL}/images/icons/ts.png`, alt: 'ts' },
  { img: `${process.env.PUBLIC_URL}/images/icons/react.png`, alt: 'react' },
  { img: `${process.env.PUBLIC_URL}/images/icons/next.png`, alt: 'nextjs' },
  { img: `${process.env.PUBLIC_URL}/images/icons/vite.png`, alt: 'vite' },
  { img: `${process.env.PUBLIC_URL}/images/icons/git.png`, alt: 'git' },
];

function Info() {
  return (
    <>
      <div className="info-container">
        <div className="info-image">
          <img src={`${process.env.PUBLIC_URL}/images/Me.png`} alt="ME" />
        </div>
        <div className="info">
          <h1>陳翰毅 Eric Chen</h1>
          <p>求職目標：Front-end developer 前端工程師</p>
          {/* <p>生日：1998/04/01</p>
          <p>性別：男</p> */}
          {/* <p>連絡電話：+886 981489362</p> */}
          <p>學歷：靜宜大學 - 觀光事業學系</p>
          <p>相關年資：尚無 (其他工作經驗：2年)</p>
          {/* <p>通訊地址：台北市內湖區</p> */}
          <p>專業技能：</p>
          <div className="row">
            {iconData.map((link, index) => (
            <div key={index}>
              <a href={link.href} target="_blank" rel="noreferrer noopener">
                <img src={link.img} alt={link.alt} />
              </a>
            </div>
            ))}
          </div>
          <p>個性：樂觀開朗、認真負責、熱愛學習、享受挑戰</p>
        </div>
      </div>
      <div className="intro">
        <p>
          Hello!我是陳翰毅，畢業於靜宜大學觀光事業學系。
          我原本從事餐飲服務兩年。性格上我開朗樂觀，喜愛學習新事物且樂於接受挑戰。
          過去在服務業中，我學會了如何與人溝通、解決問題，這些經驗也培養了我的責任感和執行力。
        </p>
        <p>
          在網路的發達以及身邊朋友的渲染下，我認識了程式設計，發現程式開發可以讓我把天馬行空的想法化為具體的成果，讓我非常興奮，並從中獲得成就感。
          於是我決定嘗試自學轉職，投入前端開發，並逐步掌握了 HTML、CSS、JavaScript 以及 React 等技術，完成一些小型專案，如天氣查詢工具和訂房系統等等。
        </p>
        <p>
          儘管目前我還在持續努力的學習中，但我對程式開發的熱情與成就感驅使著我不斷進步，目標是成為一位具備創新和解決問題能力的前端工程師，為公司與團隊的成功做出貢獻！
        </p>
      </div>
    </>
  );
}

export default Info;
