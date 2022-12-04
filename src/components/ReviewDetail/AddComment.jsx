import styled from "styled-components";
import { FlexBox, FlexButton } from "../Common";
import FlexTextBox from "../Common/FlexTextBox";
import COLOR from "constants/color";
import { usePostCommentMutation } from "queries/comment";
import useInput from "hooks/useInput";
import { useRecoilValue } from "recoil";
import { userInfo } from "states";
const Title = styled.span`
  font-size: 2rem;
  font-weight: 800;
  margin-right: 2rem;
`;

const CommentCnt = styled.span`
  font-size: 1.2rem;
  font-weight: 800;
  color: #717171;
`;

const AddCommentBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 5rem;
  margin-top: 6%;
  border-radius: 1rem;
  background-color: #f2f2f2;
`;

const AddCommentText = styled.input`
  width: 70%;
  height: 100%;
  margin-top: 0.2%;
  font-size: 1.25rem;
  font-weight: 600;
  border: None;
  color: #666;
  background-color: transparent;
`;

const AddComment = ({ count, postId }) => {
  const [content, changeContent, reset] = useInput("");
  const { mutate } = usePostCommentMutation();
  const user = useRecoilValue(userInfo);
  const submitComment = () => {
    mutate({
      post: postId,
      content: content,
    });
    reset();
  };
  return (
    <FlexBox width="100%" column borderBottom="1px solid #b5b5b5">
      <FlexBox>
        <Title>국민 TALK</Title>
        <CommentCnt> 총 {count}개</CommentCnt>
      </FlexBox>
      <FlexBox width="100%">
        <AddCommentBox>
          <FlexBox
            width="3rem"
            height="3rem"
            borderRadius="50%"
            background="#FFC8C8"
            margin="0 1rem 0 1rem"
          />
          <FlexTextBox margin="0 3rem 0 0" fontSize="1.25rem">
            {user.nickName}
          </FlexTextBox>
          <AddCommentText
            type="text"
            name="comment"
            onChange={changeContent}
            value={content}
            placeholder="댓글을 입력해주세요."
          />
        </AddCommentBox>
      </FlexBox>
      <FlexBox width="100%" justifyContent="flex-end">
        <FlexButton
          onClick={submitComment}
          fontSize="1.1rem"
          backgroundColor={COLOR.btn.main_gra}
          color="#fff"
          padding="0.8rem 1.5rem"
          margin="1rem 0 2rem 0"
        >
          올리기
        </FlexButton>
      </FlexBox>
    </FlexBox>
  );
};

export default AddComment;
