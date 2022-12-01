import { useState, useRef, useEffect } from "react";
import { FlexBox, FlexTextBox, FlexButton, FlexTextArea } from "components/Common";
import useInput from "hooks/useInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css";
import COLOR from "constants/color";
import EventIcon from "@mui/icons-material/Event";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import styled from "styled-components";
// import useADMutation from "queries/AD/useADMutation";
import useUserInfoQuery from "queries/auth/useUserInfoQuery";
// import { useRefreshMutation } from "queries/auth";
// import { getCookie } from "cookies-next";

const Calendar = styled(DatePicker)`
  width: 60%;
  margin: 4% 0 0 25%;
  font-size: 1.25rem;
`;

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

const ADArticleModal = (props) => {
  const [title, handleTitle] = useInput("");
  const [content, handleContent] = useInput("");
  const tmp = new Date();
  console.log(tmp);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [imageList, setimageList] = useState([]);
  const inputRef = useRef(null);
  const { data: user } = useUserInfoQuery();
  // const { mutate: ADMutate } = useADMutation();
  // const { mutate: refresMutate } = useRefreshMutation();

  // useEffect(() => {
  //   const refreshCookie = getCookie("refreshToken");
  //   if (refreshCookie) {
  //     if (!user.isLoggedIn) {
  //       refresMutate();
  //     }
  //   }
  // }, [isError]);

  // if (isError) {
  //   console.log(Error);
  // }
  console.log(user);

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setimageList([...imageList, { file: imageFile, url: imageUrl }]);
  };

  const deleteImage = (idx) => {
    setimageList(imageList.filter((_, index) => index !== idx));
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };

  // const submit = (e) => {
  //   e.preventDefault();
  //   ADMutate({ email: email, password: password });
  // };
  return (
    <FlexBox position="relative" width="38%">
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
      <FlexBox width="100%" padding="2.5rem 5rem" gap="1.8rem" background="white" column>
        <FlexTextBox fontSize="2rem">홍보 올리기</FlexTextBox>
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
          <FlexTextArea value={title} onChange={handleTitle} />
        </FlexBox>
        <FlexBox width="100%" column gap="0.6rem">
          <FlexTextBox fontSize="1.5rem" fontWeight="600">
            홍보 종류
          </FlexTextBox>
          <FlexTextArea />
        </FlexBox>
        <FlexBox width="100%" column gap="0.6rem">
          <FlexTextBox fontSize="1.5rem" fontWeight="600">
            홍보 기간
          </FlexTextBox>
          <FlexBox width="100%" gap="2rem">
            <FlexBox
              width="48%"
              height="3rem"
              borderRadius="0.8rem"
              background="#ECF2FE"
              position="relative"
            >
              <Calendar
                dateFormat="yyyy-MM-dd"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
              />
              <EventIcon sx={{ fontSize: 28, position: "absolute", right: 8, top: 8 }} />
            </FlexBox>
            <FlexTextBox fontSize="2.5rem" fontWeight="500">
              TO
            </FlexTextBox>
            <FlexBox
              width="50%"
              height="3rem"
              borderRadius="0.8rem"
              background="#ECF2FE"
              position="relative"
            >
              <Calendar
                dateFormat="yyyy-MM-dd"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
              />
              <EventIcon sx={{ fontSize: 28, position: "absolute", right: 8, top: 8 }} />
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <FlexBox width="100%" column gap="0.6rem">
          <FlexTextBox fontSize="1.5rem" fontWeight="600">
            글 작성
          </FlexTextBox>
          <FlexTextArea value={content} onChange={handleContent} />
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
        >
          올리기
        </FlexButton>
      </FlexBox>
    </FlexBox>
  );
};

export default ADArticleModal;
