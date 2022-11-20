import { useMutation } from "@tanstack/react-query";
import userRelatedAPI from "apis/userRelatedAPI";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useVerifyEmailMutation = (key) => {
  const navigate = useNavigate();
  return useMutation(["verifyEmail", key], (key) => userRelatedAPI.verifyEmail({ key: key }), {
    onSuccess: () => {
      toast.dismiss();
      toast.success("이메일 인증 완료! 로그인 해주십시오");
      navigate("/signin");
    },
    onError: (res) => {
      toast.dismiss();
      toast.error(res.data);
    },
    staleTime: 100000,
  });
};

export default useVerifyEmailMutation;
