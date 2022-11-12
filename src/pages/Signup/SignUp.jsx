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
import MajorData from 'constants/MajorData.js';
import styled from 'styled-components';
import COLOR from 'constants/color';
import useInput from 'hooks/useInput';
import useSignUpMutation from 'queries/auth/useSignUpMutation';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#737373',
      contrastText: '#fff',
    },
  },
});

const SignUpText = styled.span`
  font-size: 2.5rem;
  font-weight: 600;
`;

const ButtonTxt = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
`;

const SingUpBtn = styled(Button)`
  background: ${COLOR.btn.main_gra} !important;
  border-radius: 0.7rem !important;
`;

const SignUp = () => {
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

  const [email, handleEmail] = useInput('');
  const [password1, handlePassword1] = useInput('');
  const [password2, handlePassword2] = useInput('');
  const [nickname, handleNickname] = useInput('');
  // const [grade, handleGrade] = useInput('');
  // const [major, handleMajor] = useInput('');

  const { mutate: signInMutate } = useSignUpMutation();

  const onKeyPressFunc = (e) => {
    if (e.key === 'Enter') submit();
  };

  const submit = () => {
    signInMutate({
      email: email,
      password1: password1,
      password2: password2,
      nickname: nickname,
      grade: grade,
      // major: major,
    });
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
          <Box component="form" noValidate onSubmit={submit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="email@kookmin.ac.kr"
                  name="email"
                  value={email}
                  onChange={handleEmail}
                  onKeyPress={onKeyPressFunc}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="비밀번호"
                  type="password"
                  id="password"
                  color="neutral"
                  value={password1}
                  onChange={handlePassword1}
                  onKeyPress={onKeyPressFunc}
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
                  color="neutral"
                  value={password2}
                  onChange={handlePassword2}
                  onKeyPress={onKeyPressFunc}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="nickname"
                  label="닉네임"
                  name="nickname"
                  value={nickname}
                  onChange={handleNickname}
                  onKeyPress={onKeyPressFunc}
                />
              </Grid>

              <FormControl sx={{ ml: 2, mt: 2, minWidth: 400 }}>
                <InputLabel id="grade">학년</InputLabel>
                <Select
                  labelId="grade"
                  id="grade"
                  label="학년"
                  color="neutral"
                  value={grade}
                  onChange={handleGrade}
                  onKeyPress={onKeyPressFunc}
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
                  color="neutral"
                  onKeyPress={onKeyPressFunc}
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
                  color="neutral"
                  onKeyPress={onKeyPressFunc}
                >
                  {Department.filter((el) => el.Division === division).map((el) => (
                    <MenuItem key={el.Department} value={el.Department}>
                      {el.DepartmentNm}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <SingUpBtn
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick-={submit}
            >
              <ButtonTxt>회원가입</ButtonTxt>
            </SingUpBtn>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
