import styled from 'styled-components';
import FlexTextBox from 'components/Common/FlexTextBox';

const CardContainer = styled.div`
  width: 15.8rem;
  height: 21rem;
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
  width: 15.8rem;
  height: 21rem;
  padding: 3rem 1.5rem;
  gap: 2rem;
  border-radius: 1.25rem;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ADCard = () => {
  return (
    <CardContainer img={`url(${process.env.PUBLIC_URL}/images/sample.png)`}>
      <ContentBox>
        <FlexTextBox color="white" fontSize="1rem" textAlign="center">
          [멋쟁이 사자처럼 8기] 아기 사자 대모집!!
        </FlexTextBox>
        <FlexTextBox color="white" fontSize="1rem" textAlign="center">
          안녕하세요! 교내 소프트웨어 동아리 멋쟁이 사자처럼 at 국민대입니다. <br /> <br />
          국민대 멋쟁이 사자가 8기 ... 블라블라 ..
        </FlexTextBox>
      </ContentBox>
    </CardContainer>
  );
};

export default ADCard;
