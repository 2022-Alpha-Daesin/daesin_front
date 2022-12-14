import { useMutation } from "@tanstack/react-query";
import ADRelatedAPI from "apis/ADRelatedAPI";
import { toast } from "react-hot-toast";

const useADMutation = () => {
  return useMutation(
    async (payload) => {
      return await ADRelatedAPI.postAD(payload);
    },
    {
      onSuccess: (res) => {
        toast.success("홍보가 작성되었습니다.");
      },
    },
  );
};

export default useADMutation;
