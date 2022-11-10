import styled from 'styled-components';
import COLOR from 'constants/color';
import FlexBox from 'components/Common/FlexBox';

const Btn = styled.button`
  padding: 0.7rem 1.5rem;
  border-radius: 1.6rem;
  border: 1.6px solid ${COLOR.font.select};
  font-size: 0.9rem;
  font-weight: 800;
  color: ${(props) => (props.isClicked ? 'white' : '#5c5c5c')};
  background: ${(props) => (props.isClicked ? COLOR.btn.main_gra : 'transparent')};
  opacity: 0.7;
  cursor: pointer;
  :focus {
    background: ${COLOR.btn.main_gra};
    color: white;
  }
`;

const ADCategory = () => {
  return (
    <FlexBox gap="1rem">
      <Btn>ALL</Btn>
      <Btn>동아리</Btn>
      <Btn>알파프로젝트</Btn>
      <Btn>알바</Btn>
      <Btn>기타</Btn>
    </FlexBox>
  );
};
export default ADCategory;
