import { axiosInstance } from "./config";

const client = axiosInstance;

const userRelatedAPI = {
  postSignup: (data) => {
    return client.post("auth/registration/", data);
  },

  postSignin: (data) => {
    return client.post("auth/login/", data).then((res) => res.data);
  },

  verifyEmail: (token) => {
    return client.post("auth/registration/verify-email", token);
  },
};

export default userRelatedAPI;
