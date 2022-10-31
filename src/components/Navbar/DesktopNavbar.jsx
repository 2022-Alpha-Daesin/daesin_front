import * as React from 'react';
import styled from 'styled-components';
import { Box } from '@mui/system';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FlexBox from 'components/Common/FlexBox';

const TabsLib = styled(Tabs)`
  padding: 0rem 0 2rem 2rem;
  display: flex;
`;

const Logo = styled.span`
  margin: 0rem 0 0rem 1rem;
  font-size: 3rem;
  font-family: 'Pr-Bold';
  font-weight: 600;
`;

const NavLabel = styled.span`
  margin: 4rem 0 1rem 1rem;
  font-size: 1.4rem;
  font-family: 'Pr-Bold';
  font-weight: 600;
  color: #737373;
`;

const LogLabel = styled.span`
  margin: 1.2rem 0 1rem 1rem;
  font-size: 1.5rem;
  font-family: 'Pr-Pegular';
  font-weight: 600;
`;

const LogLogo = styled.img`
  margin: 1.5rem 0 0 0;
  width: 3rem;
  height: 3rem;
`;

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
        sx={{
          borderRight: 1,
          borderColor: 'divider',
          fontSize: 200,
          border: 'none',
          width: 270,
        }}
      >
        <Logo>대신</Logo>
        <NavLabel>MENU</NavLabel>
        <Tab
          icon={
            <HomeOutlinedIcon
              sx={{
                fontSize: 30,
                color: '#282828',
              }}
            />
          }
          iconPosition="start"
          label="NOW"
          sx={{
            fontSize: 20,
            fontWeight: 600,
            color: '#282828',
            marginTop: 1,
            justifyContent: 'flex-start',
          }}
        />
        <Tab
          icon={
            <EditOutlinedIcon
              sx={{
                fontSize: 30,
                color: '#282828',
              }}
            />
          }
          iconPosition="start"
          label="국민인"
          sx={{
            fontSize: 20,
            fontWeight: 600,
            color: '#282828',
            marginTop: 1,
            justifyContent: 'flex-start',
          }}
        />
        <Tab
          icon={
            <PeopleAltOutlinedIcon
              sx={{
                fontSize: 30,
                color: '#282828',
              }}
            />
          }
          iconPosition="start"
          label="동아리"
          sx={{
            fontSize: 20,
            fontWeight: 600,
            color: '#282828',
            marginTop: 1,
            justifyContent: 'flex-start',
          }}
        />
        <Tab
          icon={
            <RecordVoiceOverOutlinedIcon
              sx={{
                fontSize: 30,
                color: '#282828',
              }}
            />
          }
          iconPosition="start"
          label="홍보"
          sx={{
            fontSize: 20,
            fontWeight: 600,
            color: '#282828',
            marginTop: 1,
            justifyContent: 'flex-start',
          }}
        />
        <NavLabel>MY PAGE</NavLabel>
        <Tab
          icon={
            <AccountCircleOutlinedIcon
              sx={{
                fontSize: 30,
                color: '#282828',
              }}
            />
          }
          iconPosition="start"
          label="마이페이지"
          sx={{
            fontSize: 20,
            fontWeight: 600,
            color: '#282828',
            justifyContent: 'flex-start',
          }}
        />
        <Tab
          label=" - 스크랩"
          {...a11yProps(5)}
          sx={{
            marginTop: 2,
            width: 200,
            fontSize: 20,
            fontWeight: 600,
            color: '#282828',
            justifyContent: 'flex-start',
          }}
        />
        <Tab
          label=" - 내가 쓴 글"
          {...a11yProps(6)}
          sx={{
            marginTop: 2,
            width: 231,
            fontSize: 20,
            fontWeight: 600,
            color: '#282828',
            justifyContent: 'flex-start',
          }}
        />
        <FlexBox margin="4rem 0 0 0.8rem">
          <LogLogo src={`${process.env.PUBLIC_URL}/images/login.svg`} />
          <LogLabel>
            로그인/
            <br />
            회원가입
          </LogLabel>
        </FlexBox>
      </TabsLib>
    </Box>
  );
};

export default VerticalTabs;
