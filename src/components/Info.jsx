import React from 'react';
import './styles/Info.css'
import me from '../images/Me.png'

function Info() {
  return (
    <>
      <div className="info-container">
        <div className="info-image">
          <img src={me} alt="ME" />
        </div>
        <div className="info">
          <h2>陳翰毅 Eric</h2>
          <p>生日：1998/04/01</p>
          <p>性別：男</p>
          <p>通訊地址：台北市內湖區</p>
          <p>連絡電話：+886 981489362</p>
          <p>學歷：靜宜大學 - 觀光事業學系</p>
          <p>相關年資：尚無 (其他工作經驗：2年)</p>
          <p>求職目標：前端工程師</p>
          <p>專業技能：</p>
          <p style={{color:'red'}}>HTML/CSS, JavaScript, Ajax, React Hook, git, RWD, webpack</p>
          <p>個性：樂觀開朗、認真負責、熱愛學習</p>
        </div>
      </div>
      <div className="intro">
        <p>
        Hi，我是陳翰毅Eric，畢業於靜宜大學觀光事業學系，個性開朗樂觀，樂於學習新事物且負責任，原本對於餐飲業有興趣的我，從事了餐飲服務兩年左右；因緣際會下接觸到了程式設計，發現程式裡面更能夠滿足喜歡天馬行空的我，進而想要轉換跑道試試自己的能耐，無相關經驗的我奮發自學，期待自己能夠成為一位優秀的前端工程師！
        </p>
      </div>
    </>
  );
}

export default Info;
