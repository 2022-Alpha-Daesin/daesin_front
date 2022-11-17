import styled from "styled-components";

const PostContainer = styled.div`
  width: 100%;
  height: 6rem;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  background-color: #fff;
  cursor: pointer;
  box-shadow: 1px 2px 3px 1px #f7f7f7;
`;

const ReviewPostTitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 0.3rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
`;

const ReviewPostContent = styled.p`
  margin-bottom: 0.4rem;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0.1rem;
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

const ReviewPostList = () => {
  return (
    <PostContainer>
      <ReviewPostTitle>소프트웨어 융합학부 전과 면접 꿀팁</ReviewPostTitle>
      <ReviewPostContent>이번에 면접까지 보게 되었는데 꿀팁 같은게 있을까요?</ReviewPostContent>
      <ReviewPostDate>10.25</ReviewPostDate>
      <ReviewPostCommentCnt>댓글 2</ReviewPostCommentCnt>
    </PostContainer>
  );
};

export default ReviewPostList;
