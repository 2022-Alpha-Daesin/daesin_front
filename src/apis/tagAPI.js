import { axiosInstance } from "./config";

const client = axiosInstance;

const tagAPI = {
  getAllTag: () => {
    return client
      .get("tag/")
      .then((res) => res.data)
      .catch((err) => err);
  },
};

export default tagAPI;
