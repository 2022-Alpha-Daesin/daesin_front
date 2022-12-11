import { FlexBox, FlexTextBox } from "components/Common";
import { userInfo } from "states";
import { useRecoilValue } from "recoil";
const Profile = () => {
  const user = useRecoilValue(userInfo);

  return (
    <FlexBox gap="0.3rem">
      <FlexBox width="8rem" height="8rem" background="#D9D9D9" borderRadius="50%" />
      <FlexBox column padding="1.4rem" gap="1.25rem">
        <FlexTextBox fontSize="1.8rem">{user.nickName}</FlexTextBox>
        <FlexTextBox fontSize="1.25rem">
          {user.major[0]} / {user.grade}학년
        </FlexTextBox>
      </FlexBox>
    </FlexBox>
  );
};
export default Profile;
