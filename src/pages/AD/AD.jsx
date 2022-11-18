import { useState } from "react";
import FlexBox from "components/Common/FlexBox";
import FlexTextBox from "components/Common/FlexTextBox";
import FlexButton from "components/Common/FlexButton";
import Searchbar from "components/Navbar/Searchbar";
import ADDateTab from "components/AD/ADDateTab";
import ADCarousel from "components/AD/ADCarousel";
import ADCategory from "components/AD/ADCategory";
import ADCardWrapper from "components/AD/ADCardWrapper";
import ADArticleModal from "components/AD/ADArticleModal";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styled from "styled-components";

const style = {
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
  margin: 1rem 0;
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(to bottom, #ff8f28, #db00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.9;
`;

const AD = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <FlexBox column gap="1.4rem">
      <FlexBox margin="1.9rem 0 0 0">
        <Searchbar />
      </FlexBox>
      <Text>홍보</Text>
      <FlexTextBox fontSize="1.5rem">마감 임박 홍보</FlexTextBox>
      <ADDateTab />
      <ADCarousel />
      <FlexBox>
        <FlexTextBox fontSize="1.5rem">모든 홍보</FlexTextBox>
        <FlexButton textDecoration="underline" fontSize="0.9rem" onClick={handleOpen}>
          홍보 올리기
        </FlexButton>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <ADArticleModal onClick={handleClose} />
          </Box>
        </Modal>
      </FlexBox>
      <ADCategory />
      <ADCardWrapper />
    </FlexBox>
  );
};

export default AD;
