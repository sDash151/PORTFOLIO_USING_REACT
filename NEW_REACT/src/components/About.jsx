import React from 'react';

const About = () => {
  const skills = [
    { icon: 'fab fa-java', name: 'Java' },
    { icon: 'fab fa-python', name: 'Python' },
    { icon: 'fab fa-js', name: 'JavaScript' },
    { icon: 'fas fa-database', name: 'MongoDB' },
    { icon: 'fab fa-react', name: 'React' },
    { icon: 'fab fa-node-js', name: 'Node.js' },
    { icon: 'fas fa-seedling', name: 'Spring Boot' },
    { icon: 'fas fa-paper-plane', name: 'Postman' },
    { icon: 'fas fa-flask', name: 'JUnit' }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Hello, I'm Sourav Dash Adhikari</h3>
            <p>Aspiring Software Developer with a solid foundation in programming languages and 2 years of experience in event coordination and participation in coding competitions, expert in organizational leadership and programming in Java and Python.</p>
            <p>Key achievements include securing 3rd place in the CodeXpress competition and participating in state and inter-college hackathons.</p>
            <p>Seeking a Full Stack Developer position at your company, where my software development and problem-solving skills will support your mission of delivering innovative IT services and consulting solutions.</p>
            <a 
              href="/assets/docs/RESUME.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn"
            >
              View Full Resume
            </a>
          </div>
          <div className="about-skills">
            <h3>My Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <i className={skill.icon}></i>
                  <h4>{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;