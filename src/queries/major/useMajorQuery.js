import { useQuery } from "@tanstack/react-query";
import majorAPI from "apis/majorAPI";
import toast from "react-hot-toast";

// 대학교 리스트 받는 쿼리
const useMajorListQuery = (college) => {
  return useQuery(["majorList", college], async () => await majorAPI.getMajorList(college), {
    onError: (res) => {
      toast.dismiss();
      toast.error(res.data);
    },
    staleTime: 100000,
  });
};

export default useMajorListQuery;
