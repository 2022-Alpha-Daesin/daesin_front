import { useQuery } from "@tanstack/react-query";
import ADRelatedAPI from "apis/ADRelatedAPI";

const useADDeadLineQuery = (day) => {
  if (day === "deadline_") {
    day = "deadline_0";
  }
  return useQuery(["ad-deadline", day], async () => await ADRelatedAPI.getADDeadLine(day));
};

export default useADDeadLineQuery;
