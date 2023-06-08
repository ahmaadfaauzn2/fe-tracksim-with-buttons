import React from 'react';
import { useNavigate } from 'react-router-dom';

function AIS1Button() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/AIS1');
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: 'absolute',
        blockSize: '19px',
        top: '-5px',
        left: '1390px',
        margin: '10px',
        width: '70px',
      }}
    >
      AIS1
    </button>
  );
}

export default AIS1Button;
