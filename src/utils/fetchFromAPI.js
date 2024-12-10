import axios from 'axios';

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY, 
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
  },
};

// console.log("API Key:", process.env.REACT_APP_RAPID_API_KEY);
// console.log("Test Variable:", process.env.REACT_APP_TEST_VAR);
// console.log("Environment Variables:", process.env);



export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error("Error fetching data from API:", error);
    throw error;
  }
};


