import FlexBox from 'components/Common/FlexBox';
import GlobalStyles from 'styles/GlobalStyles';
import Navbar from 'components/Navbar/DesktopNavbar';
import Searchbar from 'components/Header/Searchbar';
const App = () => {
  return (
    <>
      <GlobalStyles />
      <FlexBox width="100%">
        <Navbar />
        <Searchbar />
      </FlexBox>
    </>
  );
};

export default App;
