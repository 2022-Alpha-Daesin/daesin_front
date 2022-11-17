import { FlexBox, FlexTextBox } from "components/Common";
import styled from "styled-components";
import COLOR from "constants/color";

const Container = styled.div`
  width: 8.75rem;
  height: 7rem;
  padding: 0.8rem 1.2rem;
  border-radius: 0.8rem;
  background: ${COLOR.bg.blue};
  :hover {
    box-shadow: 3px 3px 6px rgba(97, 97, 97, 0.5);
  }
`;

const HotKeyword = () => {
  return (
    <FlexBox gap="1.5rem">
      <Container>
        <FlexTextBox fontSize="2rem" fontWeight={1000}>
          01
        </FlexTextBox>
        <FlexTextBox fontSize="1.2rem" margin="0.5rem 1.2rem">
          에어팟
        </FlexTextBox>
      </Container>
      <Container>
        <FlexTextBox fontSize="2rem" fontWeight={1000}>
          02
        </FlexTextBox>
        <FlexTextBox fontSize="1.2rem" margin="0.5rem 1.2rem">
          에어팟
        </FlexTextBox>
      </Container>
      <Container>
        <FlexTextBox fontSize="2rem" fontWeight={1000}>
          03
        </FlexTextBox>
        <FlexTextBox fontSize="1.2rem" margin="0.5rem 1.2rem">
          에어팟
        </FlexTextBox>
      </Container>
      <Container>
        <FlexTextBox fontSize="2rem" fontWeight={1000}>
          04
        </FlexTextBox>
        <FlexTextBox fontSize="1.2rem" margin="0.5rem 1.2rem">
          에어팟
        </FlexTextBox>
      </Container>
      <Container>
        <FlexTextBox fontSize="2rem" fontWeight={1000}>
          05
        </FlexTextBox>
        <FlexTextBox fontSize="1.2rem" margin="0.5rem 1.2rem">
          에어팟
        </FlexTextBox>
      </Container>
    </FlexBox>
  );
};
export default HotKeyword;
