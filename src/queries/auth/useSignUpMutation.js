import { useMutation } from '@tanstack/react-query';
// import toast from 'react-hot-toast';
import userRelatedAPI from 'apis/userRelatedAPI';
import { useNavigate } from 'react-router-dom';
// import errorMsgHandler from 'utils/errorMsgHandler';
// import messages from 'constants/messages';

const useSignUpMutation = () => {
  const navigate = useNavigate();

  return useMutation(
    (payload) => {
      return userRelatedAPI.postSignup(payload);
    },
    {
      onSuccess: () => {
        navigate('/signup');
      },
    },
  );
};

export default useSignUpMutation;
