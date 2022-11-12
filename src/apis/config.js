import axios from 'axios';
import { baseUrl } from '../constants/URLS';
import { useEffect } from 'react';

const createInstance = () => {
  const timeout = 1000 * 30;
  const headers = {};
  // 30초동안 응답이 없으면 에러 --> 인터넷 느려서 마지막 설정

  return axios.create({
    baseURL: baseUrl,
    timeout,
    headers,
  });
};

const axiosInstance = createInstance();

const AxiosInterceptor = ({ children }) => {
  useEffect(() => {
    axiosInstance.interceptors.request.use((config) => {
      const accessToken = localStorage.getItem('access_token');
      if (accessToken) config.headers['Authorization'] = `Bearer ${accessToken}`;
      return config;
    });
  }, []);

  return children;
};

export { AxiosInterceptor, axiosInstance };
