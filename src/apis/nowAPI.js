import { axiosInstance } from "./config";

const client = axiosInstance;

const nowAPI = {
  getCafeteria: () => {
    return client.get("cafeteria/").then((res) => res.data);
  },
  getNotice: () => {
    return client.get("notice/").then((res) => res.data);
  },
};

export default nowAPI;
