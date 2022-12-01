import { useMutation } from "@tanstack/react-query";
import ADRelatedAPI from "apis/ADRelatedAPI";

const useADMutation = () => {
  return useMutation((payload) => {
    return ADRelatedAPI.postAD(payload);
  }, {});
};

export default useADMutation;
