import { useMutation } from '@tanstack/react-query';
import userRelatedAPI from 'apis/userRelatedAPI';

const useSignUpMutation = () => {
  return useMutation(
    (payload) => {
      return userRelatedAPI.postSignup(payload);
    },
    {
      onSuccess: () => {
        console.log('success');
      },
      onError: () => {
        console.log('fail');
      },
    },
  );
};

export default useSignUpMutation;
