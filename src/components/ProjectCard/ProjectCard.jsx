import React from 'react';

import './ProjectCard.scss';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({
  project: {
    title,
    image,
    description,
    sourceCodeSiteName,
    sourceCodeSpecificty,
    sourceCodeLink,
    siteUrl,
  },
}) => {
  return (
    <div className="project-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="card-content">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <div className="project-buttons-container">
          {siteUrl && (
            <a
              className="project-link-button margin-right-small"
              href={siteUrl}
              target="_blank"
              rel="noreferrer"
            >
              Visit
            </a>
          )}

          {sourceCodeLink.map((link, i) => (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="project-link-button margin-right-small margin-bottom-small"
            >
              {sourceCodeSiteName[i] === 'Github' ? <FaGithub /> : ''}
              {sourceCodeSpecificty[i]}
            </a>
          ))}
          {/* <a
            className="project-link-button"
            href={sourceCodeLink}
            target="_blank"
            rel="noreferrer"
          >
            {sourceCodeSiteName}
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
