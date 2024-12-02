import React from 'react';
import './styles/Footer.css';


const iconData = [
  { href: 'https://github.com/54hanyi', img: `${process.env.PUBLIC_URL}/images/icons/github.png`, alt: 'github' },
  { href: 'https://line.me/ti/p/BD3x9tgQjQ', img: `${process.env.PUBLIC_URL}/images/icons/line.png`, alt: 'line' },
  { href: 'mailto:tp6c04u4456@gmail.com', img: `${process.env.PUBLIC_URL}/images/icons/mail.png`, alt: 'gmail' },
  { href: 'tel:+886 981489362', img: `${process.env.PUBLIC_URL}/images/icons/tel.png`, alt: 'tel' },
  { href: 'https://www.facebook.com/profile.php?id=100006174253487', img: `${process.env.PUBLIC_URL}/images/icons/facebook.png`, alt: 'facebook' },
  { href: 'https://www.instagram.com/54hanyeeeee/?hl=zh-hk', img: `${process.env.PUBLIC_URL}/images/icons/instagram.png`, alt: 'instagram' },
];


function Footer() {

  return (
      <div className="footer-container">
        <div className='contact'>Contact me</div>
        <div className="row">
          {iconData.map((link, index) => (
          <div key={index}>
            <a href={link.href} target="_blank" rel="noreferrer noopener">
              <img src={link.img} alt={link.alt} />
            </a>
          </div>
          ))}
        </div>
        <div className="row">
          <p className="welcome">
            &#9758; {new Date().getFullYear()} Hello I'm EricChen | Learning to be a nice Front-end developer | Nice to meet you &#9786;
          </p>
        </div>
      </div>
  )
}

export default Footer;