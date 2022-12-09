import { FlexBox, FlexTextBox } from "components/Common";
import { FoodMenuCarousel, HotKeyword, DepartNotice } from "components/Now";
import ReviewPostList from "components/Review/ReviewPostList";
import Searchbar from "components/Navbar/Searchbar";
import styled from "styled-components";
import UserRelatedAPI from "apis/userRelatedAPI";
import { useRecoilValue } from "recoil";
import { userInfo } from "states";

const Text = styled.div`
  margin: 1rem 0;
  font-size: 1.5rem;
  font-weight: 1000;
  background: linear-gradient(to bottom, #ff8f28, #db00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.9;
`;

const Now = () => {
  const user = useRecoilValue(userInfo);
  const checkUserFunc = () => {
    console.log(user, "userInfoOnClick rootDIr");
  };

  const getUserFUnc = () => {
    UserRelatedAPI.getUserInfo().then((res) => {
      console.log(res, "userD");
    });
  };

  return (
    <FlexBox width="100%" column gap="1.3rem">
      <FlexBox width="100%" margin="1.9rem 0 0 0">
        <Searchbar />
      </FlexBox>
      <Text>NOW</Text>
      <FlexTextBox fontSize="1.3rem">오늘의 메뉴</FlexTextBox>
      <FoodMenuCarousel />
      <FlexTextBox fontSize="1.3rem">오늘의 실시간 검색어</FlexTextBox>
      <HotKeyword />
      <FlexTextBox fontSize="1.3rem" margin="0.5rem 0 0 0">
        학과 공지사항
      </FlexTextBox>
      <FlexTextBox fontSize="1.1rem">소프트웨어 융합</FlexTextBox>
      <DepartNotice
        title="소융대학 전체 공지~~~~~~"
        content="이번에 면접까지 보게 되었는데 꿀팁(?) 같은게 있을까요? 정말정말 급해서 여쭤봅니..."
        date="10.25"
      />
      <DepartNotice
        title="소융대학 전체 공지~~~~~~"
        content="이번에 면접까지 보게 되었는데 꿀팁(?) 같은게 있을까요? 정말정말 급해서 여쭤봅니..."
        date="10.25"
      />
    </FlexBox>
  );
};
export default Now;
