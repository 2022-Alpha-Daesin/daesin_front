import { useMutation } from "@tanstack/react-query";
import scrapAPI from "apis/scrapAPI";
import toast from "react-hot-toast";

const useScrapMutation = () => {
  return useMutation(
    (payload) => {
      return scrapAPI.postScrap(payload);
    },
    {
      onSuccess: (data) => {
        console.log(data);
        // toast.success("스크랩 되었습니다.");
      },
    },
  );
};

export default useScrapMutation;
