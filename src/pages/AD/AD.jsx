import FlexBox from 'components/Common/FlexBox';
import FlexTextBox from 'components/Common/FlexTextBox';
import FlexButton from 'components/Common/FlexButton';
import Searchbar from 'components/Navbar/Searchbar';
import ADDateTab from 'components/AD/ADDateTab';
import ADCarousel from 'components/AD/ADCarousel';
import ADCategory from 'components/AD/ADCategory';
import ADCardWrapper from 'components/AD/ADCardWrapper';
import styled from 'styled-components';
import ADArticleModal from 'components/AD/ADArticleModal';

const Text = styled.div`
  margin: 1rem 0;
  font-size: 1.25rem;
  font-weight: 800;
  background: linear-gradient(to bottom, #ff8f28, #db00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.9;
`;

const AD = () => {
  return (
    // <FlexBox column gap="1.5rem">
    //   <Searchbar />
    //   <Text>홍보</Text>
    //   <FlexTextBox fontSize="1.5rem">마감 임박 홍보</FlexTextBox>
    //   <ADDateTab />
    //   <ADCarousel />
    //   <FlexBox>
    //     <FlexTextBox fontSize="1.5rem">모든 홍보</FlexTextBox>
    //     <FlexButton textDecoration="underline" fontSize="0.9rem">
    //       홍보 문의하기
    //     </FlexButton>
    //   </FlexBox>
    //   <ADCategory />
    //   <ADCardWrapper />
    // </FlexBox>
    <ADArticleModal />
  );
};

export default AD;
