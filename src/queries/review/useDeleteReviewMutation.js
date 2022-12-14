import { useMutation, useQueryClient } from "@tanstack/react-query";
import reviewAPI from "apis/reviewAPI";
import toast from "react-hot-toast";

// 대학교 리스트 받는 쿼리
const useDeleteReviewMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(async (id) => await reviewAPI.deleteReview(id), {
    onSuccess: () => {
      toast.success("리뷰가 삭제되었습니다.");
      queryClient.invalidateQueries("getReviewList");
    },
    onError: (err) => {
      console.log(err);
    },
  });
};

export default useDeleteReviewMutation;
