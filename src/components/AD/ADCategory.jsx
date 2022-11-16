import { useState } from "react";
import styled from "styled-components";
import COLOR from "constants/color";
import FlexBox from "components/Common/FlexBox";

const Btn = styled.button`
  width: 6.8rem;
  height: 2.6rem;
  border-radius: 1.6rem;
  border: 1.6px solid ${COLOR.font.select};
  font-size: 0.9rem;
  font-weight: 800;
  color: ${(props) => (props.isClicked ? "white" : "#5c5c5c")};
  background: ${(props) => (props.isClicked ? COLOR.btn.main_gra : "transparent")};
  opacity: 0.7;
  cursor: pointer;
`;

const ADCategory = () => {
  const [isClicked, setClick] = useState([1, 0, 0, 0, 0]);

  const handleClick = (id) => {
    setClick(
      isClicked.map((data, idx) => {
        if (idx === id) {
          data = !data;
        }
        return data;
      }),
    );
  };

  return (
    <FlexBox gap="1rem">
      <Btn
        isClicked={isClicked[0]}
        onClick={() => {
          handleClick(0);
        }}
      >
        ALL
      </Btn>
      <Btn
        isClicked={isClicked[1]}
        onClick={() => {
          handleClick(1);
        }}
      >
        동아리
      </Btn>
      <Btn
        isClicked={isClicked[2]}
        onClick={() => {
          handleClick(2);
        }}
      >
        알파프로젝트
      </Btn>
      <Btn
        isClicked={isClicked[3]}
        onClick={() => {
          handleClick(3);
        }}
      >
        알바
      </Btn>
      <Btn
        isClicked={isClicked[4]}
        onClick={() => {
          handleClick(4);
        }}
      >
        기타
      </Btn>
    </FlexBox>
  );
};
export default ADCategory;
