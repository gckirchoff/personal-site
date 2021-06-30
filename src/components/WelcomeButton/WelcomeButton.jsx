import React, { useState } from 'react';
import Goo from 'gooey-react';
import { motion, AnimatePresence } from 'framer-motion';
import './WelcomeButton.scss';

const orbOneVariants = {
  orbing: {
    scale: [1, 1.1, 0.9, 1.1, 1],
    x: [19, -8, 60, 0],
    y: [0, -5, 5, 0],
    transition: {
      duration: 11,
      yoyo: Infinity,
    },
  },
  exit: {
    scale: [1, 1.4, 1, 0],
  },
};

const orbTwoVariants = {
  orbing: {
    scale: [0.5, 0.9, 1, 0.8, 0.9],
    x: [-25, 15, -52, 10],
    y: [0, 5, -5, 0],
    transition: {
      duration: 11,
      yoyo: Infinity,
    },
  },
  exit: {
    scale: [1, 0],
  },
};

const svgContainerVariants = {
  hover: {
    scale: 1.1,
  },
  exit: {
    scale: [1, 1.4, 0],
    // transition: {
    //   ease: 'easeInOut',
    // },
  },
};

const textVariants = {
  exit: {
    opacity: 0,
  },
};

const containerVariants = {
  exit: {
    scale: [1, 1.02, 0],
  },
};

const WelcomeButton = () => {
  const [showButton, setShowButton] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showButton && (
          <motion.div
            variants={containerVariants}
            // whileHover="hover"
            exit="exit"
            className="welcome-button"
            onClick={() => setShowButton(false)}
            key="container"
          >
            <Goo intensity="strong" key="goo">
              <motion.svg
                width="150"
                height="100"
                variants={svgContainerVariants}
                whileHover="hover"
                exit="exit"
                key="svg-container"
              >
                <motion.circle
                  cx="30%"
                  cy="50%"
                  fill="orchid"
                  r="50"
                  variants={orbOneVariants}
                  animate="orbing"
                  // exit="exit"
                  key="orb-1"
                />
                <motion.circle
                  cx="70%"
                  cy="47%"
                  fill="mediumorchid"
                  r="50"
                  variants={orbTwoVariants}
                  animate="orbing"
                  // exit="exit"
                  key="orb-2"
                />
              </motion.svg>
            </Goo>
            <motion.h3
              className="welcome-button-text"
              variants={textVariants}
              exit="exit"
              key="text"
            >
              See more...
            </motion.h3>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WelcomeButton;
