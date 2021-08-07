import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import './MainPage.scss';
import portrait from '../../assets/gregory-picture.jpg';
import formalPortrait from '../../assets/gregory-picture-formal.jpeg';
import bacterifind from '../../assets/bacterifind.png';
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
    >
      <div className="main-page">
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
          <img src={portrait} alt="Portrait of Gregory" />
        </div>
      </div>
      <div className="about-me-section">
        <div className="image-stuff">
          <div className="formal-portrait-container">
            <img
              className="formal-portrait"
              src={formalPortrait}
              alt="Portrait of Gregory"
            />
          </div>
        </div>
        <div className="about-me-card">
          <h1 className="about-me-header">About Me</h1>
          <p>
            I grew up in the state of New York, which exposed me to the perfect
            combination of nature and city life. Being especially drawn to the
            nature half, I was drawn toward the life sciences. This lead to me
            majoring in Microbiology at the University of Rochester. However, I
            wanted to go beyond theory and apply my knowledge to the real world.
            During my studies, I put my knowledge to work by working on an
            ambulance and becoming a physical trainer. Then I discovered
            computer science. It feels like everything I learn translates into
            something I can do and I love it. {'\n'} When not programming, I
            enjoy hiking, playing piano, and teaching my cat, Amadeus, tricks.
          </p>
          <ul className="social-media">
            <li>
              <a href="https://github.com/gckirchoff">Github</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/gregory-kirchoff/">
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="projects-section">
        <h1>Projects</h1>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img src={bacterifind} alt="Bacterifind" />
            </div>
            <h2 className="project-title">Bacterifind</h2>
            <div>
              <p>This project is a project</p>
            </div>
            <div className="tech-used">
              <p>React</p>
              <p>Redux</p>
              <p>Nodejs</p>
              <p>Express</p>
              <p>MongoDB</p>
            </div>
          </div>
        </div>
      </div> */}
    </motion.div>
  );
};

export default MainPage;
