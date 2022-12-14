import { FlexBox, FlexTextBox } from "components/Common";

const MyArticleCard = ({ title, updated_at, comments_count, content, onClick }) => {
  return (
    <FlexBox
      width="100%"
      height="7rem"
      padding="0.8rem 1.5rem"
      gap="1rem"
      background="white"
      boxShadow="1px 2px 3px 2px #ececec"
      cursor="pointer"
      column
      onClick={onClick}
    >
      <FlexTextBox fontSize="1.05rem">{title}</FlexTextBox>
      <FlexTextBox fontSize="0.95rem" fontWeight={500} color="#717171">
        {content}
      </FlexTextBox>
      <FlexBox gap="1rem">
        <FlexTextBox>{updated_at && updated_at.split("/")[0]}</FlexTextBox>
        <FlexTextBox>댓글 {comments_count}</FlexTextBox>
      </FlexBox>
    </FlexBox>
  );
};

export default MyArticleCard;
