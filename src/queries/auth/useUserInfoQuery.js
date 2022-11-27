import { useQuery } from "@tanstack/react-query";
import userRelatedAPI from "apis/userRelatedAPI";
import { useRecoilState } from "recoil";
import { userInfo } from "states/userInfo";
import { getCookie } from "cookies-next";

const useUserInfoQuery = () => {
  const [user, setUser] = useRecoilState(userInfo);
  const isLogged = getCookie("accessToken") ? true : false;
  return useQuery(["getUserInfo"], () => userRelatedAPI.getUserInfo(), {
    onSuccess: (data) => {
      setUser({
        ...user,
        isLoggedIn: true,
        nickName: data.nickname,
        email: data.email,
        grade: data.grade,
        major: data.user_majors.map((item) => item.major.name),
      });
    },
    onError: (error) => {
      console.log("에러", error);
    },
    enabled: isLogged,
  });
};

export default useUserInfoQuery;
