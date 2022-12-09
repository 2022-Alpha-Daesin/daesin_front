import { useMutation } from "@tanstack/react-query";
import ADRelatedAPI from "apis/ADRelatedAPI";

const useADMutation = () => {
  return useMutation(
    (payload) => {
      return ADRelatedAPI.postAD(payload);
    },
    {
      onSuccess: (res) => {
        console.log(res);
      },
    },
  );
};

export default useADMutation;
