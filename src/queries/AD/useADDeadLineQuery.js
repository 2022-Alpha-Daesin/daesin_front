import { useQuery } from "@tanstack/react-query";
import ADRelatedAPI from "apis/ADRelatedAPI";

const useADDeadLineQuery = (day) => {
  if (day === "deadline_") {
    day = "deadline_0";
  }
  console.log(day);
  return useQuery(["ad-deadline", day], () => ADRelatedAPI.getADDeadLine(day), {
    onError: (res) => {
      console.log(res);
    },
  });
};

export default useADDeadLineQuery;
