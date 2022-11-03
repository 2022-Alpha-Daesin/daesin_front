import styled from 'styled-components';
import FlexTextBox from 'components/Common/FlexTextBox';
import FlexBox from 'components/Common/FlexBox';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const CardContainer = styled.div`
  width: 14.5rem;
  height: 20rem;
  border-radius: 1.25rem;
  position: relative;
  cursor: pointer;
  :hover {
    box-shadow: 1px 1px 5px 2px #a356d8;
  }
`;

const Thumbnail = styled.img`
  width: 14.5rem;
  height: 20rem;
  border-radius: 1.25rem;
  object-fit: cover;
`;

const ContentBox = styled.div`
  width: 14.5rem;
  height: 4rem;
  padding: 0.5rem 0.7rem;
  border-radius: 0 2rem 1.25rem 1.25rem;
  background-color: black;
  position: absolute;
  bottom: 0;
`;

const ChallengeCard = () => {
  return (
    <CardContainer>
      <Thumbnail src={`${process.env.PUBLIC_URL}/images/sample.png`} />
      <FavoriteBorderOutlinedIcon
        sx={{ fontSize: 22, color: 'white', position: 'absolute', top: 10, right: 10 }}
      />
      <ContentBox>
        <FlexTextBox
          fontSize="0.9rem"
          color="#737373"
          fontWeight="600"
          padding="0 0 0.25rem 0.5rem"
        >
          코딩
        </FlexTextBox>
        <FlexBox>
          <FlexTextBox fontSize="1.05rem" fontWeight="600" padding="0 0 0 0.5rem">
            멋쟁이 사자처럼
          </FlexTextBox>
          <FlexTextBox fontSize="0.85rem" fontWeight="600" margin="0.2rem 0 0 1.5rem">
            모집중
          </FlexTextBox>
        </FlexBox>
      </ContentBox>
    </CardContainer>
  );
};

export default ChallengeCard;
