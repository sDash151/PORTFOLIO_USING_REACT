import emailjs from '@emailjs/browser';

// Initialize with your user ID
emailjs.init('HsIzvMu2XxQZDyDHA');

export const sendEmail = (formData) => {
  return emailjs.send(
    'service_fhs5ofa', // Replace with your EmailJS service ID
    'template_1j7mqfv', // Replace with your EmailJS template ID
    formData
  ).then((response) => {
    console.log('✅ Email sent successfully!', response.status, response.text);
  }).catch((error) => {
    console.error('❌ Failed to send email:', error);
  });
};
