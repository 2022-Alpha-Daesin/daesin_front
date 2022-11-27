import { useQuery } from "@tanstack/react-query";
import userRelatedAPI from "apis/userRelatedAPI";

const useUserInfoQuery = () => {
  return useQuery(["user"], () => userRelatedAPI.getUserInfo(), {
    onError: (res) => {
      console.log(res);
    },
  });
};

export default useUserInfoQuery;
