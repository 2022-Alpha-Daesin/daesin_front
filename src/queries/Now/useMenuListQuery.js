import { useQuery } from "@tanstack/react-query";
import nowAPI from "apis/nowAPI";
import toast from "react-hot-toast";

// 대학교 리스트 받는 쿼리
const useMenuListQuery = (id) => {
  return useQuery(["getMenuList"], async () => await nowAPI.getCafeteria(), {
    onError: (res) => {
      toast.dismiss();
      toast.error("서버와 연결이 끊겼습니다.");
    },
    staleTime: 600000,
  });
};

export default useMenuListQuery;
