import { useQuery, useQueryClient } from "@tanstack/react-query";
import userRelatedAPI from "apis/userRelatedAPI";
import { useRecoilState } from "recoil";
import { userInfo } from "states/userInfo";
import { deleteCookie, getCookie, hasCookie } from "cookies-next";
import { useRefreshMutation } from "queries/auth";
import { toast } from "react-hot-toast";

const useUserInfoQuery = () => {
  const [user, setUser] = useRecoilState(userInfo);
  const { mutate: refreshMutate } = useRefreshMutation();
  const queryClient = useQueryClient();
  const isLogged = user.isLoggedIn && user.nickName === "" && user.accessToken !== "";
  return useQuery(["getUserInfo"], async () => await userRelatedAPI.getUserInfo(), {
    onSuccess: (res) => {
      if ("nickname" in res) {
        setUser({
          ...user,
          isLoggedIn: true,
          nickName: res?.nickname,
          email: res?.email,
          grade: res?.grade,
          major: res?.user_majors.map((item) => item.major.name),
        });
      }
      return queryClient.invalidateQueries("getNoticeList");
    },
    onError: (err) => {
      if (hasCookie("refreshToken")) {
        refreshMutate();
      }
    },
    enabled: isLogged,
    staleTime: 1000,
  });
};

export default useUserInfoQuery;
