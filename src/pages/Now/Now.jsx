import { FlexBox, FlexTextBox } from "components/Common";
import Searchbar from "components/Navbar/Searchbar";
import FoodMenuCarousel from "components/Now/FoodMenuCarousel";
import HotKeyword from "components/Now/HotKeyword";
import styled from "styled-components";

const Text = styled.div`
  margin: 1rem 0;
  font-size: 1.5rem;
  font-weight: 1000;
  background: linear-gradient(to bottom, #ff8f28, #db00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.9;
`;

const Now = () => {
  return (
    <FlexBox width="100%" column gap="1.3rem">
      <FlexBox margin="1.9rem 0 0 0">
        <Searchbar />
      </FlexBox>
      <Text>NOW</Text>
      <FlexTextBox fontSize="1.25rem">오늘의 메뉴</FlexTextBox>
      <FoodMenuCarousel />
      <FlexTextBox fontSize="1.25rem">오늘의 실시간 검색어</FlexTextBox>
      <HotKeyword />
    </FlexBox>
  );
};
export default Now;
