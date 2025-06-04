import React from 'react';

const Hero = () => (
  <section className="hero" id="home">
    <div className="container">
      <div className="hero-content">
        <h1>Aspiring <span>Software Developer</span> Crafting Digital Solutions</h1>
        <p>Passionate about building innovative applications with expertise in Java, Python, and full-stack development. Ready to transform ideas into reality.</p>
        <div className="hero-btns">
          <a href="#contact" className="btn">Hire Me</a>
          <a href="#projects" className="btn btn-outline">View Projects</a>
        </div>
      </div>
      <div className="hero-image">
        <img 
          src="/assets/images/PORTFOLIO_ME.jpg" 
          alt="Sourav Dash Adhikari" 
          className="profile-img" 
        />
      </div>
    </div>
  </section>
);

export default Hero;