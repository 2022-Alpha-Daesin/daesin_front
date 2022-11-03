import { useState } from 'react';
import styled from 'styled-components';
import COLOR from 'constants/color';
import FlexBox from 'components/Common/FlexBox';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const dummyData = [
  '소프트웨어학과',
  '도자공예학과',
  '영어영문학과',
  '중어중문학과',
  '기계공학과',
  '국어국문학과',
  '전자공학과',
  '영어영문학과',
  '중어중문학과',
  '기계공학과',
  '국어국문학과',
  '체육학과',
  '소프트웨어학과',
  '소프트웨어학과',
  '영어영문학과',
  '영어영문학과',
];

const Btn = styled.button`
  padding: 0.85rem 0.6rem;
  border-radius: 1.6rem;
  border: 1.6px solid ${COLOR.font.select};
  font-size: 0.9rem;
  font-weight: 800;
  color: ${COLOR.font.select};
  background-color: ${(props) => (props.isClicked ? 'grey' : 'transparent')};
  cursor: pointer;
`;

const CrewCategory = () => {
  const [cnt, setCnt] = useState(1);
  const [isClicked, setClicked] = useState(false);

  const cntUp = () => {
    cnt >= dummyData.length / 8 ? setCnt(1) : setCnt(cnt + 1);
  };

  const handleClick = () => {
    setClicked(!isClicked);
  };

  const insertBtn = (cnt) => {
    let range = cnt * 8;
    if (range > dummyData.length) {
      range = range - (8 - (dummyData.length % 8));
    }
    const newArr = [];
    for (let i = cnt * 8 - 8; i < range; i += 1) {
      newArr.push(
        <Btn isClicked={isClicked} onClick={handleClick}>
          {dummyData[i]}
        </Btn>,
      );
    }
    return newArr;
  };

  return (
    <FlexBox wrap="wrap" gap="0.8rem" margin="2rem">
      {insertBtn(cnt)}
      <ArrowForwardIosIcon
        sx={{ margin: '0.6rem 0 0 0', color: COLOR.font.select, cursor: 'pointer' }}
        onClick={() => {
          cntUp();
        }}
      />
    </FlexBox>
  );
};
export default CrewCategory;
