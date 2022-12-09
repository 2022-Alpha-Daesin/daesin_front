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
  const [category, setCategory] = useState(0);
  const { data: ADList } = useADListQuery();

  console.log(ADList);

  const handleClick = (id, idd) => {
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
    setCategory(idd);
  };

  const insertCard = () => {
    const newArr = [];
    if (category === 0) {
      for (let i = 0; i < ADList.results.length; i += 1) {
        newArr.push(
          <ADCard
            key={ADList.results[i].id}
            title={ADList.results[i].title}
            content={ADList.results[i].content}
            id={ADList.results[i].id}
          />,
        );
      }
    } else {
      for (let i = 0; i < ADList.results.length; i += 1) {
        if (ADList.results[i].tags.length === 0) {
          continue;
        }
        if (ADList.results[i].tags[0].tag === category)
          newArr.push(
            <ADCard
              key={ADList.results[i].id}
              title={ADList.results[i].title}
              content={ADList.results[i].content}
              id={ADList.results[i].id}
            />,
          );
      }
    }

    return newArr;
  };

  return (
    <>
      <FlexBox gap="1rem">
        <Btn
          isClicked={isClicked[0]}
          onClick={() => {
            handleClick(0, 0);
          }}
        >
          ALL
        </Btn>
        <Btn
          isClicked={isClicked[1]}
          onClick={() => {
            handleClick(1, 2);
          }}
        >
          동아리
        </Btn>
        <Btn
          isClicked={isClicked[2]}
          onClick={() => {
            handleClick(2, 12);
          }}
        >
          알파프로젝트
        </Btn>
        <Btn
          isClicked={isClicked[3]}
          onClick={() => {
            handleClick(3, 13);
          }}
        >
          알바
        </Btn>
        <Btn
          isClicked={isClicked[4]}
          onClick={() => {
            handleClick(4, 0);
          }}
        >
          기타
        </Btn>
      </FlexBox>
      <FlexBox gap="1.5rem" wrap="wrap">
        {insertCard()}
      </FlexBox>
    </>
  );
};
export default ADCardWrapper;
