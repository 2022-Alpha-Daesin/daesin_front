import { axiosInstance } from "./config";

const client = axiosInstance;

const scrapAPI = {
  postScrap: (data) => {
    return client.post("scrap/", data).then((res) => res.data);
  },
};

export default scrapAPI;
