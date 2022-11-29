import { useQuery } from "@tanstack/react-query";
import reviewAPI from "apis/reviewAPI";
import toast from "react-hot-toast";

// 대학교 리스트 받는 쿼리
const useReviewListQuery = () => {
  return useQuery(["getReviewList"], () => reviewAPI.getReviewList(), {
    onError: (res) => {
      toast.dismiss();
      toast.error("서버와 연결이 끊겼습니다.");
    },
    staleTime: 60 * 1000,
  });
};

export default useReviewListQuery;
