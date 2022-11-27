import { useMutation } from "@tanstack/react-query";
import userRelatedAPI from "apis/userRelatedAPI";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import messages from "constants/message";

const useSignUpMutation = () => {
  const navigate = useNavigate();

  return useMutation(
    (payload) => {
      return userRelatedAPI.postSignup(payload);
    },
    {
      onSuccess: () => {
        toast.dismiss();
        toast.success(messages.user.signup.success);
        navigate("/signin");
      },
      onError: (res) => {
        console.log("fail");
        console.log(res);
      },
    },
  );
};

export default useSignUpMutation;
