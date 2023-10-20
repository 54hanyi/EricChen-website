import React from 'react';
import './styles/Home.css'
import cover from '../images/cover.jpg'
import Info from '../components/Info'

function Home() {
  return (
    <>
      <div className="cover">
        <img src={cover} alt="" />
      </div>
      <Info />
    </>
  );
}

export default Home;
