import { axiosInstance } from './config';

const client = axiosInstance;

const userRelatedAPI = {
  postSignup: (data) => {
    return client.post('auth/registration/', data);
  },

  postSignin: (data) => {
    return client.post('auth/login/', data).then((res) => res.data);
  },
};

export default userRelatedAPI;
