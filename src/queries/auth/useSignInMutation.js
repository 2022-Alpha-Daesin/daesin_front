import { useMutation } from '@tanstack/react-query';
import userRelatedAPI from 'apis/userRelatedAPI';
import toast from 'react-hot-toast';
import messages from 'constants/message';
import { useSetRecoilState } from 'recoil';
import { userAtom } from 'states/userInfo';
import { useNavigate } from 'react-router-dom';

const useSignInMutation = () => {
  const navigate = useNavigate();
  const setUserInfo = useSetRecoilState(userAtom);

  return useMutation(
    (payload) => {
      return userRelatedAPI.postSignin(payload);
    },
    {
      onSuccess: (res) => {
        toast.dismiss();
        toast.success(messages.user.signin.success);
        localStorage.setItem('user_info', JSON.stringify(res?.user));
        setUserInfo(JSON.parse(localStorage.getItem('user_info')));
        localStorage.setItem('access_token', res?.access_token);
        navigate('/');
      },
      onError: (res) => {
        toast.dismiss();
        const detail = res.response.data.error.details;
        if (detail?.non_field_errors) {
          toast.error('아이디/비밀번호를 확인해주세요 😭');
        } else {
          toast.error('예기치 않은 오류가 발생했습니다. 😭');
        }
        console.log('fail', res.response.data);
        return ''.join(res.response.data);
      },
    },
  );
};

export default useSignInMutation;
