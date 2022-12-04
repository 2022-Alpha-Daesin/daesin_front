import FlexBox from "components/Common/FlexBox";
import FlexTextBox from "components/Common/FlexTextBox";
import Searchbar from "components/Navbar/Searchbar";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import AddComment from "components/ReviewDetail/AddComment";
import CommentList from "components/ReviewDetail/CommentList";
import CommentReply from "components/ReviewDetail/CommentReply";
import { useParams } from "react-router-dom";
import { useReviewDetailQuery } from "queries/review";
import { useCallback } from "react";

const Line = styled.div`
  width: 0.12rem;
  height: 100vh;
  background: #b5b5b5;
`;

const ReviewDetail = () => {
  const params = useParams();
  const { data: review } = useReviewDetailQuery(params.id);
  console.log(review);
  return (
    <FlexBox width="100%" column>
      <Searchbar />
      <FlexBox width="100%" margin="2.5rem 0 0 0" gap="5%">
        <Line />
        <FlexBox gap="2rem" column margin="2rem 0 0 0">
          <FlexBox width="100%" position="relative">
            <FlexBox width="3rem" height="3rem" borderRadius="50%" background="#FFC8C8" />
            <FlexBox column gap="0.2rem" margin="0.2rem 0 0 0.8rem">
              <FlexTextBox fontSize="1.25rem">
                {"post" in review && review.post?.author?.nickname}
              </FlexTextBox>
              <FlexTextBox fontSize="0.85rem" color="#717171">
                {"post" in review && review.post?.created_at.split("/")[0]}
              </FlexTextBox>
            </FlexBox>
            <FlexBox margin="1rem 0 0 0" position="absolute" right="0" width="5rem">
              <Icon disabled name="bookmark outline" size="large" link />
              <Icon disabled name="paperclip" size="large" link />
            </FlexBox>
          </FlexBox>
          <FlexTextBox fontSize="2rem">{"post" in review && review.post?.title}</FlexTextBox>
          <FlexBox width="100%" center column>
            {"post" in review &&
              review.post?.image_list.map((image) => <img src={image.image}></img>)}
            <FlexTextBox width="100%" fontSize="1.1rem" marginBottom="10%">
              <br />
              {"post" in review && review.post?.content}
            </FlexTextBox>
          </FlexBox>
          <AddComment />
          <CommentList />
          <CommentReply />
          <CommentList />
          <CommentList />
        </FlexBox>
        <Line />
      </FlexBox>
    </FlexBox>
  );
};
export default ReviewDetail;
