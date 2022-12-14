import { useQuery } from "@tanstack/react-query";
import ClubAPI from "apis/clubAPI";
import toast from "react-hot-toast";

// 대학교 리스트 받는 쿼리
const useClubListQuery = (id) => {
  return useQuery(["getClubList"], async () => await ClubAPI.getClubs(), {
    onError: (res) => {
      toast.dismiss();
      toast.error("서버와 연결이 끊겼습니다.");
    },
    staleTime: 6000000,
  });
};

export default useClubListQuery;
