import Box from "@mui/material/Box";
import ReviewPostModal from "components/Review/ReviewPostModal";
import Modal from "@mui/material/Modal";
import FlexBox from "components/Common/FlexBox";
import FlexTextBox from "components/Common/FlexTextBox";
import FlexButton from "components/Common/FlexButton";
import Searchbar from "components/Navbar/Searchbar";
import styled from "styled-components";
import ReviewCategory from "components/Review/ReviewCategory";
import ReviewPostList from "components/Review/ReviewPostList";
const ModalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "52rem",
  borderRadius: "1rem",
  bgcolor: "white",
  color: "black",
  boxShadow: 24,
  p: 4,
};

const Text = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(to bottom, #ff8f28, #db00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.9;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding-bottom: 3rem;
`;

export {
  FlexContainer,
  Text,
  ModalStyle,
  ReviewPostList,
  ReviewCategory,
  Searchbar,
  FlexButton,
  FlexBox,
  FlexTextBox,
  Modal,
  ReviewPostModal,
  Box,
};
