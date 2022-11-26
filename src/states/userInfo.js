import { atom } from "recoil";

const userInfo = atom({
  key: "user",
  default: {
    // 초기값 설정
    isLoggedIn: false,
    nickName: "",
    email: "",
    grade: 1,
    accessToken: "",
  },
});

export { userInfo };
