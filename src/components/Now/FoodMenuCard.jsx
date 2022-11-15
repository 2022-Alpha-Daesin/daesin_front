import styled from "styled-components";
import FlexTextBox from "components/Common/FlexTextBox";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";

const CardContainer = styled.div`
  width: 19rem;
  height: 25.4rem;
  border-radius: 1.25rem;
  background-image: ${(props) => props.img};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 19rem;
  height: 25.4rem;
  padding: 0.8rem 1.8rem 2rem 1.8rem;
  border-radius: 1.25rem;
  background-color: rgba(0, 0, 0, 0.5);
`;

const FoodMenuCard = (props) => {
  return (
    <CardContainer img={`url(${process.env.PUBLIC_URL}/images/${props.img})`}>
      <ContentBox>
        <RestaurantOutlinedIcon sx={{ color: "white", fontSize: 33 }} />
        <FlexTextBox color="white" fontSize="1.4rem" margin="1.2rem 0 1.2rem 0">
          학생식당
        </FlexTextBox>
        <FlexTextBox color="#C7C7C7" fontSize="0.9rem" textAlign="center">
          누들송
        </FlexTextBox>
        <FlexTextBox color="white" fontSize="1rem" textAlign="center" margin="0 0 1.2rem 0">
          갈비만제비, 과일젤리
        </FlexTextBox>
        <FlexTextBox color="#C7C7C7" fontSize="0.9rem" textAlign="center">
          가마
        </FlexTextBox>
        <FlexTextBox color="white" fontSize="1rem" textAlign="center" margin="0 0 1.2rem 0">
          국민표집밥한상, 뚝배기 김치찌개& 간장제육볶음, 잡채어묵깐풍 ...
        </FlexTextBox>
        <FlexTextBox color="#C7C7C7" fontSize="0.9rem" textAlign="center">
          인터쉐프
        </FlexTextBox>
        <FlexTextBox color="white" fontSize="1rem" textAlign="center" margin="0 0 1.2rem 0">
          불고기필라프, 바삭스팸튀김, 과일 젤리
        </FlexTextBox>
        <FlexTextBox color="#C7C7C7" fontSize="0.8rem" textAlign="center">
          데일리밥
        </FlexTextBox>
        <FlexTextBox color="white" fontSize="1rem" textAlign="center" margin="0 0 1.2rem 0">
          불고기필라프, 바삭스팸튀김, 과일젤리
        </FlexTextBox>
      </ContentBox>
    </CardContainer>
  );
};
export default FoodMenuCard;
