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
      onError: (error) => {
        console.log('fail', error.response.data);
        return ''.join(error.response.data);
      },
    },
  );
};

export default useSignInMutation;
