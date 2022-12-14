import { useMutation, useQueryClient } from "@tanstack/react-query";
import ADRelatedAPI from "apis/ADRelatedAPI";
import { toast } from "react-hot-toast";

const useADMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (payload) => {
      return await ADRelatedAPI.postAD(payload);
    },
    {
      onSuccess: (res) => {
        toast.success("홍보가 작성되었습니다.");
        return queryClient.invalidateQueries("ad-lists");
      },
    },
  );
};

export default useADMutation;
