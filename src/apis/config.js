import axios from "axios";
import { baseUrl } from "../constants/URLS";
import { useEffect } from "react";
import { getCookie, deleteCookie } from "cookies-next";

const createInstance = () => {
  const headers = {};
  return axios.create({
    baseURL: baseUrl,
    headers,
  });
};

const axiosInstance = createInstance();

const AxiosInterceptor = ({ children }) => {
  useEffect(() => {
    axiosInstance.interceptors.request.use((config) => {
      const accessToken = getCookie("accessToken");
      if (accessToken) config.headers["Authorization"] = `Bearer ${accessToken}`;
      return config;
    });
    axiosInstance.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (getCookie("accessToken") && error.response.status == 401) {
          deleteCookie("accessToken");
          return error;
        }
        return error;
      },
    );
  }, []);

  return children;
};

export { AxiosInterceptor, axiosInstance };
