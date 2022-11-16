import styled from "styled-components";
import FlexTextBox from "components/Common/FlexTextBox";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";

const CardContainer = styled.div`
  width: 18rem;
  height: 25.4rem;
  border-radius: 1.25rem;
  background-image: ${(props) => props.img};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @keyframes fade-in {
    from {
      opacity: 0.5;
    }
    to {
      opacity: 1;
    }
  }
  animation: fade-in 1500ms;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 18rem;
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
        <FlexTextBox color="white" fontSize="1.35rem" margin="1.5rem 0 1.5rem 0">
          {props.place}
        </FlexTextBox>
        <FlexTextBox color="#C7C7C7" fontSize="0.8rem" textAlign="center" margin="0 0 0.2rem 0">
          {props.category[0].name}
        </FlexTextBox>
        <FlexTextBox color="white" fontSize="0.9rem" textAlign="center" margin="0 0 1.2rem 0">
          {props.category[0].food.map((data, idx) =>
            idx && props.category[3].food.length - 1 ? data : data + ", ",
          )}
        </FlexTextBox>

        <FlexTextBox color="#C7C7C7" fontSize="0.8rem" textAlign="center" margin="0 0 0.2rem 0">
          {props.category[1].name}
        </FlexTextBox>
        <FlexTextBox color="white" fontSize="0.9rem" textAlign="center" margin="0 0 1.2rem 0">
          {props.category[1].food.map((data, idx) =>
            idx && props.category[3].food.length - 1 ? data : data + ", ",
          )}
        </FlexTextBox>
        <FlexTextBox color="#C7C7C7" fontSize="0.8rem" textAlign="center" margin="0 0 0.2rem 0">
          {props.category[2].name}
        </FlexTextBox>
        <FlexTextBox color="white" fontSize="0.9rem" textAlign="center" margin="0 0 1.2rem 0">
          {props.category[2].food.map((data, idx) =>
            idx && props.category[3].food.length - 1 ? data : data + ", ",
          )}
        </FlexTextBox>
        <FlexTextBox color="#C7C7C7" fontSize="0.8rem" textAlign="center" margin="0 0 0.2rem 0">
          {props.category[3].name}
        </FlexTextBox>
        <FlexTextBox color="white" fontSize="0.9rem" textAlign="center" margin="0 0 1.2rem 0">
          {props.category[3].food.map((data, idx) =>
            idx && props.category[3].food.length - 1 ? data : data + ", ",
          )}
        </FlexTextBox>
      </ContentBox>
    </CardContainer>
  );
};
export default FoodMenuCard;
