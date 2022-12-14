import { useMutation, useQueryClient } from "@tanstack/react-query";
import userRelatedAPI from "apis/userRelatedAPI";
import { getCookie, setCookie } from "cookies-next";
import { useRecoilState, useResetRecoilState } from "recoil";
import { userInfo } from "states/userInfo";

const useRefreshMutation = () => {
  const [user, setUser] = useRecoilState(userInfo);
  const resetUser = useResetRecoilState(userInfo);
  const refreshToken = getCookie("refreshToken");
  const queryClient = useQueryClient();
  const isLogged = getCookie("refreshToken") ? true : false;
  return useMutation(
    ["refreshToken"],
    async () => await userRelatedAPI.tokenRefresh({ refresh: refreshToken }),
    {
      onSuccess: (res) => {
        console.log(res, "시발");
        setUser({ ...user, isLoggedIn: true, accessToken: res.data.access });
        // setCookie("accessToken", res.data.access);
        return queryClient.invalidateQueries("getUserInfo");
      },
      onError: (res) => {
        // refreshToken 만료시 로그아웃
        resetUser();
        console.log("refresh error", res);
      },
      enabled: isLogged,
    },
  );
};

export default useRefreshMutation;
