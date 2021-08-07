import React from 'react';
import './GridButton.scss';
import { motion } from 'framer-motion';

const gridButtonVariants = {
  exit: {
    scale: [1, 1.1, 0],
  },
};

const GridButton = ({ handleClick, content, big }) => {
  return (
    <motion.button
      className={`grid-button ${big ? 'big' : ''}`}
      onClick={handleClick}
      variants={big ? gridButtonVariants : ''}
      exit="exit"
    >
      {content}
    </motion.button>
  );
};

export default GridButton;
