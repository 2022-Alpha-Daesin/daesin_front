import { useQuery } from "@tanstack/react-query";
import userRelatedAPI from "apis/userRelatedAPI";
import { useRecoilState } from "recoil";
import { userInfo } from "states/userInfo";
import { getCookie } from "cookies-next";
import { useRefreshMutation } from "queries/auth";
// 대학교 리스트 받는 쿼리
const useUserInfoQuery = () => {
  const [user, setUser] = useRecoilState(userInfo);
  const { mutate: refreshMutate } = useRefreshMutation();
  const isLogged = getCookie("accessToken") ? true : false;
  return useQuery(["getUserInfo"], () => userRelatedAPI.getUserInfo(), {
    onSuccess: (res) => {
      console.log("ss", res);
      if ("nickname" in res) {
        setUser({
          ...user,
          isLoggedIn: true,
          nickName: res?.nickname,
          email: res?.email,
          grade: res?.grade,
          major: res?.user_majors.map((item) => item.major.name),
        });
      } else {
        refreshMutate();
      }
    },
    onError: (err) => {
      console.error(err);
    },
    enabled: isLogged,
    staleTime: 60000000,
  });
};

export default useUserInfoQuery;
