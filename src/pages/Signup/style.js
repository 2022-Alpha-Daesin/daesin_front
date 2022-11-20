import Button from "@mui/material/Button";
import COLOR from "constants/color";
import styled from "styled-components";
import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    neutral: {
      main: "#737373",
      contrastText: "#fff",
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

export { theme, SignUpText, ButtonTxt, SingUpBtn };
