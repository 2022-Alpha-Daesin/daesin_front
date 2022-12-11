import { FlexBox, FlexTextBox } from "components/Common";
import { FoodMenuCarousel } from "components/Now";
import Searchbar from "components/Navbar/Searchbar";
import styled from "styled-components";
import ReviewPostList from "components/Review/ReviewPostList";
import { useMenuListQuery, useNoticeListQuery } from "queries/now";

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
  const { data: menuData } = useMenuListQuery();
  const { data: noticeData } = useNoticeListQuery();

  console.log("메뉴데이타", menuData, "\n 공지사항데이터", noticeData);

  const noticeSection = () => {
    let hasMajor = true;
    const noticeList = Object.keys(noticeData).map((key) => {
      let major = `제 ${key}전공 ${noticeData[key][0]["major"]}`;
      if (noticeData[key][0]["major"] === "국민대학교") {
        major = `국민대학교 전체 공지사항`;
        hasMajor = false;
      }
      return (
        <>
          <FlexTextBox fontSize="1.15rem">{major}</FlexTextBox>
          {noticeData[key].map((noti, indx) => (
            <ReviewPostList title={noti.title} key={indx} content={noti.url} isNotice={true} />
          ))}
        </>
      );
    });

    return (
      <>
        {hasMajor && <FlexTextBox fontSize="1.35rem">학과 공지사항</FlexTextBox>}
        {noticeList}
      </>
    );
  };

  return (
    <FlexBox width="100%" column gap="1.3rem">
      <FlexBox width="100%" margin="1.9rem 0 0 0">
        <Searchbar />
      </FlexBox>
      <Text>NOW</Text>
      <FlexTextBox fontSize="1.35rem">오늘의 메뉴</FlexTextBox>
      <FoodMenuCarousel menus={menuData} />
      {noticeSection()}
    </FlexBox>
  );
};
export default Now;
