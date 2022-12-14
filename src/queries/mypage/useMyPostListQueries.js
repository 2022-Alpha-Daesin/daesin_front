import { useQueries } from "@tanstack/react-query";
import userPostAPI from "apis/userPostAPI";

// 대학교 리스트 받는 쿼리
const useMyPostListQueries = () => {
  return useQueries({
    queries: [
      {
        queryKey: ["getMyPosts"],
        queryFn: async () => await userPostAPI.getMyPosts(),
        staleTime: 60 * 1000,
      },
      {
        queryKey: ["getScrappedPosts"],
        queryFn: async () => await userPostAPI.getScrappedPosts(),
        staleTime: 60 * 1000,
      },
    ],
  });
};

export default useMyPostListQueries;
