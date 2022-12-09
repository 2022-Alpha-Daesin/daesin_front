import { useQuery } from "@tanstack/react-query";
import reviewAPI from "apis/reviewAPI";
import toast from "react-hot-toast";

//리뷰 리스트 받는 쿼리
const useReviewListQuery = (category) => {
  let queryParms;
  const categoryList = category.filter((item) => item.isClicked).map((obj) => obj.study);
  if (categoryList[0] === "ALL") {
    queryParms = "";
  } else {
    queryParms =
      "?post__post_tags__tag__content=" + categoryList.join("&post__post_tags__tag__content=");
  }
  return useQuery(["getReviewList", queryParms], () => reviewAPI.getReviewList(queryParms), {
    onSuccess: (res) => {
      console.log("res", res);
    },
    onError: (erro) => {
      toast.dismiss();
      toast.error("서버와 연결이 끊겼습니다.");
    },
    staleTime: 60 * 100,
  });
};

export default useReviewListQuery;
