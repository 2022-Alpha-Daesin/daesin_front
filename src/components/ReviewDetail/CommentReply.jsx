import { useState } from "react";
import styled from "styled-components";
import { FlexBox, FlexButton } from "../Common";
import FlexTextBox from "../Common/FlexTextBox";
// import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import AddCommentReply from "./AddCommentReply";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";

const RecommendCnt = styled.span`
  margin-left: 0.5rem;
  font-size: 1.1rem;
`;

const CommentDate = styled.span`
  margin-left: 1rem;
  font-size: 1.1rem;
`;

const CommentReply = ({ content, id, username, updated_at, postId }) => {
  return (
    <FlexBox column width="100%" borderBottom="1px solid #b5b5b5" padding="0 0 1.5% 5%">
      <FlexBox width="95%" height="100%" alignItems="center">
        <SubdirectoryArrowRightIcon fontSize="large" />

        <FlexBox
          width="3rem"
          height="3rem"
          borderRadius="50%"
          background="#FFC8C8"
          margin="0 1rem  1rem"
        />
        <FlexTextBox margin="0 2rem 0 0" fontSize="1rem" padding="0 0 2% 0">
          {username}
        </FlexTextBox>
        <FlexTextBox margin="0 1rem 0 0" fontSize="1.1rem" width="70%" padding="0 0 2% 0">
          {content}
        </FlexTextBox>
      </FlexBox>
      <FlexBox color="#717171" justifyContent="flex-end" width="93%">
        <ThumbUpOffAltIcon />
        <RecommendCnt></RecommendCnt>
        <CommentDate>{updated_at.split("/")[0]}</CommentDate>
      </FlexBox>
    </FlexBox>
  );
};

export default CommentReply;
