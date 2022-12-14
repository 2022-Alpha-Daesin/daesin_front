import { useMutation } from "@tanstack/react-query";
import ADRelatedAPI from "apis/ADRelatedAPI";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const usePostADMutation = () => {
  const navigate = useNavigate();
  return useMutation(
    async (payload) => {
      return await ADRelatedAPI.postAD(payload);
    },
    {
      onSuccess: (res) => {
        toast.success("홍보 글이 작성되었습니다.");
        navigate("/ad");
      },
    },
  );
};

export default usePostADMutation;
