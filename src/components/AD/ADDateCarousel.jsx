import { useState } from "react";
import { FlexBox, FlexTextBox } from "components/Common";
import { ADCard } from "components/AD";
import COLOR from "constants/color";
import styled from "styled-components";
import useADDeadLineQuery from "queries/AD/useADDeadLineQuery";

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
  background: ${(props) => (props.isClicked ? COLOR.btn.gra2 : "transparent")};
  cursor: pointer;
`;

const Line = styled.div`
  width: 22rem;
  height: 0.1rem;
  background-color: black;
`;

const ADDateCarousel = () => {
  const [isClicked, setClick] = useState([true, false, false, false, false]);
  const [dayy, setDay] = useState("");
  const [deadline, setDeadline] = useState("deadline_" + dayy);
  const { data: ad } = useADDeadLineQuery(deadline);
  const handleClickDate = (id) => {
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
    let cid = id > 3 ? 3 : id;
    setDay(cid);
    setDeadline("deadline_" + cid);
  };

  const insertDateBtn = () => {
    const newArr = [];
    for (let i = 0; i < 5; i += 1) {
      newArr.push(
        <Btn
          key={i}
          isClicked={isClicked[i]}
          onClick={() => {
            handleClickDate(i);
          }}
        >
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

  return (
    <>
      <FlexBox column>
        <FlexBox gap="1rem" margin="0 0 0.2rem 0">
          {insertDateBtn()}
        </FlexBox>
        <Line />
      </FlexBox>
      <FlexBox wrap="wrap" gap="0.75rem" margin="1rem 0 2rem 0">
        {ad &&
          ad.map((data, idx) => (
            <ADCard
              key={idx}
              title={data.post.title}
              content={data.post.content}
              id={data.post.id}
            />
          ))}
      </FlexBox>
    </>
  );
};
export default ADDateCarousel;
