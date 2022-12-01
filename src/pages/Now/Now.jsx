import { FlexBox, FlexTextBox } from "components/Common";
import { FoodMenuCarousel, HotKeyword } from "components/Now";
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
  // const user = useRecoilValue(userInfo);
  // const checkUserFunc = () => {
  //   console.log(user, "userInfoOnClick rootDIr");
  // };
  //
  // const getUserFUnc = () => {
  //   UserRelatedAPI.getUserInfo().then((res) => {
  //     console.log(res, "userD");
  //   });
  // };

  return (
    <FlexBox width="100%" column gap="1.3rem">
      <FlexBox width="100%" margin="1.9rem 0 0 0">
        <Searchbar />
      </FlexBox>
      <Text>NOW</Text>
      {/*<div onClick={checkUserFunc}>checkIsUserText</div>*/}
      {/*<div onClick={getUserFUnc}>getUserInfoText</div>*/}
      <FlexTextBox fontSize="1.25rem">오늘의 메뉴</FlexTextBox>
      <FoodMenuCarousel />
      <FlexTextBox fontSize="1.25rem">오늘의 실시간 검색어</FlexTextBox>
      <HotKeyword />
    </FlexBox>
  );
};
export default Now;
