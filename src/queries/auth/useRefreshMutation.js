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
    () => userRelatedAPI.tokenRefresh({ refresh: refreshToken }),
    {
      onSuccess: (res) => {
        console.log("리프레쉬데이터", res);
        setCookie("accessToken", res.data.access);
        queryClient.invalidateQueries("getUserInfo");
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
