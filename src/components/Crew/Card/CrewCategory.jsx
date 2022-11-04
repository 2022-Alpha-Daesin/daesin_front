import { useState } from 'react';
import styled from 'styled-components';
import COLOR from 'constants/color';
import FlexBox from 'components/Common/FlexBox';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import dummyData from './dummyData';

const Btn = styled.button`
  padding: 0.85rem 0.6rem;
  border-radius: 1.6rem;
  border: 1.6px solid ${COLOR.font.select};
  font-size: 0.9rem;
  font-weight: 800;
  color: ${(props) => (props.isClicked ? 'white' : '#5c5c5c')};
  background: ${(props) => (props.isClicked ? COLOR.btn.main_gra : 'transparent')};
  opacity: 0.7;
  cursor: pointer;
`;

const CrewCategory = () => {
  const [cnt, setCnt] = useState(1);
  const [data, setData] = useState(dummyData);

  const cntUp = () => {
    cnt >= data.length / 8 ? setCnt(1) : setCnt(cnt + 1);
  };

  const handleClick = (id) => {
    setData(
      data.map((data) => {
        if (data.id === id) {
          data.isClicked = !data.isClicked;
        }
        return data;
      }),
    );
  };

  const insertBtn = (cnt) => {
    let range = cnt * 8;
    if (range > data.length) {
      range = range - (8 - (data.length % 8));
    }
    const newArr = [];
    for (let i = cnt * 8 - 8; i < range; i += 1) {
      newArr.push(
        <Btn
          isClicked={data[i].isClicked}
          onClick={() => {
            handleClick(data[i].id);
          }}
        >
          {data[i].study}
        </Btn>,
      );
    }
    return newArr;
  };

  return (
    <FlexBox wrap="wrap" gap="0.8rem">
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
