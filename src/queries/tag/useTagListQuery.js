import { useQuery } from "@tanstack/react-query";
import tagAPI from "apis/tagAPI";

// 대학교 리스트 받는 쿼리
const useTagListQuery = () => {
  return useQuery(["tagList"], () => tagAPI.getAllTag(), {
    onError: (res) => {
      console.log("??", res);
    },
    staleTime: 100000,
  });
};

export default useTagListQuery;
