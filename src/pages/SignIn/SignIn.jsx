import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';
import COLOR from 'constants/color';
import useInput from 'hooks/useInput';

const SignInText = styled.span`
  font-size: 2.5rem;
  font-weight: 600;
`;

const ButtonTxt = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
`;

const SingInBtn = styled(Button)`
  background: ${COLOR.btn.main_gra} !important;
  border-radius: 0.7rem !important;
`;

const SignInLink = styled(Link)`
  color: #000 !important;
`;

const theme = createTheme({
  palette: {
    neutral: {
      main: '#737373',
      contrastText: '#fff',
    },
  },
});

const SignIn = () => {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };
  const [email, handleEmail] = useInput('');
  const [password, handlePassword] = useInput('');
  console.log(email);
  console.log(password);

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
            <SignInText>SIGN IN</SignInText>
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              color="neutral"
              value={email}
              onChange={handleEmail}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              color="neutral"
              value={password}
              onChange={handlePassword}
            />
            <SingInBtn
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="background"
            >
              <ButtonTxt>로그인</ButtonTxt>
            </SingInBtn>
            <Grid container>
              <Grid item xs>
                <SignInLink href="#" variant="body2" underline="hover">
                  비밀번호를 잊으셨나요?
                </SignInLink>
              </Grid>
              <Grid item>
                <SignInLink href="/signup" variant="body2" underline="hover">
                  {'회원가입'}
                </SignInLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;
