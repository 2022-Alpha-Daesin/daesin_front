import { useMutation, useQueryClient } from "@tanstack/react-query";
import scrapAPI from "apis/scrapAPI";
import toast from "react-hot-toast";

const useScrapMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (payload) => {
      return await scrapAPI.postScrap(payload);
    },
    {
      onSuccess: (data) => {
        if ("msg" in data) {
          toast.success(data.msg);
        } else {
          toast.success("스크랩 되었습니다.");
        }
        queryClient.invalidateQueries("getReviewDetail");
      },
    },
  );
};

export default useScrapMutation;
