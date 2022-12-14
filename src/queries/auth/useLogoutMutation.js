import { useMutation, useQueryClient } from "@tanstack/react-query";
import userRelatedAPI from "apis/userRelatedAPI";
import toast from "react-hot-toast";
import { deleteCookie, getCookie } from "cookies-next";
import { useResetRecoilState } from "recoil";
import { userInfo } from "states/userInfo";
const useLogoutMutation = () => {
  const userReset = useResetRecoilState(userInfo);
  const queryClient = useQueryClient();
  return useMutation(
    async () => {
      return await userRelatedAPI.logout({ refresh: getCookie("refreshToken") });
    },
    {
      onSuccess: (res) => {
        queryClient.invalidateQueries("getNoticeList");
        toast.success("로그아웃되었습니다.");
        deleteCookie("refreshToken");
        deleteCookie("accessToken");
        userReset();
      },
    },
  );
};

export default useLogoutMutation;
