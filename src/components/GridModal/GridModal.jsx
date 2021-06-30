import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './GridModal.scss';

const backdropVariants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
  },
};

const GridModal = ({ showModal, setShowModal }) => {
  const handleClick = () => {
    setShowModal(false);
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={handleClick}
        >
          <motion.div className="modal">
            <p>
              What you are seeing here is mathematician, John Conway's{' '}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
              >
                Game of Life.
              </a>{' '}
              It is a cellular automaton meant to simulate how real life grows
              and evolves.
            </p>
            <p>This simulation operates under four rules:</p>
            <ol>
              <li>
                Any live cell with fewer than two neighbours dies, as if by
                underpopulation.
              </li>
              <li>
                Any live cell with two or three live neighbours lives on to the
                next generation.
              </li>
              <li>
                Any live cell with more than three live neighbours dies, as if
                by overpopulation.
              </li>
              <li>
                Any dead cell with exactly three live neighbours becomes a live
                cell, as if by reproduction.
              </li>
            </ol>
            <p>Play around with it, have fun, and thank you for stopping by!</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GridModal;
