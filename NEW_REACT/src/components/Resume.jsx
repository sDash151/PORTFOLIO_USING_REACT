import React from 'react';

const Resume = () => (
  <section className="resume" id="resume">
    <div className="container">
      <h2 className="section-title">My Resume</h2>
      <div className="resume-container">
        <div className="resume-column">
          <h3>Education</h3>
          
          <div className="resume-item">
            <h4>Master Of Computer Application (MCA)</h4>
            <h5>Atria Institute of Technology</h5>
            <span className="date">08/2023 - Present</span>
            <div className="location">
              <i className="fas fa-map-marker-alt"></i>
              <span>Bangalore, India</span>
            </div>
            <a 
              href="/assets/docs/1stsemresult.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn"
            >
              1st Sem
            </a>
            <a 
              href="/assets/docs/2ndsemresult.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn"
            >
              2nd Sem
            </a>
          </div>
          
          <div className="resume-item">
            <h4>B.Sc. (Physics Hons.)</h4>
            <h5>Jhadeswar +3 Science Degree College</h5>
            <span className="date">05/2019 - 05/2022</span>
            <div className="location">
              <i className="fas fa-map-marker-alt"></i>
              <span>Balasore, Odisha</span>
            </div>
            <a 
              href="/assets/docs/GraduationMarksheet.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn"
            >
              Mark Sheet
            </a>
          </div>
          
          <div className="resume-item">
            <h4>Secondary School (10th)</h4>
            <h5>St. Mary's School</h5>
            <span className="date">04/2016 - 04/2017</span>
            <div className="location">
              <i className="fas fa-map-marker-alt"></i>
              <span>Mayurbhanja, Odisha</span>
            </div>
            <a 
              href="/assets/docs/10thMarksheet.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn"
            >
              Mark Sheet
            </a>
          </div>
        </div>
        
        <div className="resume-column">
          <h3>Experience</h3>
          
          <div className="resume-item">
            <h4>Web Development Intern</h4>
            <h5>SkillSavvy Intern</h5>
            <span className="date">2024 - 2025</span>
            <div className="location">
              <i className="fas fa-map-marker-alt"></i>
              <span>Lucknow, India</span>
            </div>
            <ul>
              <li>Worked as a Web Developer for two months</li>
              <li>Learned to Integrate HTML, CSS, Javascript, React, MongoDB, Express.js, Node.js</li>
            </ul>
            <a 
              href="/assets/docs/InternshipCertificate.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn"
            >
              Certificate
            </a>
          </div>
          
          <h3 style={{ marginTop: '40px' }}>Certifications</h3>
          
          <div className="resume-item">
            <h4>
              <a href="" target="_blank" rel="noopener noreferrer">
                Java Backend Development
              </a>
            </h4>
            <h5>GeeksForGeeks</h5>
          </div>
          
          <div className="resume-item">
            <h4>
              <a href="/assets/docs/AWS.pdf" target="_blank" rel="noopener noreferrer">
                Solutions Architecture Job Simulation
              </a>
            </h4>
            <h5>Amazon Web Services</h5>
          </div>
          
          <div className="resume-item">
            <h4>
              <a href="/assets/docs/Walmart.pdf" target="_blank" rel="noopener noreferrer">
                Advanced Software Engineering Job Simulations
              </a>
            </h4>
            <h5>Walmart Global Tech</h5>
          </div>
          
          <div className="resume-item">
            <h4>
              <a href="/assets/docs/DeloitteJobSimulation.pdf" target="_blank" rel="noopener noreferrer">
                Technology Job Simulation
              </a>
            </h4>
            <h5>Deloitte Australia</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Resume;