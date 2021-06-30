import React from 'react';
import './WelcomePage.scss';
import Grid from '../../components/Grid/Grid';
import { motion } from 'framer-motion';

const welcomePageVariants = {
  exit: {
    opacity: 0,
    transition: {
      duration: 2.75,
      ease: 'easeIn',
    },
  },
};

const WelcomePage = () => {
  return (
    <motion.div
      className="welcome-page"
      variants={welcomePageVariants}
      exit="exit"
    >
      <Grid numRows={25} numCols={80} gridViewWidthPercent={97.5} />
    </motion.div>
  );
};

export default WelcomePage;
