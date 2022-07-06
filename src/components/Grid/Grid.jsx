import React, { useState, useCallback, useRef } from 'react';
import './Grid.scss';
import produce from 'immer';
import WelcomeButton from '../WelcomeButton/WelcomeButton';
import GridButton from '../GridButton/GridButton';
import DelayLink from '../utilities/DelayLink';
import GridModal from '../GridModal/GridModal';
import { AnimatePresence } from 'framer-motion';

// const numRows = 3;
// const numCols = 15;
// const gridViewWidthPercent = 90;

const operations = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

const welcomePoints = {
  '6,4': true,
  '7,4': true,
  '8,4': true,
  '9,5': true,
  '10,5': true,
  '11,5': true,
  '12,5': true,
  '13,6': true,
  '14,6': true,
  '15,6': true,
  '16,7': true,
  '15,8': true,
  '14,8': true,
  '13,8': true,
  '12,9': true,
  '11,9': true,
  '10,9': true,
  '9,10': true,
  '10,11': true,
  '11,11': true,
  '12,11': true,
  '13,12': true,
  '14,12': true,
  '15,12': true,
  '16,13': true,
  '15,14': true,
  '14,14': true,
  '13,14': true,
  '12,15': true,
  '11,15': true,
  '10,15': true,
  '9,15': true,
  '8,16': true,
  '7,16': true,
  '6,16': true,
  '12,19': true,
  '13,19': true,
  '14,19': true,
  '15,19': true,
  '16,20': true,
  '16,21': true,
  '16,22': true,
  '13,20': true,
  '13,21': true,
  '13,22': true,
  '13,23': true,
  '12,23': true,
  '11,22': true,
  '11,21': true,
  '11,20': true,
  '16,26': true,
  '15,26': true,
  '14,26': true,
  '13,26': true,
  '12,26': true,
  '11,26': true,
  '10,26': true,
  '9,26': true,
  '8,26': true,
  '7,26': true,
  '6,26': true,
  '11,32': true,
  '11,31': true,
  '11,30': true,
  '12,29': true,
  '13,29': true,
  '14,29': true,
  '15,29': true,
  '16,30': true,
  '16,31': true,
  '16,32': true,
  '12,35': true,
  '13,35': true,
  '14,35': true,
  '15,35': true,
  '16,36': true,
  '16,37': true,
  '16,38': true,
  '15,39': true,
  '14,39': true,
  '13,39': true,
  '12,39': true,
  '11,38': true,
  '11,37': true,
  '11,36': true,
  '11,42': true,
  '12,42': true,
  '13,42': true,
  '14,42': true,
  '15,42': true,
  '16,42': true,
  '12,43': true,
  '11,44': true,
  '12,45': true,
  '13,45': true,
  '14,45': true,
  '15,45': true,
  '16,45': true,
  '11,46': true,
  '12,47': true,
  '13,47': true,
  '14,47': true,
  '15,47': true,
  '16,47': true,
  '12,50': true,
  '13,50': true,
  '14,50': true,
  '15,50': true,
  '16,51': true,
  '16,52': true,
  '16,53': true,
  '13,51': true,
  '13,52': true,
  '13,53': true,
  '13,54': true,
  '12,54': true,
  '11,53': true,
  '11,52': true,
  '11,51': true,
  '6,57': true,
  '7,57': true,
  '8,57': true,
  '9,57': true,
  '10,57': true,
  '11,57': true,
  '12,57': true,
  '13,57': true,
  '16,57': true,
  '9,61': true,
  '9,62': true,
  '11,62': true,
  '6,63': true,
  '8,63': true,
  '9,63': true,
  '10,63': true,
  '5,64': true,
  '11,64': true,
  '15,64': true,
  '6,65': true,
  '8,65': true,
  '12,65': true,
  '13,65': true,
  '14,65': true,
  '16,65': true,
  '10,66': true,
  '12,66': true,
  '15,66': true,
  '6,67': true,
  '8,67': true,
  '12,67': true,
  '16,67': true,
  '5,68': true,
  '11,68': true,
  '15,68': true,
  '6,69': true,
  '8,69': true,
  '9,69': true,
  '10,69': true,
  '11,69': true,
  '15,69': true,
  '9,70': true,
  '11,70': true,
  '15,70': true,
  '16,70': true,
  '9,71': true,
  '11,71': true,
  '14,71': true,
  '16,71': true,
  '11,72': true,
  '16,72': true,
  '11,73': true,
  '14,73': true,
  '15,73': true,
  '12,74': true,
  '15,74': true,
  '7,75': true,
  '11,75': true,
  '13,75': true,
  '14,75': true,
  '4,76': true,
  '6,76': true,
  '8,76': true,
  '10,76': true,
  '5,77': true,
  '9,77': true,
};

const thankYouGridPoints = {
  // T
  '6,1': true,
  '6,2': true,
  '6,3': true,
  '6,4': true,
  '6,5': true,
  '6,6': true,
  '6,7': true,
  '6,8': true,
  '6,9': true,
  '7,5': true,
  '8,5': true,
  '9,5': true,
  '10,5': true,
  '11,5': true,
  '12,5': true,
  '13,5': true,
  '14,5': true,
  '15,5': true,
  '16,5': true,
  // h
  '6,12': true,
  '7,12': true,
  '8,12': true,
  '9,12': true,
  '10,12': true,
  '11,12': true,
  '12,12': true,
  '13,12': true,
  '14,12': true,
  '15,12': true,
  '16,12': true,
  '12,13': true,
  '11,14': true,
  '11,15': true,
  '12,16': true,
  '13,16': true,
  '14,16': true,
  '15,16': true,
  '16,16': true,
  // a
  '12,19': true,
  '13,19': true,
  '14,19': true,
  '15,19': true,
  '11,20': true,
  '11,21': true,
  '11,22': true,
  '12,23': true,
  '13,23': true,
  '14,23': true,
  '15,23': true,
  '16,20': true,
  '16,21': true,
  '16,22': true,
  '16,23': true,
  // n
  '11,26': true,
  '12,26': true,
  '13,26': true,
  '14,26': true,
  '15,26': true,
  '16,26': true,
  '12,27': true,
  '11,28': true,
  '11,29': true,
  '12,30': true,
  '13,30': true,
  '14,30': true,
  '15,30': true,
  '16,30': true,
  // k
  '6,33': true,
  '7,33': true,
  '8,33': true,
  '9,33': true,
  '10,33': true,
  '11,33': true,
  '12,33': true,
  '13,33': true,
  '14,33': true,
  '15,33': true,
  '16,33': true,
  '13,34': true,
  '12,35': true,
  '11,36': true,
  '10,37': true,
  '14,35': true,
  '15,36': true,
  '16,37': true,
  // Y
  '6,40': true,
  '7,41': true,
  '8,42': true,
  '9,43': true,
  '10,44': true,
  '9,45': true,
  '8,46': true,
  '7,47': true,
  '6,48': true,
  '11,44': true,
  '12,44': true,
  '13,44': true,
  '14,44': true,
  '15,44': true,
  '16,44': true,
  // o
  '12,47': true,
  '13,47': true,
  '14,47': true,
  '15,47': true,
  '11,48': true,
  '11,49': true,
  '11,50': true,
  '12,51': true,
  '13,51': true,
  '14,51': true,
  '15,51': true,
  '16,48': true,
  '16,49': true,
  '16,50': true,
  // u
  '11,54': true,
  '12,54': true,
  '13,54': true,
  '14,54': true,
  '15,54': true,
  '16,55': true,
  '16,56': true,
  '16,57': true,
  '11,58': true,
  '12,58': true,
  '13,58': true,
  '14,58': true,
  '15,58': true,
  '16,59': true,

  // cat
  '9,61': true,
  '9,62': true,
  '11,62': true,
  '6,63': true,
  '8,63': true,
  '9,63': true,
  '10,63': true,
  '5,64': true,
  '11,64': true,
  '15,64': true,
  '6,65': true,
  '8,65': true,
  '12,65': true,
  '13,65': true,
  '14,65': true,
  '16,65': true,
  '10,66': true,
  '12,66': true,
  '15,66': true,
  '6,67': true,
  '8,67': true,
  '12,67': true,
  '16,67': true,
  '5,68': true,
  '11,68': true,
  '15,68': true,
  '6,69': true,
  '8,69': true,
  '9,69': true,
  '10,69': true,
  '11,69': true,
  '15,69': true,
  '9,70': true,
  '11,70': true,
  '15,70': true,
  '16,70': true,
  '9,71': true,
  '11,71': true,
  '14,71': true,
  '16,71': true,
  '11,72': true,
  '16,72': true,
  '11,73': true,
  '14,73': true,
  '15,73': true,
  '12,74': true,
  '15,74': true,
  '7,75': true,
  '11,75': true,
  '13,75': true,
  '14,75': true,
  '4,76': true,
  '6,76': true,
  '8,76': true,
  '10,76': true,
  '5,77': true,
  '9,77': true,
};

const Grid = ({
  numRows,
  numCols,
  gridViewWidthPercent,
  enableSeeMoreButton = false,
}) => {
  // Create first grid with welcome
  const createFirstGrid = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => false));
    }

    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        if (`${i},${j}` in thankYouGridPoints) {
          rows[i][j] = true;
        }
      }
    }
    return rows;
  };

  // Generate a new, clear grid
  const createNewGrid = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => false));
    }
    return rows;
  };

  //   State
  const [running, setRunning] = useState(false);
  const [grid, setGrid] = useState(() => createFirstGrid());
  const [speed, setSpeed] = useState(0.08);
  const [showModal, setShowModal] = useState(false);
  const [showSeeMoreButton, setShowSeeMoreButton] = useState(true);

  const createRandomGrid = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(
        Array.from(Array(numCols), () => (Math.random() > 0.8 ? true : false))
      );
    }
    setGrid(rows);
  };

  const runningRef = useRef();
  runningRef.current = running;

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }

    setGrid((currentGrid) => {
      return produce(currentGrid, (gridCopy) => {
        for (let i = 0; i < numRows; i++) {
          for (let j = 0; j < numCols; j++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newJ = j + y;
              if (
                newI >= 0 &&
                newI < numRows &&
                newJ >= 0 &&
                newJ < numCols &&
                currentGrid[newI][newJ]
              ) {
                neighbors += 1;
              }
            });

            // If fewer neighbors than 2 or more than 3, cell dies
            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][j] = false;

              // Dead cell with three neighbors becomes a live cell
            } else if (!gridCopy[i][j] && neighbors === 3) {
              gridCopy[i][j] = true;
            }
          }
        }
      });
    });

    setTimeout(runSimulation, Number(speed) * 1000);
  }, [numRows, numCols, speed]);

  //   Toggle simulation
  const handleClickStart = (isSeeMoreButton) => {
    setRunning(!running);
    if (!running) {
      runningRef.current = true;
      runSimulation();
    } else {
      runningRef.current = false;
    }
    if (isSeeMoreButton) {
      setShowSeeMoreButton(false);
    }
  };

  //   Adjust speed of simulation
  const handleChangeSpeed = (e) => {
    setSpeed(e.target.value);
  };

  return (
    <div className="grid-container">
      <GridModal showModal={showModal} setShowModal={setShowModal} />
      <div
        className="grid"
        style={{
          width: `${gridViewWidthPercent}%`,
          display: 'grid',
          gridTemplateColumns: `repeat(${numCols}, 1fr)`,
        }}
      >
        {grid.map((rows, i) =>
          rows.map((col, j) => (
            <div
              key={`${i}-${j}`}
              className="square"
              style={{
                paddingBottom: '100%',
                backgroundColor: grid[i][j] ? 'aquamarine' : undefined,
                border: grid[i][j]
                  ? '1px solid rgba(240, 255, 255,0.5)'
                  : '1px solid rgba(186,85,211,.5)',
              }}
              onClick={() => {
                const newGrid = produce((gridCopy) => {
                  gridCopy[i][j] = !gridCopy[i][j];
                  console.log(i, j);
                });
                setGrid(newGrid);
              }}
            />
          ))
        )}
      </div>
      <div className="grid-menu-container">
        <div className="grid-buttons-container">
          <GridButton
            handleClick={() => handleClickStart(false)}
            content={running ? 'Stop' : 'Start'}
          />
          <GridButton
            handleClick={() => setGrid(createNewGrid)}
            content="Clear"
          />
          <GridButton handleClick={createRandomGrid} content="Randomize" />
          <label>
            Speed (sec): &nbsp;
            <input
              className="speed-input"
              type="number"
              value={speed}
              onChange={handleChangeSpeed}
            />
          </label>
        </div>
        <p onClick={() => setShowModal(true)} className="explanation">
          What is this?
        </p>
      </div>
      <div className="welcome-button-container">
        <DelayLink
          // delay={5000}
          onDelayStart={() => handleClickStart(true)}
          to="about"
          className="link"
        >
          <AnimatePresence>
            {enableSeeMoreButton && showSeeMoreButton && (
              <GridButton content="Continue to Portfolio" big />
            )}
          </AnimatePresence>
        </DelayLink>
      </div>
    </div>
  );
};

export default Grid;
