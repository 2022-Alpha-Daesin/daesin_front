import { useState } from "react";
import FlexBox from "components/Common/FlexBox";
import ADCard from "components/AD/ADCard";
import useADListQuery from "queries/AD/useADListQuery";
import COLOR from "constants/color";
import styled from "styled-components";

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

const ADCardWrapper = () => {
  const [isClicked, setClick] = useState([true, false, false, false, false]);
  const [id, setId] = useState(0);
  const { data: ADList } = useADListQuery();

  console.log(ADList.results);

  const handleClick = (id) => {
    setClick(
      isClicked.map((data, idx) => {
        if (data === true) {
          data = false;
        }
        if (idx === id) {
          data = !data;
        }

        return data;
      }),
    );
    console.log(isClicked);
  };

  const cardList = ADList.results.map(
    (data, idx) =>
      id === 0 && <ADCard key={idx} title={data.title} content={data.content} id={data.id} />,
  );
  return (
    <>
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
      <FlexBox gap="1.5rem" wrap="wrap">
        {cardList}
      </FlexBox>
    </>
  );
};
export default ADCardWrapper;
