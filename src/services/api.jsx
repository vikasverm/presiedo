import axios from 'axios';

const baseURL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Register a new user
export const registerUser = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

// Login user
// Add login functionality here

// Fetch all properties
export const fetchProperties = async () => {
  try {
    const response = await api.get('/properties');
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

// Create a new property
export const createProperty = async (propertyData, token) => {
  try {
    const response = await api.post('/properties', propertyData, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

// Add more API functions as needed

export default api;
