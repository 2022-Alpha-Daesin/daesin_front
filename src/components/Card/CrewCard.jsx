import styled from 'styled-components';
// import FlexBox from 'components/Common/FlexBox';

const CardContainer = styled.div`
  width: 14.5rem;
  height: 20rem;
  position: relative;
  cursor: pointer;
  /* background-color: grey; */
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
  border-radius: 0 2rem 1.25rem 1.25rem;
  background-color: black;
  position: absolute;
  bottom: 0;
`;

const Category = styled.div`
  font-family: 'Pr-Regular';
  font-weight: 800;
  font-size: 0.9rem;
  color: #737373;
`;

const ChallengeCard = () => {
  return (
    <CardContainer>
      <Thumbnail src={`${process.env.PUBLIC_URL}/images/sample.png`} />
      <ContentBox>
        <Category>코딩</Category>
      </ContentBox>
    </CardContainer>
  );
};

export default ChallengeCard;
