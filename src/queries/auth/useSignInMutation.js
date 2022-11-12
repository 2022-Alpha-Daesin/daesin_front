import { useMutation } from '@tanstack/react-query';
import userRelatedAPI from 'apis/userRelatedAPI';

const useSignInMutation = () => {
  return useMutation(
    (payload) => {
      return userRelatedAPI.postSignin(payload);
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

export default useSignInMutation;
