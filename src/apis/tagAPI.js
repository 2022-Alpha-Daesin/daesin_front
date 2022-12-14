import { axiosInstance } from "./config";

const client = axiosInstance;

const tagAPI = {
  getAllTag: () => {
    return client.get("tag/").then((res) => res.data);
  },
};

export default tagAPI;
