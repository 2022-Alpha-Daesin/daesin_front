import { axiosInstance } from './config';

const client = axiosInstance;

const userRelatedAPI = {
  postSignup: (data) => {
    return client.post('auth/registration', data);
  },
};

export default userRelatedAPI;
