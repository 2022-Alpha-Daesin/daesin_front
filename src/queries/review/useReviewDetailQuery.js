import { useQuery } from "@tanstack/react-query";
import reviewAPI from "apis/reviewAPI";
import toast from "react-hot-toast";

// 대학교 리스트 받는 쿼리
const useReviewDetailQuery = (id) => {
  return useQuery(["getReviewList"], () => reviewAPI.getReviewDetail(id), {
    onError: (res) => {
      console.log("querylist error", res);
      toast.dismiss();
      toast.error("서버와 연결이 끊겼습니다.");
    },
    staleTime: 60 * 100,
  });
};

export default useReviewDetailQuery;
