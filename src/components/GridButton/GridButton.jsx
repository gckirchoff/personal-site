import React from 'react';
import './GridButton.scss';

const GridButton = ({ handleClick, content, big }) => {
  return (
    <button className={`grid-button ${big ? 'big' : ''}`} onClick={handleClick}>
      {content}
    </button>
  );
};

export default GridButton;
