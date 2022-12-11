import { axiosInstance } from "./config";

const client = axiosInstance;

const userPostAPI = {
  getMyPosts: () => {
    return client
      .get("post/my_post/")
      .then((res) => res.data.results)
      .catch((err) => err);
  },
  getScrappedPosts: () => {
    return client
      .get("post/scrap_post/")
      .then((res) => res.data.results)
      .catch((err) => err);
  },
};

export default userPostAPI;
