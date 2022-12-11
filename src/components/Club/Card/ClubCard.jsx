import styled from "styled-components";
import FlexTextBox from "components/Common/FlexTextBox";
import FlexBox from "components/Common/FlexBox";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const CardContainer = styled.div`
  width: 16em;
  height: 21rem;
  border-radius: 1.25rem;
  position: relative;
  cursor: pointer;
  :hover {
    box-shadow: 1px 1px 5px 2px #a356d8;
  }
`;

const Thumbnail = styled.img`
  width: 16rem;
  height: 21rem;
  border-radius: 1.25rem;
  object-fit: cover;
`;

const ContentBox = styled.div`
  width: 16rem;
  height: 5rem;
  padding: 0.5rem 0.7rem;
  border-radius: 0 2rem 1.25rem 1.25rem;
  background-color: black;
  position: absolute;
  bottom: 0;
`;

const ClubCard = ({ club }) => {
  return (
    <CardContainer>
      <Thumbnail src={`${process.env.PUBLIC_URL}/images/sample.png`} />
      <FavoriteBorderOutlinedIcon
        sx={{ fontSize: 24, color: "white", position: "absolute", top: 10, right: 10 }}
      />
      <ContentBox>
        <FlexTextBox fontSize="1rem" color="#737373" fontWeight="600" padding="0 0 0.25rem 0.5rem">
          {club.place}
        </FlexTextBox>
        <FlexBox margin="0.4rem 0 0 0">
          <FlexTextBox fontSize="1.2rem" fontWeight="600" padding="0 0 0 0.5rem" color="white">
            {club.name}
          </FlexTextBox>
          <FlexTextBox
            fontSize="0.85rem"
            fontWeight="600"
            margin="0.25rem 0 0 1.5rem"
            color="white"
          >
            상시 모집
          </FlexTextBox>
        </FlexBox>
      </ContentBox>
    </CardContainer>
  );
};

export default ClubCard;
