import { axiosInstance } from "./config";

const client = axiosInstance;

const ClubAPI = {
  getClubs: () => {
    return client
      .get("club/")
      .then((res) => res.data)
      .catch((err) => err);
  },
  getClub: (id) => {
    return client
      .get(`club/${id}`)
      .then((res) => res.data)
      .catch((err) => err);
  },
};

export default ClubAPI;
