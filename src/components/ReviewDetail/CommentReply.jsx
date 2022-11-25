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

const CommentReply = () => {
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
          멋쟁이 사자처럼
        </FlexTextBox>
        <FlexTextBox margin="0 1rem 0 0" fontSize="1.1rem" width="70%" padding="0 0 2% 0">
          댓글의 대댓글입니다.댓글의 대댓글입니다.댓글의 대댓글입니다.댓글의 대댓글입니다.댓글
        </FlexTextBox>
      </FlexBox>
      <FlexBox color="#717171" justifyContent="flex-end" width="93%">
        <ThumbUpOffAltIcon />
        <RecommendCnt>2</RecommendCnt>
        <CommentDate>2022.11.18</CommentDate>
      </FlexBox>
    </FlexBox>
  );
};

export default CommentReply;
