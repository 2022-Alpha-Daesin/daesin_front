import { useState, useEffect } from "react";
import {
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
} from "./styles";
import { useReviewListQuery } from "queries/review";

const Review = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  const { data: reviewList } = useReviewListQuery();
  console.log(reviewList);
  return (
    <FlexContainer>
      <FlexBox alignItems="flex-start" column margin="2rem 0 0 0" gap="2rem">
        <Searchbar />
        <FlexBox>
          <Text>후기</Text>
          <FlexButton textDecoration="underline" padding="0.2rem 1rem" onClick={handleModalOpen}>
            후기 작성하기
          </FlexButton>
        </FlexBox>
        <ReviewCategory />
      </FlexBox>
      <FlexBox column margin="2rem 0 0 0" gap="2rem">
        <FlexBox column gap="2rem">
          <FlexTextBox fontSize="1.8rem" margin="1rem 0 0 0">
            전과/복전/부전
          </FlexTextBox>
        </FlexBox>
        <ReviewCategory />
        {"results" in reviewList &&
          reviewList.results.map((item) => <ReviewPostList {...item} key={item.id} />)}
        <Modal
          open={modalOpen}
          onClose={handleModalClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={ModalStyle}>
            <ReviewPostModal onClick={handleModalClose} />
          </Box>
        </Modal>
      </FlexBox>
    </FlexContainer>
  );
};

export default Review;
