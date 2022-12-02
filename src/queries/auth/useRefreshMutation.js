import { useMutation } from "@tanstack/react-query";
import userRelatedAPI from "apis/userRelatedAPI";
import { getCookie, setCookie } from "cookies-next";
import { useRecoilState, useResetRecoilState } from "recoil";
import { userInfo } from "states/userInfo";

const useRefreshMutation = () => {
  const [user, setUser] = useRecoilState(userInfo);
  const resetUser = useResetRecoilState(userInfo);
  const refreshToken = getCookie("refreshToken");
  return useMutation(
    ["verifyEmail", refreshToken],
    () => refreshToken && userRelatedAPI.tokenRefresh({ refresh: refreshToken }),
    {
      onSuccess: (res) => {
        setUser({
          ...user,
          isLoggedIn: true,
          accessToken: res.data.access,
        });
      },
      onError: (res) => {
        // refreshToken 만료시 로그아웃
        resetUser();
        console.log("refresh error", res);
      },
    },
  );
};

export default useRefreshMutation;
