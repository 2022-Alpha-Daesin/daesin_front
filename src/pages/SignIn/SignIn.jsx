import useInput from "hooks/useInput";
import { useSignInMutation, useVerifyEmailMutation } from "queries/auth";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import qs from "query-string";
import {
  SignInLink,
  SignInText,
  SingInBtn,
  theme,
  ButtonTxt,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  ThemeProvider,
} from "./styles";

const SignIn = () => {
  const [email, handleEmail] = useInput("");
  const [password, handlePassword] = useInput("");
  const navigate = useNavigate();
  const location = useLocation();
  const { mutate: loginMutate, isError: loginError, isSuccess: loginSuccess } = useSignInMutation();
  const { mutate: verifyMutate, isError: emailError } = useVerifyEmailMutation();

  useEffect(() => {
    let query = qs.parse(location.search);
    if ("key" in query) {
      verifyMutate(query["key"]);
    }
  }, []);

  const submit = (e) => {
    e.preventDefault();
    if (email.length <= 0) {
      toast.error("이메일을 작성해주세요. 😭");
    } else {
      if (email.includes("@kookmin.ac.kr")) {
        loginMutate({ email: email, password: password });
      } else {
        toast.error("국민대학교 이메일로 로그인해주세요. 😭");
      }
    }
    if (password.length <= 7) {
      toast.error("비밀번호는 8자 이상입니다. 😭");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            <SignInText>SIGN IN</SignInText>
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={submit}>
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
                <SignInLink onClick={() => navigate("/signup")} variant="body2" underline="hover">
                  {"회원가입"}
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
