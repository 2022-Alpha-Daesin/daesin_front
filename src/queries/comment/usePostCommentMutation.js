import { useMutation, useQueryClient } from "@tanstack/react-query";
import CommentAPI from "apis/commentAPI";

import toast from "react-hot-toast";

// 대학교 리스트 받는 쿼리
const usePostCommentMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((payload) => CommentAPI.postComment(payload), {
    onSuccess: (res) => {
      console.log("?", res);
      queryClient.invalidateQueries("getReviewDetail");
      toast.success("댓글이 작성되었습니다.");
    },
    onError: (error) => {
      console.log("실패", error);
    },
  });
};

export default usePostCommentMutation;
