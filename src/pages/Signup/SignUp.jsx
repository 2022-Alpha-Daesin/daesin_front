import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MajorData from '../../constants/MajorData.js';
import styled from 'styled-components';

const theme = createTheme();

const SignUpText = styled.span`
  font-size: 2.5rem;
  font-weight: 600;
`;

const ButtonTxt = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
`;

const SingInBtn = styled(Button)`
  background-color: red !important;
`;

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const { Division, Department } = MajorData;
  const [grade, setGrade] = useState('');
  const [division, setDivision] = useState('');
  const [department, setDepartment] = useState('');

  const handleGrade = (event: SelectChangeEvent) => {
    setGrade(event.target.value);
  };
  const handleDivision = (event: SelectChangeEvent) => {
    setDivision(event.target.value);
  };
  const handleDepartment = (event: SelectChangeEvent) => {
    setDepartment(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            <SignUpText>SIGN UP</SignUpText>
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField required fullWidth id="email" label="email@kookmin.ac.kr" name="email" />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="비밀번호"
                  type="password"
                  id="password"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="repassword"
                  label="비밀번호 확인"
                  type="password"
                  id="repassword"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth id="nickname" label="닉네임" name="nickname" />
              </Grid>

              <FormControl sx={{ ml: 2, mt: 2, minWidth: 400 }}>
                <InputLabel id="grade">학년</InputLabel>
                <Select
                  labelId="grade"
                  id="grade"
                  value={grade}
                  label="학년"
                  onChange={handleGrade}
                >
                  <MenuItem value={1}>1학년</MenuItem>
                  <MenuItem value={2}>2학년</MenuItem>
                  <MenuItem value={3}>3학년</MenuItem>
                  <MenuItem value={4}>4학년</MenuItem>
                  <MenuItem value={5}>기타</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ ml: 2, mt: 2, minWidth: 400 }}>
                <InputLabel id="division">소속대학 선택</InputLabel>
                <Select
                  labelId="division"
                  id="division"
                  value={division}
                  label="대학"
                  onChange={handleDivision}
                >
                  {Division.map((el) => (
                    <MenuItem key={el.Division} value={el.Division}>
                      {el.DivisionNm}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl sx={{ ml: 2, mt: 2, minWidth: 400 }}>
                <InputLabel id="department">소속학과 선택</InputLabel>
                <Select
                  labelId="department"
                  id="department"
                  value={department}
                  label="대학"
                  onChange={handleDepartment}
                >
                  {Department.filter((el) => el.Division === division).map((el) => (
                    <MenuItem key={el.Department} value={el.Department}>
                      {el.DepartmentNm}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <SingInBtn type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              <ButtonTxt>회원가입</ButtonTxt>
            </SingInBtn>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
