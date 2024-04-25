import { useEffect, useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';

function useAxios({ method, endpoint, params }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        let response;
        if (method === 'get') {
          response = await axiosInstance.get(endpoint, params);
        } 
        if (method === 'post') {
          response = await axiosInstance.post(endpoint, params);
        }
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []); 

  return { data, loading, error };
}

export default useAxios;
