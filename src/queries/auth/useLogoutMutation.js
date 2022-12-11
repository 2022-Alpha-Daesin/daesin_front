import { useMutation } from "@tanstack/react-query";
import userRelatedAPI from "apis/userRelatedAPI";
import toast from "react-hot-toast";
import { deleteCookie, getCookie } from "cookies-next";
import { useResetRecoilState } from "recoil";
import { userInfo } from "states/userInfo";
const useLogoutMutation = () => {
  const userReset = useResetRecoilState(userInfo);
  return useMutation(
    () => {
      return userRelatedAPI.logout({ refresh: getCookie("refreshToken") });
    },
    {
      onSuccess: (res) => {
        console.log(res.data);
        toast.success("로그아웃되었습니다.");
        deleteCookie("refreshToken");
        deleteCookie("accessToken");
        userReset();
      },
    },
  );
};

export default useLogoutMutation;
