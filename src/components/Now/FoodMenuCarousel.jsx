import { useState } from "react";
import { FlexBox } from "components/Common";
import FoodMenuCard from "components/Now/FoodMenuCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import dummyFoodData from "./dummyFoodData";

const FoodMenuCarousel = () => {
  const [cnt, setCnt] = useState(1);
  const [data, setData] = useState(dummyFoodData);

  const cntUp = () => {
    cnt >= data.length / 3 ? setCnt(1) : setCnt(cnt + 1);
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
    let range = cnt * 3;
    if (range > data.length) {
      range = range - (3 - (data.length % 3));
    }
    const newArr = [];
    for (let i = cnt * 3 - 3; i < range; i += 1) {
      newArr.push(
        <FoodMenuCard
          key={i}
          isClicked={data[i].isClicked}
          onClick={() => {
            handleClick(data[i].id);
          }}
          img={data[i].img}
          place={data[i].place}
          category={data[i].category}
        />,
      );
    }
    return newArr;
  };
  return (
    <FlexBox width="100%" gap="1rem">
      <FlexBox wrap="wrap" gap="1.8rem" margin="1rem 0 2.5rem 0">
        {insertBtn(cnt)}
      </FlexBox>
      <ArrowForwardIosIcon
        sx={{ margin: "12rem 0 0 0", color: "black", cursor: "pointer" }}
        onClick={() => {
          cntUp();
        }}
      />
    </FlexBox>
  );
};
export default FoodMenuCarousel;
