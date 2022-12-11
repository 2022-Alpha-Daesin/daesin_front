import { useState } from "react";
import styled from "styled-components";
import { FlexBox, FlexButton } from "../Common";
import FlexTextBox from "../Common/FlexTextBox";
// import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import AddCommentReply from "./AddCommentReply";

const RecommendCnt = styled.span`
  margin-left: 0.5rem;
  font-size: 1.2rem;
`;

const CommentReplyBtn = styled.span`
  margin: 0 1rem 0 1rem;
  cursor: pointer;
  font-size: 1.2rem;
  :hover {
    text-decoration: underline;
  }
`;

const CommentDate = styled.span`
  font-size: 1.2rem;
`;

const CommentList = ({ content, id, username, updated_at, postId }) => {
  const [replyOpen, setReplyOpen] = useState(false);
  const replyOpenHandler = () => {
    setReplyOpen(!replyOpen);
  };

  return (
    <FlexBox column width="100%" borderBottom="1px solid #b5b5b5" padding="0 0 1.5% 0">
      <FlexBox width="100%" height="100%" alignItems="center">
        <FlexBox
          width="3rem"
          height="3rem"
          borderRadius="50%"
          background="#FFC8C8"
          margin="0 1rem  1rem"
        />
        <FlexTextBox margin="0 3rem 0 0" fontSize="1.25rem" padding="0 0 2% 0">
          {username}
        </FlexTextBox>
        <FlexTextBox margin="0 1rem 0 0" fontSize="1.25rem" width="70%" padding="0 0 2% 0">
          {content}
        </FlexTextBox>
      </FlexBox>
      <FlexBox color="#717171" justifyContent="flex-end" width="93%">
        <ThumbUpOffAltIcon />
        <RecommendCnt></RecommendCnt>
        <CommentReplyBtn onClick={replyOpenHandler}>답글쓰기</CommentReplyBtn>
        <CommentDate>{updated_at.split("/")[0]}</CommentDate>
      </FlexBox>
      {replyOpen ? (
        <AddCommentReply CommentId={id} postId={postId} setReplyOpen={setReplyOpen} />
      ) : null}
    </FlexBox>
  );
};

export default CommentList;
