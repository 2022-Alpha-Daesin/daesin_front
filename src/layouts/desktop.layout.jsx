import DesktopNavbar from 'components/Navbar/DesktopNavbar';
import styled from 'styled-components';
import MaxWidthLayout from './maxWidth.layout';

const ChildrenContainer = styled.div`
  margin: 1rem 0 0 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const DesktopLayout = ({ children }) => {
  return (
    <>
      <DesktopNavbar />
      <ChildrenContainer>
        <MaxWidthLayout>{children}</MaxWidthLayout>
      </ChildrenContainer>
    </>
  );
};

export default DesktopLayout;
