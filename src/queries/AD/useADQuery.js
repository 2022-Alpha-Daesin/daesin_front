import { useQuery } from "@tanstack/react-query";
import ADRelatedAPI from "apis/ADRelatedAPI";

const useADQuery = (id) => {
  return useQuery(["ad", id], () => ADRelatedAPI.getAD(id), {
    onError: (res) => {
      console.log(res);
    },
  });
};

export default useADQuery;
