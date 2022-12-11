import { axiosInstance } from "./config";

const client = axiosInstance;

const scrapAPI = {
  postScrap: (data) => {
    return client
      .post("scrap/", data)
      .then((res) => res.data)
      .catch((err) => err);
  },
};

export default scrapAPI;
