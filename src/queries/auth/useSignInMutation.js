import { useMutation } from "@tanstack/react-query";
import userRelatedAPI from "apis/userRelatedAPI";
import toast from "react-hot-toast";
import messages from "constants/message";
import { useSetRecoilState } from "recoil";
import { userInfo } from "states/userInfo";
import { useNavigate } from "react-router-dom";
import { setCookie, deleteCookie } from "cookies-next";

const useSignInMutation = () => {
  const navigate = useNavigate();
  const setUserInfo = useSetRecoilState(userInfo);

  return useMutation(
    (payload) => {
      return userRelatedAPI.postSignin(payload);
    },
    {
      onSuccess: (res) => {
        toast.dismiss();
        toast.success(messages.user.signin.success);
        console.log("onSuccess", res, res.access_token, res.refresh_token, res.user.email);
        setCookie("refreshToken", res.refresh_token);
        setUserInfo({
          isLoggedIn: true,
          nickName: res.user.nickName,
          email: res.user.email,
          grade: res.user.grade,
          accessToken: res.access_token,
        });
      },
      onError: (res) => {
        toast.dismiss();
        deleteCookie("refreshToken");
        const detail = res.response.data.error.details;
        if (detail?.non_field_errors) {
          toast.error("아이디/비밀번호를 확인해주세요 😭");
        } else {
          toast.error("예기치 않은 오류가 발생했습니다. 😭");
        }
        console.log("fail", res.response.data);
        return "".join(res.response.data);
      },
    },
  );
};

export default useSignInMutation;
