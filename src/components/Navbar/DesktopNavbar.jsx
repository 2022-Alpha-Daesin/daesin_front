import * as React from 'react';
import styled from 'styled-components';
import { Box } from '@mui/system';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import FlexBox from 'components/Common/FlexBox';

const TabsLib = styled(Tabs)`
  padding: 0rem 0 2rem 2rem;
  display: flex;

  .css-1h9z7r5-MuiButtonBase-root-MuiTab-root {
    font-size: 1.3rem;
    width: 15rem;
    height: 5rem;
    font-family: 'Pr-Bold';
    font-weight: 600;
    color: #282828;
    align-items: flex-start;
    .Mui-selected {
      color: #282828 !important;
    }
  }
`;

const TabLib = styled(Tab)`
  padding: 0 0 0 3rem !important;
  font-size: 1.25rem;
  width: 15rem;
  height: 5rem;
  font-family: 'Pr-Bold';
`;

const Logo = styled.span`
  margin: 0rem 0 0rem 1rem;
  font-size: 3rem;
  font-family: 'Pr-Bold';
  font-weight: 600;
`;

const NavLabel = styled.span`
  margin: 3rem 0 1rem 1rem;
  font-size: 1.4rem;
  font-family: 'Pr-Bold';
  font-weight: 600;
  color: #737373;
`;

const LogLabel = styled.span`
  margin: 0rem 0 1rem 1rem;
  font-size: 1.5rem;
  font-family: 'Pr-Pegular';
  font-weight: 600;
`;

const LogLogo = styled.img`
  width: 3rem;
  height: 3rem;
`;

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 15 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
};

const VerticalTabs = () => {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 2,
        bgcolor: 'background.paper',
        display: 'flex',
        height: '100%',
        padding: '4.5rem 0 0 0',
      }}
    >
      <TabsLib
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        //   indicatorColor="text.primary"
        sx={{
          borderRight: 1,
          borderColor: 'divider',
          fontSize: 200,
          border: 'none',
        }}
      >
        <Logo>대신</Logo>
        <NavLabel>MENU</NavLabel>
        <Tab label="🏠 NOW" {...a11yProps(0)} />
        <Tab label="✍ 국민인" {...a11yProps(1)} />
        <Tab label="👪 동아리" {...a11yProps(2)} />
        <Tab label="📢 홍보" {...a11yProps(3)} />
        <NavLabel>MY PAGE</NavLabel>
        <Tab label="🙂 마이페이지" {...a11yProps(3)} />
        <TabLib label=" - 스크랩" {...a11yProps(5)} />
        <TabLib label=" - 내가 쓴 글" {...a11yProps(6)} />
        <FlexBox margin="4rem 0 0 0.8rem">
          <LogLogo src={`${process.env.PUBLIC_URL}/images/login.svg`} />
          <LogLabel>
            로그인/
            <br />
            회원가입
          </LogLabel>
        </FlexBox>
      </TabsLib>
      <TabPanel value={value} index={2}>
        Now Page
      </TabPanel>
      <TabPanel value={value} index={3}>
        후기 Page
      </TabPanel>
      <TabPanel value={value} index={4}>
        동아리 Page
      </TabPanel>
      <TabPanel value={value} index={5}>
        홍보 Page
      </TabPanel>
      <TabPanel value={value} index={7}>
        My Page
      </TabPanel>
      <TabPanel value={value} index={8}>
        스크랩
      </TabPanel>
      <TabPanel value={value} index={9}>
        내가 쓴 글
      </TabPanel>
    </Box>
  );
};

export default VerticalTabs;
