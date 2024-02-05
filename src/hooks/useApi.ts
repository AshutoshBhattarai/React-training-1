import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

const useApi = <T>(
  url: string,
  //   method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  config?: AxiosRequestConfig
) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetchData = async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response: AxiosResponse = await axios(url, config);
      setData(response.data.data);
    } catch (error) {
      if (error instanceof AxiosError) setError(error.response?.data);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, loading };
};

export default useApi;
