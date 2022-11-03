import * as React from 'react';
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

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const [grade, setGrade] = React.useState('');
  const [division, setDivision] = React.useState('');
  const [department, setDepartment] = React.useState('');

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
            Sign up
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
                <InputLabel id="demo-simple-select-helper-label">학년</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
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
                <InputLabel id="demo-simple-select-helper-lsabel">소속대학 선택</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={division}
                  label="대학"
                  onChange={handleDivision}
                >
                  <MenuItem value={'글인지대'}>글인지대</MenuItem>
                  <MenuItem value={'소융'}>소융</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ ml: 2, mt: 2, minWidth: 400 }}>
                <InputLabel id="demo-simple-select-helper-label">소속학과 선택</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={department}
                  label="학부"
                  onChange={handleDepartment}
                >
                  <MenuItem value={'영문학과'}>영문학과</MenuItem>
                  <MenuItem value={'소융과'}>소융과</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              회원가입
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
