import { useState } from "react";
import { FlexBox, FlexTextBox, FlexButton } from "components/Common";
import { ADDateTab, ADCarousel, ADCategory, ADCardWrapper, ADArticleModal } from "components/AD";
import { Modal } from "@mui/material";
import Searchbar from "components/Navbar/Searchbar";
import styled from "styled-components";

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
    <FlexBox width="100%" column gap="1.4rem">
      <FlexBox margin="1.9rem 0 0 0">
        <Searchbar />
      </FlexBox>
      <Text>홍보</Text>
      <FlexTextBox fontSize="1.5rem">마감 임박 홍보</FlexTextBox>
      <ADDateTab />
      <ADCarousel />
      <FlexBox width="100%">
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
          <FlexBox width="100%" height="100vh" center>
            <ADArticleModal onClick={handleClose} />
          </FlexBox>
        </Modal>
      </FlexBox>
      <ADCategory />
      <ADCardWrapper />
    </FlexBox>
  );
};

export default AD;
