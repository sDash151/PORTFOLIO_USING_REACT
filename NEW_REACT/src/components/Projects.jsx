import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../data/projects'; // Correct import path

const Projects = () => (
  <section className="projects" id="projects">
    <div className="container">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;