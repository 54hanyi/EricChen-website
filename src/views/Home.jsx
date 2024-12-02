import React from 'react';
import './styles/Home.css'
import Info from '../components/Info'

function Home() {
  return (
    <>
      <div className="cover">
        <img src={`${process.env.PUBLIC_URL}/images/cover.jpg`} alt="" />
      </div>
      <Info />
    </>
  );
}

export default Home;
