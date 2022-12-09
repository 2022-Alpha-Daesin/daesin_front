import { FlexBox, FlexTextBox } from "components/Common";
import { FoodMenuCarousel } from "components/Now";
import Searchbar from "components/Navbar/Searchbar";
import styled from "styled-components";
import ReviewPostList from "components/Review/ReviewPostList";
// import UserRelatedAPI from "apis/userRelatedAPI";
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
  // const checkUserFunc = () => {
  //   console.log(user, "userInfoOnClick rootDIr");
  // };

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
      {/* <div onClick={checkUserFunc}>checkIsUserText</div>
      <div onClick={getUserFUnc}>getUserInfoText</div> */}
      <FlexTextBox fontSize="1.35rem">오늘의 메뉴</FlexTextBox>
      <FoodMenuCarousel />
      <FlexTextBox fontSize="1.35rem">학과 공지사항</FlexTextBox>
      <FlexTextBox fontSize="1.15rem">소프트웨어 융합</FlexTextBox>
      <ReviewPostList
        title="소프트웨어 융합대학 커리어 위크"
        content="소융대 학생들을 위한 진로 탐색의 기회를 늘리고자 열린 행사입니다. "
        date="11.28"
      />
      <ReviewPostList
        title="계절학기 등록 안내"
        content="계절학기 등록금은 1학점당 9만원이고 12월 7일까지 등록을 완료해주셔야 합니다. 자세한...."
        date="12.01"
      />
    </FlexBox>
  );
};
export default Now;
