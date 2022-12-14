import { axiosInstance } from "./config";

const client = axiosInstance;

const CommentAPI = {
  postComment: (data) => {
    return client.post("comment/", data).then((res) => res);
  },
};

export default CommentAPI;
