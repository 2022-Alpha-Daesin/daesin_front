import styled from "styled-components";
import { FlexBox, FlexTextBox } from "components/Common";

const Text = styled.div`
  color: #292929;
  font-size: 0.92rem;
  font-weight: 600;
  line-height: 120%;
  text-align: center;
  margin: 0.1rem 0 0 0;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const MyArticleCard = ({ title, updated_at, comments_count, content, onClick }) => {
  return (
    <FlexBox
      width="100%"
      // height="7rem"
      padding="0.8rem 1.5rem"
      gap="1rem"
      background="white"
      boxShadow="1px 2px 3px 2px #ececec"
      cursor="pointer"
      column
      onClick={onClick}
    >
      <FlexTextBox fontSize="1.05rem">{title}</FlexTextBox>
      <Text>{content}</Text>
      <FlexBox gap="1rem">
        <FlexTextBox>{updated_at && updated_at.split("/")[0]}</FlexTextBox>
        <FlexTextBox>댓글 {comments_count}</FlexTextBox>
      </FlexBox>
    </FlexBox>
  );
};

export default MyArticleCard;
