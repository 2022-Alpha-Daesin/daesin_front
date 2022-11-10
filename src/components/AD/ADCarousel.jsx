import { useState } from 'react';
import FlexBox from 'components/Common/FlexBox';
import ADCard from 'components/AD/ADCard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import dummyData from './dummyData';

const ADCarousel = () => {
  const [cnt, setCnt] = useState(1);
  const [data, setData] = useState(dummyData);

  const cntUp = () => {
    cnt >= data.length / 4 ? setCnt(1) : setCnt(cnt + 1);
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
    let range = cnt * 4;
    if (range > data.length) {
      range = range - (4 - (data.length % 4));
    }
    const newArr = [];
    for (let i = cnt * 4 - 4; i < range; i += 1) {
      newArr.push(
        <ADCard
          key={i}
          isClicked={data[i].isClicked}
          onClick={() => {
            handleClick(data[i].id);
          }}
          title={data[i].title}
          content={data[i].content}
        >
          {data[i].study}
        </ADCard>,
      );
    }
    return newArr;
  };

  return (
    <FlexBox wrap="wrap" gap="0.75rem" margin="1rem 0 2rem 0">
      {insertBtn(cnt)}
      <ArrowForwardIosIcon
        sx={{ margin: '9rem 0 0 0', color: 'black', cursor: 'pointer' }}
        onClick={() => {
          cntUp();
        }}
      />
    </FlexBox>
  );
};
export default ADCarousel;
