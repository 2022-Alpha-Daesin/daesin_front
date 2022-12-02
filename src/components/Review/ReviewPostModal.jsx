import { useState, useRef } from "react";
import "react-datepicker/dist/react-datepicker.css";
import COLOR from "constants/color";
import { FlexBox, FlexTextBox, FlexButton, FlexTextArea } from "components/Common";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import styled from "styled-components";
import CustomAutoComplete from "components/AutoComplete/CustomAutoComplete";
import useInput from "hooks/useInput";
import useTagListQuery from "queries/tag/useTagListQuery";
import { usePostReviewMutation } from "queries/review";
import { useEffect } from "react";
import { userInfo } from "states";
import { useRecoilState } from "recoil";

const Image = styled.img`
  width: 6rem;
  height: 6rem;
  margin-right: 0.8rem;
  border-radius: 0.6rem;
  object-fit: cover;
  background: ${COLOR.bg.primary};
`;

const ImgInner = styled.div`
  position: relative;
`;

const ReviewPostModal = (props) => {
  const [user] = useRecoilState(userInfo);
  const [title, setTitle] = useInput("");
  const [contents, setContents] = useInput("");
  const [imageList, setimageList] = useState([]);
  const inputRef = useRef(null);
  const { data: tagData, isSuccess: successTag } = useTagListQuery();
  const { mutate: reviewMutate } = usePostReviewMutation();
  const [tags, setTags] = useState([]);
  const [selectTags, setSelectTags] = useState([]);
  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setimageList([...imageList, { file: imageFile, url: imageUrl }]);
  };
  useEffect(() => {
    if (successTag) {
      setTags(tagData);
    }
  }, [successTag]);
  const deleteImage = (idx) => {
    setimageList(imageList.filter((_, index) => index !== idx));
  };
  console.log("유저상태", user);
  const onButtonClick = () => {
    inputRef.current.click();
  };
  const submitReview = () => {
    console.log("데이타들", imageList, selectTags, title, contents);
    let images = imageList.map((item) => item.file);
    let tagList = selectTags.map((item) => item.id);
    // let text = { title: title, content: contents };
    const postData = new FormData();
    postData.append("title", title);
    postData.append("content", contents);
    const formData = new FormData();
    formData.append("images", images);
    formData.append("tags", tagList);
    formData.append("post", postData);
    reviewMutate(formData);
  };
  return (
    <FlexBox position="relative">
      <ClearOutlinedIcon
        sx={{
          fontSize: 35,
          position: "absolute",
          top: 15,
          right: 25,
          cursor: "pointer",
        }}
        onClick={props.onClick}
      />
      <FlexBox width="100%" padding="2.5rem 4rem" gap="1.8rem" background="white" column>
        <FlexTextBox fontSize="2rem">후기 올리기</FlexTextBox>
        <FlexBox>
          <FlexBox width="3rem" height="3rem" borderRadius="50%" background="#FFC8C8" />
          <FlexTextBox fontSize="1.25rem" margin="0.9rem">
            노노카
          </FlexTextBox>
        </FlexBox>
        <FlexBox width="100%" column gap="0.6rem">
          <FlexTextBox fontSize="1.5rem" fontWeight="600">
            제목
          </FlexTextBox>
          <FlexTextArea value={title} onChange={setTitle} />
        </FlexBox>
        <FlexBox width="100%" column gap="0.6rem">
          <FlexTextBox fontSize="1.5rem" fontWeight="600">
            후기 종류
          </FlexTextBox>
          <CustomAutoComplete tags={tags} setSelectTags={setSelectTags} selectTags={selectTags} />
        </FlexBox>
        <FlexBox width="100%" column gap="0.6rem">
          <FlexTextBox fontSize="1.5rem" fontWeight="600">
            글 작성
          </FlexTextBox>
          <FlexTextArea padding="5rem 1rem" value={contents} onChange={setContents} />
        </FlexBox>
        <FlexBox width="100%" column gap="0.6rem">
          <FlexTextBox fontSize="1.5rem" fontWeight="600">
            첨부 파일
          </FlexTextBox>
          <FlexBox background="transparent">
            <div>
              <FlexBox background="transparent" position="relative">
                {imageList.map((image, index) => (
                  <ImgInner key={`add_article_images_${index}`}>
                    <Image alt="article_image" src={image.url} />
                    <ClearOutlinedIcon
                      onClick={() => deleteImage(index)}
                      sx={{
                        position: "absolute",
                        top: 0,
                        right: 8,
                        cursor: "pointer",
                        color: "white",
                      }}
                    />
                  </ImgInner>
                ))}
              </FlexBox>
            </div>
            <input
              name="imggeUpload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={inputRef}
              style={{ width: "10rem", height: "10rem", display: "none" }}
            />
            <FlexBox width="6rem" height="6rem" borderRadius="0.6rem" center background="#ECF2FE">
              <AddPhotoAlternateOutlinedIcon
                onClick={onButtonClick}
                sx={{ fontSize: 30, cursor: "pointer" }}
              />
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <FlexButton
          fontSize="1.1rem"
          backgroundColor={COLOR.btn.main_gra}
          color="white"
          padding="1rem 10rem"
          margin="0 20%"
          onClick={submitReview}
        >
          올리기
        </FlexButton>
      </FlexBox>
    </FlexBox>
  );
};

export default ReviewPostModal;
