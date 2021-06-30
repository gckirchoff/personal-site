import React from 'react';
import { motion } from 'framer-motion';

const mainPageVariants = {
  exit: {
    opacity: 0,
    transition: {
      duration: 5,
      ease: [0, 1.03, 0, 1.03],
    },
  },
};

const MainPage = () => {
  return (
    <motion.div
    // variants={mainPageVariants}
    // exit="exit"
    >
      Main Page
    </motion.div>
  );
};

export default MainPage;
