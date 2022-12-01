import axios from "axios";
import { baseUrl } from "../constants/URLS";
import { useEffect } from "react";
import { userInfo } from "states";
import { useRecoilState } from "recoil";

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

  useEffect(() => {
    axiosInstance.interceptors.request.use((config) => {
      const accessToken = user.accessToken;
      if (accessToken) config.headers["Authorization"] = `Bearer ${accessToken}`;
      console.log("config", accessToken);
      console.log("config", user);
      return config;
    });
  }, [user]);

  return children;
};

export { AxiosInterceptor, axiosInstance };
