import { useState } from "react";
import styled from "styled-components";
import { FlexBox, FlexButton } from "../Common";
import FlexTextBox from "../Common/FlexTextBox";
// import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentReply from "./CommentReply";

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

const CommentList = () => {
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
          멋쟁이 사자처럼
        </FlexTextBox>
        <FlexTextBox margin="0 1rem 0 0" fontSize="1.25rem" width="70%" padding="0 0 2% 0">
          국민대 멋쟁이 사자처럼이 8기 아기 사자를 모집합니다. 안녕하세요! 교내 소프트웨어 동아리
          멋쟁이 사자처럼 at 국민대입니다. 국민대 멋쟁이 사자처럼이 8기 아기 사자를 모집합니다.
        </FlexTextBox>
      </FlexBox>
      <FlexBox color="#717171" justifyContent="flex-end" width="93%">
        <ThumbUpOffAltIcon />
        <RecommendCnt>2</RecommendCnt>
        <CommentReplyBtn onClick={replyOpenHandler}>답글쓰기</CommentReplyBtn>
        <CommentDate>2022.11.18</CommentDate>
      </FlexBox>
      {replyOpen ? <CommentReply /> : null}
    </FlexBox>
  );
};

export default CommentList;
