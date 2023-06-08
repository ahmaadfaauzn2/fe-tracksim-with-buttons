import React, {  } from 'react';
import {  Link } from 'react-router-dom';

function ADSB1Button({ setOwnPlatform }) {
  const handleClick = () => {
    setOwnPlatform(false);
  };

  
  return (
    <Link to="/ADSB1" onClick={handleClick}>
      <button
        style={{
          position: 'absolute',
          blockSize: '19px',  
          top: '-5px',
          left: '1460px',
          margin: '10px',
          width: '70px',
        }}
      >
        ADSB1
      </button>
    </Link>
  );
}




export default ADSB1Button;
