import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Contact API
export const submitContactForm = (formData) => api.post('/api/contact', formData);

// Add this function to handle errors consistently
export const handleApiError = (error) => {
  if (error.response) {
    console.error('API Error - Status:', error.response.status);
    console.error('API Error - Data:', error.response.data);
    return error.response.data.message || `Server error: ${error.response.status}`;
  } else if (error.request) {
    console.error('API Error - No response:', error.request);
    return 'No response from server. Please check your connection.';
  } else {
    console.error('API Error - Request setup:', error.message);
    return 'Request setup error: ' + error.message;
  }
};

export default api;
