import { axiosInstance } from "./config";

const client = axiosInstance;

const scrapAPI = {
  postScrap: () => {
    return client
      .post("scrap/")
      .then((res) => res.data)
      .catch((err) => err);
  },
};

export default scrapAPI;
