import { useMutation, useQueryClient } from "@tanstack/react-query";
import reviewAPI from "apis/reviewAPI";

import toast from "react-hot-toast";

// 대학교 리스트 받는 쿼리
const usePostReviewMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(async (payload) => await reviewAPI.postReview(payload), {
    onSuccess: (res) => {
      console.log("성공", res);
      queryClient.invalidateQueries("getReviewList");
      toast.success("리뷰가 작성되었습니다.");
    },
    onError: (error) => {
      console.log("실패", error);
    },
  });
};

export default usePostReviewMutation;
