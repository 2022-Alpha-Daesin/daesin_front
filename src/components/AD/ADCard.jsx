import styled from 'styled-components';
import FlexTextBox from 'components/Common/FlexTextBox';

const CardContainer = styled.div`
  width: 14rem;
  height: 18rem;
  border-radius: 1.25rem;
  background-image: ${(props) => props.img};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;
  transition-duration: 1.2s, 3s; // 변화가 일어나는 기간. 초단위. 프로퍼티와 각각 대응 (기본값 0s)
 
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 14rem;
  height: 18rem;
  padding: 3rem 1.5rem;
  gap: 2rem;
  border-radius: 1.25rem;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ADCard = (props) => {
  return (
    <CardContainer img={`url(${process.env.PUBLIC_URL}/images/sample.png)`}>
      <ContentBox>
        <FlexTextBox color="white" fontSize="1rem" textAlign="center">
          {props.title}
        </FlexTextBox>
        <FlexTextBox color="white" fontSize="0.9rem" textAlign="center">
          {props.content}
        </FlexTextBox>
      </ContentBox>
    </CardContainer>
  );
};

export default ADCard;
