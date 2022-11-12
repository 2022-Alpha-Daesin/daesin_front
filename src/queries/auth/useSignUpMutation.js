import { useMutation } from '@tanstack/react-query';
import userRelatedAPI from 'apis/userRelatedAPI';

const useSignUpMutation = () => {
  return useMutation((payload) => {
    return userRelatedAPI.postSignup(payload);
  });
};

export default useSignUpMutation;
