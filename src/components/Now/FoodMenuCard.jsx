import styled from "styled-components";
import FlexTextBox from "components/Common/FlexTextBox";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";

const CardContainer = styled.div`
  width: 20rem;
  height: 27rem;
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
  width: 20rem;
  height: 27rem;
  padding: 2rem 1.8rem 1rem 1.8rem;
  border-radius: 1.25rem;
  background-color: rgba(0, 0, 0, 0.5);
`;

const FoodText = styled.div`
  color: white;
  font-size: 1rem;
  font-weight: 800;
  line-height: 130%;
  text-align: center;
  margin: 0.2rem 0 0 0;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const FoodMenuCard = (props) => {
  return (
    <CardContainer img={`url(${process.env.PUBLIC_URL}/images/${props.img})`}>
      <ContentBox>
        <RestaurantOutlinedIcon sx={{ color: "white", fontSize: 33 }} />
        <FlexTextBox color="white" fontSize="1.35rem" margin="1.5rem 0 0 0">
          {props.place}
        </FlexTextBox>
        {props.category
          .map((item, idx) => (
            <>
              <FlexTextBox
                color="#C7C7C7"
                fontSize="0.85rem"
                textAlign="center"
                margin="1rem 0 0 0"
                key={idx}
              >
                {item.name}
              </FlexTextBox>
              <FoodText key={idx + "text"}>
                {item.food.map((data, idx) =>
                  idx === item.food.length - 1 || item.food.length === 1 ? data : data + ",",
                )}
              </FoodText>
            </>
          ))
          .splice(1, 5)}
      </ContentBox>
    </CardContainer>
  );
};
export default FoodMenuCard;
