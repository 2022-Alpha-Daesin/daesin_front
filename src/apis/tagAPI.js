import { axiosInstance } from "./config";

const client = axiosInstance;

const reviewAPI = {
  getReviewList: (data) => {
    return client.get("review/", data);
  },
  getReviewDetail: (id) => {
    return client.get(`review/${id}`);
  },
  postReview: (data) => {
    return client.post("review/", data);
  },
};

export default reviewAPI;
