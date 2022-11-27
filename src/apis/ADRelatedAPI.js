import { axiosInstance } from "./config";

const client = axiosInstance;

const ADRelatedAPI = {
  getADList: () => {
		return client.get("advertisement/").then((res) => res.data);
  },

  getAD: (id) => {
    return client.post(`advertisement/${id}/`).then((res) => res.data);
  },

  postAD: (payload) => {
    return client.post("advertisement/", payload).then((res) => res.data);
  },


  

};

export default ADRelatedAPI;
