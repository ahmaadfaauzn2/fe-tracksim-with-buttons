import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function OwnPlatformButton({ setOwnPlatform }) {
  const handleClick = () => {
    setOwnPlatform(false);
  };

  
  return (
    <Link to="/OwnPlatform" onClick={handleClick}>
      <button
        style={{
          position: 'absolute',
          blockSize: '19px',  
          top: '-5px',
          left: '1250px',
          margin: '10px',
          width: '70px',
        }}
      >
        OwnUnit
      </button>
    </Link>
  );
}




export default OwnPlatformButton;
