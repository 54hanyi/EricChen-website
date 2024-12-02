import React from 'react';
import './styles/Contact.css'
// import contact_banner from '../images/contact_banner.jpg'

function Contact() {
  return (
    <>
      <div className="contact-banner">
        {/* <img src={contact_banner} alt="banner" /> */}
      </div>
      <div className="contact-container">
        <h1>有任何工作事宜歡迎聯絡：</h1>
        <div className="contact-content">
          <p>LineID： <a href='https://line.me/ti/p/BD3x9tgQjQ' target="_blank" rel="noreferrer noopener">eric870401</a></p>
          <p>Email： <a href='mailto:tp6c04u4456@gmail.com' target="_blank" rel="noreferrer noopener">tp6c04u4456@gmail.com</a></p>
          <p>Tel： <a href='tel:+886 981489362' target="_blank" rel="noreferrer noopener">+886 981489362</a></p>
          <p>Instagram： <a href='https://www.instagram.com/54hanyeeeee/?hl=zh-hk' target="_blank" rel="noreferrer noopener">54hanyeeeee</a></p>
          <p>Facebook： <a href='https://www.facebook.com/profile.php?id=100006174253487' target="_blank" rel="noreferrer noopener">陳翰毅</a></p>
          <p>Github： <a href='https://github.com/54hanyi'>54hanyi</a></p>
        </div>
      </div>
    </>
  );
}

export default Contact;
