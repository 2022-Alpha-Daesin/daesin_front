import { useQuery } from "@tanstack/react-query";
import majorAPI from "apis/majorAPI";
import toast from "react-hot-toast";

// 대학교 리스트 받는 쿼리
const useCollegeQuery = () => {
  return useQuery(["collegeList"], () => majorAPI.getCollegeList(), {
    onError: (res) => {
      toast.dismiss();
      toast.error(res.data);
    },
    // 이 시간내에 같은 요청보내면 저장해놓은거 쓴다.
    staleTime: 100000,
  });
};

export default useCollegeQuery;
