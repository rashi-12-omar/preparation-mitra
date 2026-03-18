import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const fetchQuestions = async (category) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/questions/${category}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching questions:", error);
    throw error;
  }
};

export const saveQuizResult = async (userId, score) => {
  return await axios.post(`${API_BASE_URL}/users/score`, { userId, score });
};
