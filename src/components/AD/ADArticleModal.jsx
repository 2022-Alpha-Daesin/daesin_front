import COLOR from 'constants/color';
import { FlexBox, FlexTextBox, FlexButton, FlexTextArea } from 'components/Common';
import styled from 'styled-components';

const ADArticleModal = () => {
  return (
    <FlexBox width="50rem" height="90vh" padding="3rem 4rem" gap="2rem" background="white" column>
      <FlexTextBox fontSize="2rem">홍보 올리기</FlexTextBox>
      <FlexBox>
        <FlexBox width="3rem" height="3rem" borderRadius="50%" background="#FFC8C8" />
        <FlexTextBox fontSize="1.25rem" margin="0.9rem">
          노노카
        </FlexTextBox>
      </FlexBox>
      <FlexTextBox fontSize="1.5rem" fontWeight="600">
        제목
      </FlexTextBox>
      <FlexTextArea />
    </FlexBox>
  );
};

export default ADArticleModal;
