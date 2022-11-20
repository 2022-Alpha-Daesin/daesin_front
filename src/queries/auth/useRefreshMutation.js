import { useMutation } from "@tanstack/react-query";
import userRelatedAPI from "apis/userRelatedAPI";
import { getCookie } from "cookies-next";
import { useRecoilState } from "recoil";
import { userInfo } from "states/userInfo";

const useVerifyEmailMutation = () => {
  const [user, setUser] = useRecoilState(userInfo);
  const refreshToken = getCookie("refreshToken");
  if (!refreshToken) return;
  return useMutation(
    ["verifyEmail", refreshToken],
    () => userRelatedAPI.verifyEmail({ refresh: refreshToken }),
    {
      onSuccess: (res) => {
        setCookie("refreshToken", res.refresh_token);
        setUserInfo({
          ...user,
          isLoggedIn: true,
          accessToken: res.access_token,
        });
      },
      onError: (res) => {},
    },
  );
};

export default useVerifyEmailMutation;
