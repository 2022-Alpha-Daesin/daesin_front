import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled from "styled-components";
import COLOR from "constants/color";

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
      main: "#737373",
      contrastText: "#fff",
    },
  },
});

export {
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
};
