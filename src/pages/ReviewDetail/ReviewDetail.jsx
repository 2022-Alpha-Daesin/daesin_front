import FlexBox from "components/Common/FlexBox";
import FlexTextBox from "components/Common/FlexTextBox";
import Searchbar from "components/Navbar/Searchbar";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import AddComment from "components/ReviewDetail/AddComment";
import CommentList from "components/ReviewDetail/CommentList";

const Line = styled.div`
  width: 0.12rem;
  height: 100vh;
  background: #b5b5b5;
`;

const ReviewDetail = () => {
  return (
    <FlexBox width="100%" column>
      <Searchbar />
      <FlexBox width="100%" margin="2.5rem 0 0 0" gap="5%">
        <Line />
        <FlexBox gap="2rem" column margin="2rem 0 0 0">
          <FlexBox width="100%" position="relative">
            <FlexBox width="3rem" height="3rem" borderRadius="50%" background="#FFC8C8" />
            <FlexBox column gap="0.2rem" margin="0.2rem 0 0 0.8rem">
              <FlexTextBox fontSize="1.25rem">멋쟁이 사자처럼</FlexTextBox>
              <FlexTextBox fontSize="0.85rem" color="#717171">
                2022.10.14
              </FlexTextBox>
            </FlexBox>
            <FlexBox margin="1rem 0 0 0" position="absolute" right="0" width="5rem">
              <Icon disabled name="bookmark outline" size="large" link />
              <Icon disabled name="paperclip" size="large" link />
            </FlexBox>
          </FlexBox>
          <FlexTextBox fontSize="2rem">[멋쟁이 사자 처럼 8기] 아기사자 대모집!!</FlexTextBox>
          <FlexBox width="100%" center column>
            <FlexTextBox width="100%" fontSize="1.1rem" marginBottom="10%">
              안녕하세요! 교내 소프트웨어 동아리 멋쟁이 사자처럼 at 국민대입니다.
              <br /> <br /> 국민대 멋쟁이 사자처럼이 8기 아기 사자를 모집합니다. 안녕하세요! 교내
              소프트웨어 동아리 멋쟁이 사자처럼 at 국민대입니다. 국민대 멋쟁이 사자처럼이 8기 아기
              사자를 모집합니다. 국민대 멋쟁이 사자처럼이 8기 아기 사자를 모집합니다. 안녕하세요!
              교내 소프트웨어 동아리 멋쟁이 사자처럼 at 국민대입니다. 국민대 멋쟁이 사자처럼이 8기
              아기 사자를 모집합니다. 국민대 멋쟁이 사자처럼이 8기 아기 사자를 모집합니다.
              안녕하세요! 교내 소프트웨어 동아리 멋쟁이 사자처럼 at 국민대입니다. 국민대 멋쟁이
              사자처럼이 8기 아기 사자를 모집합니다. 국민대 멋쟁이 사자처럼이 8기 아기 사자를
              모집합니다. 안녕하세요! 교내 소프트웨어 동아리 멋쟁이 사자처럼 at 국민대입니다. 국민대
              멋쟁이 사자처럼이 8기 아기 사자를 모집합니다.
            </FlexTextBox>
          </FlexBox>
          <AddComment />
          <CommentList />
          <CommentList />
          <CommentList />
          <CommentList />
        </FlexBox>
        <Line />
      </FlexBox>
    </FlexBox>
  );
};
export default ReviewDetail;
