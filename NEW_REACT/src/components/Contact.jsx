import React, { useState } from 'react';
import { submitContactForm, handleApiError } from '../services/api';
import { sendEmail } from '../utils/emailService'; // Import EmailJS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setErrorMessage('');
    
    try {
      const response = await submitContactForm(formData);
      
      if (response.status === 200 || response.status === 201) {
        // ✅ Send email with all fields
        await sendEmail(formData);
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setFormStatus('error');
      setErrorMessage(handleApiError(error));
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div className="contact-text">
                <h3>Phone</h3>
                <a href="tel:+916371791893" target="_blank" rel="noopener noreferrer">
                  +916371791893
                </a>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div className="contact-text">
                <h3>Email</h3>
                <a href="mailto:souravdilu78090@gmail.com" target="_blank" rel="noopener noreferrer">
                  souravdilu78090@gmail.com
                </a>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="fab fa-github"></i>
              <div className="contact-text">
                <h3>GitHub</h3>
                <a href="https://github.com/sDash151" target="_blank" rel="noopener noreferrer">
                  github.com/sDash151
                </a>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="fab fa-linkedin"></i>
              <div className="contact-text">
                <h3>LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/sourav-dash-a12436336" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/sourav-dash
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn" 
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              
              {formStatus === 'success' && (
                <p className="form-success">Message sent successfully! I'll get back to you soon.</p>
              )}
              
              {formStatus === 'error' && (
                <div className="form-error">
                  <p>Error sending message:</p>
                  <p>{errorMessage || 'Please try again later.'}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;