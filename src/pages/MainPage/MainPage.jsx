import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import './MainPage.scss';
import portrait from '../../assets/gregory-picture.jpg';
import { ReactComponent as BlobSvg } from '../../assets/blob.svg';
import { ReactComponent as EllipseSvg } from '../../assets/ellipse.svg';

const mainPageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const MainPage = () => {
  const orbRef = useRef(null);
  const [orbHeight, setOrbHeight] = useState(0);

  useEffect(() => {
    const width = orbRef.current.offsetWidth;
    setOrbHeight(width);
  }, [orbHeight]);

  return (
    <motion.div
      variants={mainPageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="main-page"
    >
      <div className="orb" ref={orbRef} style={{ height: orbHeight }} />
      <div className="blob-svg">
        <BlobSvg />
        <EllipseSvg className="ellipse-svg" />
      </div>
      <h1 className="name-header">Gregory Kirchoff</h1>
      <h3 className="sub-header">
        Full stack developer with a good dose of microbiology and animal facts
      </h3>
      <div className="portrait">
        <img src={portrait} alt="hey" />
      </div>
      {/* <div>
        <h2>About me</h2>
      </div>
      <div>
        <h2>About me</h2>
      </div> */}
    </motion.div>
  );
};

export default MainPage;
