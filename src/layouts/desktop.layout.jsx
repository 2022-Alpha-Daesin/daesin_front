import FlexBox from "components/Common/FlexBox";
import DesktopNavbar from "components/Navbar/DesktopNavbar";
import styled from "styled-components";
import MaxWidthLayout from "./maxWidth.layout";

const ChildrenContainer = styled.div`
  margin: 2rem 0 0 20%;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const DesktopLayout = ({ children }) => {
  return (
    <FlexBox>
      <DesktopNavbar />
      <ChildrenContainer>
        <MaxWidthLayout>{children}</MaxWidthLayout>
      </ChildrenContainer>
    </FlexBox>
  );
};

export default DesktopLayout;
