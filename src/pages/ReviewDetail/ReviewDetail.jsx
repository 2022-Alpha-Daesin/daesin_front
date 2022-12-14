import FlexBox from "components/Common/FlexBox";
import FlexTextBox from "components/Common/FlexTextBox";
import Searchbar from "components/Navbar/Searchbar";
import styled from "styled-components";
import { Icon, Button } from "semantic-ui-react";
import AddComment from "components/ReviewDetail/AddComment";
import CommentList from "components/ReviewDetail/CommentList";
import CommentReply from "components/ReviewDetail/CommentReply";
import { useParams } from "react-router-dom";
import { useReviewDetailQuery } from "queries/review";
import { useScrapMutation } from "queries/scrap";
import { useState } from "react";
import { useEffect } from "react";

const Line = styled.div`
  width: 0.12rem;
  height: 100vh;
  background: #b5b5b5;
`;

const ReviewDetail = () => {
  const params = useParams();
  const { data: review } = useReviewDetailQuery(params.id);
  const { mutate } = useScrapMutation();
  const [isScrap, setIsScrap] = useState(false);

  useEffect(() => {
    if ("post" in review) {
      setIsScrap(review.post.is_scraped);
    }
  }, [review]);
  const clickScrap = () => {
    setIsScrap(!isScrap);
    mutate({ post: review.post.id });
  };
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
              <Button icon onClick={clickScrap}>
                {isScrap ? (
                  <Icon name="bookmark" size="large" link />
                ) : (
                  <Icon name="bookmark outline" size="large" link />
                )}
              </Button>
            </FlexBox>
          </FlexBox>
          <FlexTextBox fontSize="2rem">{"post" in review && review.post?.title}</FlexTextBox>
          <FlexBox width="100%" center column>
            {"post" in review &&
              review.post?.image_list.map((image, id) => <img key={id} src={image.image}></img>)}
            <FlexTextBox width="100%" fontSize="1.1rem" marginBottom="10%">
              <br />
              {"post" in review && review.post?.content}
            </FlexTextBox>
          </FlexBox>
          <AddComment count={"post" in review && review.post?.comments_count} postId={params.id} />
          {"post" in review &&
            review.post?.comments.map((comment, ind, alList) => {
              if (comment.parent) {
                return;
              }
              const children = alList.filter((item) => item.parent === comment.id);
              if (children === []) {
                return <CommentList postId={params.id} key={comment.id} {...comment} />;
              } else {
                return (
                  <>
                    <CommentList postId={params.id} key={comment.id} {...comment} />
                    {children.map((child) => (
                      <CommentReply postId={params.id} key={child.id} {...child} />
                    ))}
                  </>
                );
              }
            })}
        </FlexBox>
        <Line />
      </FlexBox>
    </FlexBox>
  );
};
export default ReviewDetail;
