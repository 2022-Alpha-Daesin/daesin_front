import FlexBox from "components/Common/FlexBox";
import FlexTextBox from "components/Common/FlexTextBox";
import FlexButton from "components/Common/FlexButton";
import Searchbar from "components/Navbar/Searchbar";
import styled from "styled-components";
import ReviewCategory from "components/Review/ReviewCategory";
import ReviewPostList from "../../components/Review/ReviewPostList";

const Text = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(to bottom, #ff8f28, #db00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.9;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding-bottom: 3rem;
`;

const Review = () => {
  return (
    <FlexContainer>
      <FlexBox alignItems="flex-start" column margin="2rem 0 0 0" gap="2rem">
        <Searchbar />
        <FlexBox>
          <Text>후기</Text>
          <FlexButton textDecoration="underline" padding="0.2rem 1rem">
            후기 작성하기
          </FlexButton>
        </FlexBox>
        <ReviewCategory />
      </FlexBox>
      <FlexBox column margin="2rem 0 0 0" gap="2rem">
        <FlexBox column gap="2rem">
          <FlexTextBox fontSize="1.8rem" margin="1rem 0 0 0">
            전과/복전/부전
          </FlexTextBox>
        </FlexBox>
        <ReviewCategory />
        <ReviewPostList />
        <ReviewPostList />
        <ReviewPostList />
        <ReviewPostList />
        <ReviewPostList />
      </FlexBox>
    </FlexContainer>
  );
};

export default Review;
