import axios from 'axios';

const API_BASE_URL = 'https://api.jikan.moe/v4/anime';

export const getAnime = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}?limit=1&order_by=popularity&min_score=7`);
    return response.data;
  } catch (error) {
    console.error('Error fetching anime:', error);
    throw error;
  }
};

export const getAnimes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}?limit=2&order_by=popularity&min_score=7`);
    return response.data;
  } catch (error) {
    console.error('Error fetching anime:', error);
    throw error;
  }
};

export const getAnimesPage = async (page=1) => {
  try {
    const response = await axios.get(`${API_BASE_URL}?limit=2&order_by=popularity&min_score=7&page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching anime:', error);
    throw error;
  }
};
