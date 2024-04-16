import axios from 'axios';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: import.meta.env.BASE_URL,
//   headers: {
//     Authorization: getSessionToken(),
//   },
});

export default axiosInstance;
