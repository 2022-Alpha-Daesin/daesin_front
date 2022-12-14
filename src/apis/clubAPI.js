import { axiosInstance } from "./config";

const client = axiosInstance;

const ClubAPI = {
  getClubs: () => {
    return client.get("club/").then((res) => res.data);
  },
  getClub: (id) => {
    return client.get(`club/${id}`).then((res) => res.data);
  },
};

export default ClubAPI;
