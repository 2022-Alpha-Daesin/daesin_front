import { axiosInstance } from "./config";

const client = axiosInstance;

const userRelatedAPI = {
  postSignup: (data) => {
    return client.post("auth/registration/", data);
  },

  postSignin: (data) => {
    return client.post("auth/login/", data).then((res) => res.data);
  },

  verifyEmail: (data) => {
    return client.post("auth/registration/verify-email/", data);
  },
  tokenRefresh: (data) => {
    return client.post("auth/token/refresh/", data);
  },
  getUserInfo: () => {
    return client.get("auth/user/");
  },
  tokenVerfiy: (data) => {
    return client.post("auth/token/verify/", data);
  },
};

export default userRelatedAPI;
