import axios from 'axios';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
//   headers: {
//     Authorization: getSessionToken(),
//   },
});

export default axiosInstance;
