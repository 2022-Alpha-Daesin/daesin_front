import axios from "axios";
import { baseUrl } from "../constants/URLS";
import { useEffect } from "react";
import { userInfo } from "states";
import { useRecoilState } from "recoil";
import { getCookie } from "cookies-next";

const createInstance = () => {
  const headers = {};
  // 10초동안 응답이 없으면 에러 --> 인터넷 느려서 마지막 설정
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
      const accessToken = getCookie("accessToken");
      console.log("잉?", user, accessToken);
      if (accessToken) config.headers["Authorization"] = `Bearer ${accessToken}`;
      return config;
    });
  }, []);

  return children;
};

export { AxiosInterceptor, axiosInstance };
