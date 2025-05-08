// axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://your-api-url.com/api', // replace with your actual base URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
