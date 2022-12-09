import { axiosInstance } from "./config";

const client = axiosInstance;

const nowAPI = {
  getCafeteria: () => {
    return client
      .get("cafeteria/")
      .then((res) => res)
      .catch((err) => err);
  },
};

export default nowAPI;