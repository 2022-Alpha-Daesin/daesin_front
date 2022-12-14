import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PostContainer = styled.div`
  width: 70%;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  background-color: #fff;
  cursor: pointer;
  box-shadow: 1px 2px 3px 1px #e0e0e0;
`;

const ReviewPostTitle = styled.p`
  font-size: 1.15rem;
  margin-bottom: 0.3rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
`;

const ReviewPostContent = styled.p`
  margin-bottom: 0.4rem;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0.1rem;
  color: #717171;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ReviewPostDate = styled.span`
  font-size: 1rem;
  font-weight: 500;
  margin-right: 1.5rem;
`;

const ReviewPostCommentCnt = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;

const ReviewPostList = (props) => {
  const navigate = useNavigate();
  if ("isNotice" in props) {
    return (
      <PostContainer onClick={() => (window.location.href = props.content)}>
        <ReviewPostTitle>{props?.title}</ReviewPostTitle>
        <ReviewPostContent>{props?.content}</ReviewPostContent>
        {/* <ReviewPostCommentCnt>댓글{props?.comment_count}</ReviewPostCommentCnt> */}
      </PostContainer>
    );
  } else {
    return (
      <PostContainer onClick={() => navigate(`/review/${props.id}`)}>
        <ReviewPostTitle>{props?.title}</ReviewPostTitle>
        <ReviewPostContent>{props?.content}</ReviewPostContent>
        <ReviewPostDate>{props?.updated_at?.split("/")[0]}</ReviewPostDate>
        <ReviewPostCommentCnt>댓글{props?.comments_count}</ReviewPostCommentCnt>
      </PostContainer>
    );
  }
};

export default ReviewPostList;
