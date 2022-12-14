import { useMutation } from "@tanstack/react-query";
import userRelatedAPI from "apis/userRelatedAPI";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import messages from "constants/message";
import SignUpMutationHandler from "utils/SignUpMutationHandler";

const useSignUpMutation = () => {
  const navigate = useNavigate();

  return useMutation(
    async (payload) => {
      return await userRelatedAPI.postSignup(payload);
    },
    {
      onSuccess: () => {
        toast.dismiss();
        toast.success(messages.user.signup.success);
        navigate("/signin");
      },
      onError: (res) => {
        SignUpMutationHandler(res.response.data);
      },
    },
  );
};

export default useSignUpMutation;
