import { useState, useEffect } from 'react';
import axios from 'axios';

const API_ROOT = import.meta.env.VITE_API_ROOT;
const API_TIMEOUT = import.meta.env.VITE_API_TIMEOUT;
const API_HEADERS = {
  'X-Custom-header': 'foobar',
  'Content-Type': 'application/json',
  Accept: 'application/json'
};

const API_INSTANCE = axios.create({
  baseURL: API_ROOT,
  timeout: API_TIMEOUT,
  headers: API_HEADERS
});

API_INSTANCE.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

API_INSTANCE.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const useAxios = () => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [controller, setController] = useState(null);

  const axiosFetch = async (config) => {
    const { method, url, requestConfig } = config;

    try {
      setLoading(true);
      const ctrl = new AbortController();

      setController(ctrl);
      const response = await API_INSTANCE[method.toLower](url, {
        ...requestConfig,
        signal: ctrl.signal
      });

      setResponse(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => controller && controller.abort();
  }, [controller]);

  return { response, error, loading, axiosFetch };
};

export default useAxios;
