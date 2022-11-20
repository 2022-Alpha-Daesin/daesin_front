import { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import useInput from "hooks/useInput";
import useSignUpMutation from "queries/auth/useSignUpMutation";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userAtom } from "states/userInfo";
import { useCollegeQuery, useMajorListQuery } from "queries/major";
import toast from "react-hot-toast";
import MajorData from "constants/MajorData";
import { theme, SignUpText, ButtonTxt, SingUpBtn } from "./style.js";

const SignUp = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userAtom);
  // const [Divsion
  const { Division, Department } = MajorData;
  const [grade, setGrade] = useState("");
  const [targetCollege, setTargetCollege] = useState("");
  const [department, setDepartment] = useState("");
  const { mutate: signInMutate } = useSignUpMutation();
  const { data: collegeData, isSuccess: successCollege } = useCollegeQuery();
  const { data: majorList, isSuccess: successMajor } = useMajorListQuery(targetCollege);
  const handleGrade = (event: SelectChangeEvent) => {
    event.preventDefault();
    setGrade(event.target.value);
  };
  const handleTargetCollege = (event: SelectChangeEvent) => {
    event.preventDefault();
    setTargetCollege(event.target.value);
  };
  const handleDepartment = (event: SelectChangeEvent) => {
    event.preventDefault();
    setDepartment(event.target.value);
  };

  const [email, handleEmail] = useInput("");
  const [password1, handlePassword1] = useInput("");
  const [password2, handlePassword2] = useInput("");
  const [nickname, handleNickname] = useInput("");
  // const [grade, handleGrade] = useInput('');
  // const [major, handleMajor] = useInput('');

  useEffect(() => {
    if (user) {
      toast.success("이미 로그인한 상태입니다. 👍");
      navigate("/");
    }
  }, []);

  const onKeyPressFunc = (e) => {
    if (e.key === "Enter") submit();
  };

  const submit = (e) => {
    e.preventDefault();
    signInMutate({
      email: email,
      password1: password1,
      password2: password2,
      nickname: nickname,
      grade: grade,
      major_id: department,
    });
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
                  value={targetCollege}
                  label="대학"
                  onChange={handleTargetCollege}
                  color="neutral"
                  onKeyPress={onKeyPressFunc}
                >
                  {successCollege &&
                    collegeData.map((el) => (
                      <MenuItem key={el[0]} value={el[0]}>
                        {el[1]}
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
                  {successMajor ? (
                    majorList.map((major) => (
                      <MenuItem key={major.id} value={major.id}>
                        {major.name}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem key={0} value={0}>
                      "단과대를 선택해주세요"
                    </MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>

            <SingUpBtn type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              <ButtonTxt>회원가입</ButtonTxt>
            </SingUpBtn>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
