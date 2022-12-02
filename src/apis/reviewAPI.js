import { axiosInstance } from "./config";

const client = axiosInstance;

const reviewAPI = {
  getReviewList: () => {
    return client
      .get("review/")
      .then((res) => res.data)
      .catch((err) => err);
  },
  getReviewDetail: (id) => {
    return client
      .get(`review/${id}`)
      .then((res) => res.data)
      .catch((err) => err);
  },
  postReview: (data) => {
    return client
      .post("review/", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => res.data)
      .catch((err) => err);
  },
  putReview: (id, data) => {
    return client
      .put(`review/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => res.data)
      .catch((err) => err);
  },
  deleteReview: (id) => {
    return client
      .delete(`review/${id}`)
      .then((res) => res.data)
      .catch((err) => err);
  },
};

export default reviewAPI;
