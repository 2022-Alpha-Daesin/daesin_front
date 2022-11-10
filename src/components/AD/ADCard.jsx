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
  @keyframes fade-in {
    from {
      opacity: 0.5;
    }
    to {
      opacity: 1;
    }
  }
  animation: fade-in 1000ms;
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
