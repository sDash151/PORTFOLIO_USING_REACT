import React from 'react';

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <div 
      className="project-img glass-bg" 
      style={{ backgroundImage: `url(${project.image})` }}
    >
      <div className="icon-glass">
        <i className={project.icon}></i>
      </div>
    </div>
    <div className="project-content">
      <h3>{project.title}</h3>
      <span className="date">{project.date}</span>
      <ul>
        {project.description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="tech-stack">
        {project.techStack.map((tech, index) => (
          <span className="tech-item" key={index}>{tech}</span>
        ))}
      </div>
      <div className="project-github">
        {project.githubLink ? (
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="github-btn"
          >
            <i className="fab fa-github"></i> GitHub Link
          </a>
        ) : (
          <button className="github-btn" disabled>
            <i className="fab fa-github"></i> Coming Soon
          </button>
        )}
      </div>
    </div>
  </div>
);

export default ProjectCard;