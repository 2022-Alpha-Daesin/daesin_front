import { axiosInstance } from "./config";

const client = axiosInstance;

const reviewAPI = {
  getReviewList: (query) => {
    return client.get("review/" + query).then((res) => res.data);
  },
  getReviewDetail: (id) => {
    return client.get(`review/${id}/`).then((res) => res.data);
  },
  postReview: (data) => {
    return client
      .post("review/", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => res.data);
  },
  putReview: (id, data) => {
    return client
      .put(`review/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => res.data);
  },
  deleteReview: (id) => {
    return client.delete(`review/${id}`).then((res) => res.data);
  },
};

export default reviewAPI;
