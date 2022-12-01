import axios from "axios";
import { baseUrl } from "../constants/URLS";
import { useEffect } from "react";
import { userInfo } from "states";
import { useRecoilState } from "recoil";
import { getCookie } from "cookies-next";

const createInstance = () => {
  const headers = {};
  return axios.create({
    baseURL: baseUrl,
    headers,
  });
};

const axiosInstance = createInstance();

const AxiosInterceptor = ({ children }) => {
  const [user] = useRecoilState(userInfo);
  console.log(user);
  useEffect(() => {
    axiosInstance.interceptors.request.use((config) => {
      const accessToken = getCookie("accessToken");

      if (accessToken) config.headers["Authorization"] = `Bearer ${accessToken}`;
      return config;
    });
  }, []);

  return children;
};

export { AxiosInterceptor, axiosInstance };
