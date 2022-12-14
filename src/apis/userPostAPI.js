import { axiosInstance } from "./config";

const client = axiosInstance;

const userPostAPI = {
  getMyPosts: () => {
    return client.get("post/my_post/").then((res) => res.data.results);
  },
  getScrappedPosts: () => {
    return client.get("post/scrap_post/").then((res) => res.data.results);
  },
};

export default userPostAPI;
