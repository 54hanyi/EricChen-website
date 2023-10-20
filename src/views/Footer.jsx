import React from 'react';
import './styles/Footer.css';
import lineImg from '../images/line.png'
import facebookImg from '../images/facebook.png';
import instagramImg from '../images/instagram.png';
import mailImg from '../images/mail.png';
import telImg from '../images/tel.png';
import githubImg from '../images/github.png'


const colData = [
  { href: 'https://github.com/54hanyi', img: githubImg, alt: 'github' },
  { href: 'https://www.facebook.com/profile.php?id=100006174253487', img: facebookImg, alt: 'facebook' },
  { href: 'https://www.instagram.com/54hanyeeeee/?hl=zh-hk', img: instagramImg, alt: 'instagram' },
  { href: 'https://line.me/ti/p/BD3x9tgQjQ', img: lineImg, alt: 'line' },
  { href: 'mailto:tp6c04u4456@gmail.com', img: mailImg, alt: 'gmail' },
  { href: 'tel:+886 981489362', img: telImg, alt: 'tel' },
];

function Footer() {

  return (
      <div className="footer-container">
        <div className="row">
          {colData.map((link, index) => (
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