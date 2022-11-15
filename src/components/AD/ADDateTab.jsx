import FlexBox from "components/Common/FlexBox";
import FlexTextBox from "components/Common/FlexTextBox";
import styled from "styled-components";
import COLOR from "constants/color";

let today = new Date();
let date = today.getDate();
let day = today.getDay(); // 몇일인지
let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Btn = styled.button`
  display: flex;
  flex-direction: column;
  width: 2.7rem;
  padding: 0.8rem 0;
  border-radius: 0.4rem;
  cursor: pointer;
  :focus {
    background: ${COLOR.btn.gra2};
  }
`;

const Line = styled.div`
  width: 24rem;
  height: 0.1rem;
  background-color: black;
`;

const insertBtn = () => {
  const newArr = [];
  for (let i = 0; i < 5; i += 1) {
    newArr.push(
      <Btn key={i}>
        <FlexTextBox width="2.7rem" fontSize="1.1rem" margin="0 0 0.8rem 0" textAlign="center">
          {date + i}
        </FlexTextBox>
        <FlexTextBox width="2.7rem" fontSize="0.9rem" textAlign="center">
          {week[(day + i) % 7]}
        </FlexTextBox>
      </Btn>,
    );
  }
  return newArr;
};

const ADDateTab = () => {
  return (
    <FlexBox column>
      <FlexBox gap="1rem" margin="0 0 0.2rem 0">
        {insertBtn()}
      </FlexBox>
      <Line />
    </FlexBox>
  );
};

export default ADDateTab;
