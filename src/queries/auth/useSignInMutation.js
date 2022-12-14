import { useMutation, useQueryClient } from "@tanstack/react-query";
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
  const queryClient = useQueryClient();
  return useMutation(
    async (payload) => {
      return await userRelatedAPI.postSignin(payload);
    },
    {
      onSuccess: (res) => {
        toast.dismiss();
        toast.success(messages.user.signin.success);
        setCookie("refreshToken", res.refresh_token);
        // setCookie("accessToken", res.access_token);
        setUserInfo({
          isLoggedIn: true,
          nickName: res.user.nickname,
          email: res.user.email,
          grade: res.user.grade,
          accessToken: res.access_token,
        });
        navigate("/");
        queryClient.invalidateQueries("getNoticeList");
      },
      onError: (res) => {
        toast.dismiss();
        deleteCookie("refreshToken");
        const detail = res.response.data;
        if (detail?.non_field_errors) {
          toast.error("아이디/비밀번호를 확인해주세요 😭");
        } else {
          toast.error("예기치 않은 오류가 발생했습니다. 😭");
        }
        return "".join(res.response.data);
      },
    },
  );
};

export default useSignInMutation;
