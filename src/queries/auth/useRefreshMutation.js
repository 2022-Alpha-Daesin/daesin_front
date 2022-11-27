import { useMutation, useQueryClient } from "@tanstack/react-query";
import userRelatedAPI from "apis/userRelatedAPI";
import { getCookie, setCookie } from "cookies-next";
import { useRecoilState } from "recoil";
import { userInfo } from "states/userInfo";

const useRefreshMutation = () => {
  const [user, setUser] = useRecoilState(userInfo);
  const refreshToken = getCookie("refreshToken");
  const queryClient = useQueryClient();
  return useMutation(
    ["verifyEmail", refreshToken],
    () => refreshToken && userRelatedAPI.tokenRefresh({ refresh: refreshToken }),
    {
      onSuccess: (res) => {
        console.log("리프레쉬데이터", res);
        setCookie("accessToken", res.data.access);
        queryClient.invalidateQueries("getUserInfo");
      },
      onError: (res) => {
        console.log("refresh error", res);
      },
    },
  );
};

export default useRefreshMutation;
