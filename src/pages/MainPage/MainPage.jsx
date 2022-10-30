import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import './MainPage.scss';
import portrait from '../../assets/gregory-picture.jpg';
import formalPortrait from '../../assets/gregory-picture-formal.jpeg';
import bacterifind from '../../assets/bacterifind.png';
import ecmanoteScreenshot from '../../assets/ecmanote-screenshot.png';
import catChatScreenshot from '../../assets/cat-chat-screenshot.png';
import dsLogo from '../../assets/ds.png';
import waggleDance from '../../assets/waggledance.png';
import resume from '../../assets/resume-07-11-2022.pdf';
import { ReactComponent as BlobSvg } from '../../assets/blob.svg';
import { ReactComponent as EllipseSvg } from '../../assets/ellipse.svg';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFilePdf } from 'react-icons/fa';
import Grid from '../../components/Grid/Grid';

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
    title: 'Waggle Dance',
    image: waggleDance,
    description:
      'A simulation of how returning honey bees communicate foraging locations to their hive.',
    sourceCodeSiteName: ['Github'],
    sourceCodeSpecificty: [' Source'],
    sourceCodeLink: ['https://github.com/gckirchoff/bee-dance'],
    siteUrl: 'https://waggledance.netlify.app/',
  },
  {
    title: 'ds',
    image: dsLogo,
    description:
      'ds (short for data structures) is an easy to use, light weight library for implementing various generic data structures such as BSTs, tries, and linked lists in Golang.',
    sourceCodeSiteName: ['Github'],
    sourceCodeSpecificty: [' Source'],
    sourceCodeLink: ['https://github.com/gckirchoff/ds'],
    siteUrl: '',
  },
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
    title: 'Cat Chat',
    image: catChatScreenshot,
    description:
      "A MERNG stack social media app that only allows users to post pictures of cats. Binary classification neural network built using Keras and Tensorflow. User submitted photos stored in AWS' S3.",
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
          Software developer with a good dose of microbiology and animal facts
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
            Drawn to nature and applied sciences from a young age, I was the
            kind of kid who read nature encyclopedias front-to-back. I became
            interested in health sciences as a teenager and began work as a
            medical lab technician, EMT, and physical trainer. Soon after, I
            decided to major in Microbiology on a pre-med track at the
            University of Rochester. However, I found that my passion is using
            what I learn to innovate. I soon discovered computer science, a
            field in which any new skill gathered is a tool that can immediately
            be put to use. When not programming, I enjoy hiking, playing piano,
            and teaching my cat, Amadeus, tricks.
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
      <div style={{ marginTop: '30vh' }}>
        {/* <p style={{ paddingLeft: '1.7%', margin: '20vh 0 25px 0' }}>
          Thank you for visiting! Here's an interactive simulation of John Conway's Game of Life to play with.
        </p> */}
        <Grid numRows={25} numCols={80} gridViewWidthPercent={97.5} />
      </div>
    </motion.div>
  );
};

export default MainPage;
