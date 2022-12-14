import axios from "axios";
import { baseUrl } from "../constants/URLS";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userInfo } from "states";

const createInstance = () => {
  const headers = {};
  return axios.create({
    baseURL: baseUrl,
    headers,
  });
};

const axiosInstance = createInstance();

const AxiosInterceptor = ({ children }) => {
  const [user, setUser] = useRecoilState(userInfo);
  useEffect(() => {
    axiosInstance.interceptors.request.use((config) => {
      console.log(user.accessToken, "수;ㅅㅍㄹ", user, user.isLoggedIn);
      if (user.isLoggedIn) config.headers["Authorization"] = `Bearer ${user.accessToken}`;
      return config;
    });
  }, [user]);

  return children;
};

export { AxiosInterceptor, axiosInstance };
