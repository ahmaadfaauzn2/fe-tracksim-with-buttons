import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Radar1Button({ setOwnPlatform }) {
  const handleClick = () => {
    setOwnPlatform(false);
  };

  
  return (
    <Link to="/Radar1" onClick={handleClick}>
      <button
        style={{
          position: 'absolute',
          blockSize: '19px',  
          top: '-5px',
          left: '1320px',
          margin: '10px',
          width: '70px',
        }}
      >
        Radar1
      </button>
    </Link>
  );
}




export default Radar1Button;
