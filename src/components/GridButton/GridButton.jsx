import React from 'react';
import './GridButton.scss';

const GridButton = ({ handleClick, content }) => {
  return (
    <button className="grid-button" onClick={handleClick}>
      {content}
    </button>
  );
};

export default GridButton;
