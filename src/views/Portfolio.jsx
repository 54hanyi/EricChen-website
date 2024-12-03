import React from 'react';
import ProtfolioCard from '../components/ProtfolioCard';

function Protfolio({ theme }) {
  return (
    <>
      <div className='protfolio-title'>
        <h1>Protfolios</h1>
      </div>
      <div className="ProtfolioCard">
        <ProtfolioCard theme={theme} />
      </div>
    </>
  );
}

export default Protfolio;
