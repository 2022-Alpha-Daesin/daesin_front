import { FlexBox, FlexTextBox } from "components/Common";
import useDate from "hooks/useDate";

const MyArticleCard = () => {
  let date = useDate();
  date = date.slice(5, -1);
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
    >
      <FlexTextBox fontSize="1.05rem">아아아아아아ㅏㅏ제목제목</FlexTextBox>
      <FlexTextBox fontSize="0.95rem" fontWeight={500} color="#717171">
        아아아아아아ㅏ아아아아아아ㅏ아아아아아아아아아아...
      </FlexTextBox>
      <FlexBox gap="1rem">
        <FlexTextBox>{date}</FlexTextBox>
        <FlexTextBox>댓글 2</FlexTextBox>
      </FlexBox>
    </FlexBox>
  );
};

export default MyArticleCard;
