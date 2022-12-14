import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PostContainer = styled.div`
  width: 100%;
  height: 6rem;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  background-color: #fff;
  cursor: pointer;
  box-shadow: 1px 2px 3px 1px #f7f7f7;
`;

const Title = styled.p`
  font-size: 1.3rem;
  margin-bottom: 0.3rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
`;

const Content = styled.p`
  margin-bottom: 0.4rem;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0.1rem;
`;

const Date = styled.span`
  font-size: 1rem;
  font-weight: 500;
  margin-right: 1.5rem;
`;

const DepartNotice = (props) => {
  const navigate = useNavigate();
  return (
    <PostContainer onClick={() => navigate("/")}>
      <Title>{props.title}</Title>
      <Content>{props.content}</Content>
      <Date>{props.date}</Date>
    </PostContainer>
  );
};

export default DepartNotice;
