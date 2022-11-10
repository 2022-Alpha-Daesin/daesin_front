import styled from 'styled-components';
import FlexTextBox from 'components/Common/FlexTextBox';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

const CardContainer = styled.div`
  width: 21rem;
  height: 28.2rem;
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
  width: 21rem;
  height: 28.2rem;
  padding: 2.5rem 2rem;
  gap: 1rem;
  border-radius: 1.25rem;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ChallengeCard = () => {
  return (
    <CardContainer img={`url(${process.env.PUBLIC_URL}/images/sample.png)`}>
      <ContentBox>
        <CheckCircleOutlinedIcon sx={{ color: 'white', fontSize: 30 }} />
        <FlexTextBox color="white" fontSize="1.5rem">
          동아리 소개
        </FlexTextBox>
        <FlexTextBox color="white" fontSize="1rem" textAlign="center" margin="2rem 0 0 0">
          기획/프론트엔드/백엔드로 나뉜 저희 동아리는 굉장히 오래전부터 있던 연합동아리구요
          <br /> <br /> 블라블라 재밌습니다.
        </FlexTextBox>
      </ContentBox>
    </CardContainer>
  );
};

export default ChallengeCard;
