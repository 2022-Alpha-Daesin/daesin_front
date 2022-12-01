import { axiosInstance } from "./config";

const client = axiosInstance;

const majorAPI = {
  getCollegeList: () => {
    return client
      .get("user/major/get_college_list/")
      .then((res) => res.data)
      .catch((err) => err);
  },
  getMajorList: (col) => {
    return client
      .get(`user/major/?college=${col}`)
      .then((res) => res.data)
      .catch((err) => err);
  },
};

export default majorAPI;
