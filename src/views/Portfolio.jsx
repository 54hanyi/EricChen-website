import React from 'react';
import ProtfolioCard from '../components/ProtfolioCard';

function Protfolio({ theme }) {
  return (
    <>
      <div className="ProtfolioCard">
        <ProtfolioCard theme={theme} />
      </div>
    </>
  );
}

export default Protfolio;
