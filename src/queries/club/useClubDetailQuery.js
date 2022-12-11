import { useQuery } from "@tanstack/react-query";
import ClubAPI from "apis/clubAPI";
import toast from "react-hot-toast";

// 대학교 리스트 받는 쿼리
const useClubDetailQuery = (id) => {
  return useQuery(["getClubDetail", id], () => ClubAPI.getClub(id), {
    onError: (res) => {
      toast.dismiss();
      toast.error("서버와 연결이 끊겼습니다.");
    },
    staleTime: 6000000,
  });
};

export default useClubDetailQuery;
