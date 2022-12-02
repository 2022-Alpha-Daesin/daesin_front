import { useQuery } from "@tanstack/react-query";
import ADRelatedAPI from "apis/ADRelatedAPI";

const useADListQuery = () => {
  return useQuery(["ad-lists"], () => ADRelatedAPI.getADList(), {
    onError: (res) => {
      console.log(res);
    },
  });
};

export default useADListQuery;
