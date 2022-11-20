import { FlexBox, FlexTextBox } from "components/Common";

const Profile = () => {
  return (
    <FlexBox gap="0.3rem">
      <FlexBox width="8rem" height="8rem" background="#D9D9D9" borderRadius="50%" />
      <FlexBox column padding="1.4rem" gap="1.25rem">
        <FlexTextBox fontSize="1.8rem">노노카</FlexTextBox>
        <FlexTextBox fontSize="1.25rem">소프트웨어 융합학과 / 2학년</FlexTextBox>
      </FlexBox>
    </FlexBox>
  );
};
export default Profile;
