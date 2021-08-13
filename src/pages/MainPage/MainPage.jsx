import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import './MainPage.scss';
import portrait from '../../assets/gregory-picture.jpg';
import formalPortrait from '../../assets/gregory-picture-formal.jpeg';
import bacterifind from '../../assets/bacterifind.png';
import ecmanoteScreenshot from '../../assets/ecmanote-screenshot.png';
import catChatScreenshot from '../../assets/cat-chat-screenshot.png';
import resume from '../../assets/gregory-resume.pdf';
import { ReactComponent as BlobSvg } from '../../assets/blob.svg';
import { ReactComponent as EllipseSvg } from '../../assets/ellipse.svg';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFilePdf } from 'react-icons/fa';

const mainPageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const projects = [
  {
    title: 'Bacterifind',
    image: bacterifind,
    description:
      'A MERN app created with the goal of helping scientists characterize, identify, and research Enterobacteriaceae and other gram negative, oxidase negative bacteria.',
    sourceCodeSiteName: ['Github', 'Github'],
    sourceCodeSpecificty: [' Frontend', ' Backend'],
    sourceCodeLink: [
      'https://github.com/gckirchoff/bacterifind-frontend',
      'https://github.com/gckirchoff/bacterifind-backend',
    ],
    siteUrl: 'https://fast-temple-25827.herokuapp.com/',
  },
  {
    title: 'Ecmanote',
    image: ecmanoteScreenshot,
    description:
      'A locally hosted React app, served by a CLI. This app allows users to write markdown and compile Javascript that gets run live in the browser as you type, all while writing those changes to the file system. Great for studying data structures and algorithms.',
    sourceCodeSiteName: ['Github'],
    sourceCodeSpecificty: [' Source'],
    sourceCodeLink: ['https://github.com/gckirchoff/ecmanote'],
    siteUrl: 'https://www.npmjs.com/package/ecmanote',
  },
  {
    title: 'Cat Chat',
    image: catChatScreenshot,
    description:
      'A MERN app created with the goal of helping scientists characterize, identify, and research Enterobacteriaceae and other gram negative, oxidase negative bacteria.',
    sourceCodeSiteName: ['Github', 'Github', 'Github'],
    sourceCodeSpecificty: [' Frontend', ' Backend', ' ML API'],
    sourceCodeLink: [
      'https://github.com/gckirchoff/cat-chat-client',
      'https://github.com/gckirchoff/cat-chat-backend',
      'https://github.com/gckirchoff/cat-chat-flask-api',
    ],
    siteUrl: 'https://youthful-raman-950e3d.netlify.app/',
  },
];

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
        </div>
      </div>
      <div className="projects-section">
        <h1>Projects</h1>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </div>
      <footer className="contact">
        <h1>Contact</h1>
        <h3 className="email">gckirchoff@gmail.com</h3>
        <div className="contact-links-container">
          <a
            className="media-link"
            href="https://www.linkedin.com/in/gregory-kirchoff/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            className="media-link"
            href="https://github.com/gckirchoff"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> Github
          </a>
          <a
            className="media-link"
            href={resume}
            target="_blank"
            rel="noreferrer"
          >
            <FaFilePdf /> Resume
          </a>
        </div>
      </footer>
    </motion.div>
  );
};

export default MainPage;
