import { useMutation, useQueryClient } from "@tanstack/react-query";
import reviewAPI from "apis/reviewAPI";
import toast from "react-hot-toast";

// 대학교 리스트 받는 쿼리
const usePutReviewMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(async (id, data) => await reviewAPI.putReview(id, data), {
    onSuccess: () => {
      toast.success("리뷰가 수정되었습니다.");
      queryClient.invalidateQueries("getReviewList");
    },
  });
};

export default usePutReviewMutation;
