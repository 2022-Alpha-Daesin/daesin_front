import styled from "styled-components";
import FlexTextBox from "components/Common/FlexTextBox";
import { useNavigate } from "react-router-dom";

const CardContainer = styled.div`
  width: 16rem;
  height: 21rem;
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
  animation: fade-in 1500ms;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 16rem;
  height: 21rem;
  padding: 3.5rem 1.5rem;
  gap: 2rem;
  border-radius: 1.25rem;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ContentText = styled.div`
  font-size: 0.9rem;
  text-align: center;
  color: rgba(255, 255, 255);
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
`;

const ADCard = (props) => {
  const navigate = useNavigate();

  return (
    <CardContainer
      img={`url(${process.env.PUBLIC_URL}/images/sample.png)`}
      onClick={() => navigate(`/ad/${props.id}`)}
    >
      <ContentBox>
        <FlexTextBox color="white" fontSize="1.1rem" textAlign="center">
          {props.title}
        </FlexTextBox>
        <ContentText color="white" fontSize="0.9rem" textAlign="center">
          {props.content}
        </ContentText>
      </ContentBox>
    </CardContainer>
  );
};

export default ADCard;
