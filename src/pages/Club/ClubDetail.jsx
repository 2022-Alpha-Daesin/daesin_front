import { FlexBox, FlexTextBox } from "components/Common";
import { ClubDetailCardWrapper } from "components/Club";
import Searchbar from "components/Navbar/Searchbar";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import COLOR from "constants/color";
import { useClubDetailQuery } from "queries/club";
import { useParams } from "react-router-dom";

const ClubDetail = () => {
  const param = useParams();
  const { data, isSuccess } = useClubDetailQuery(param.id);

  return (
    <FlexBox column margin="2rem 0 0 0" gap="2.2rem">
      <Searchbar />
      <FlexBox column gap="1rem">
        <FlexBox>
          <FlexTextBox fontSize="1.8rem">{isSuccess && data.name}</FlexTextBox>
          <FavoriteOutlinedIcon sx={{ fontSize: 20, margin: "0.4rem 0 0 0.6rem" }} />
          <FlexTextBox margin="0.6rem 0 0 0.5rem">📍현재 모집중</FlexTextBox>
        </FlexBox>
        <FlexTextBox fontSize="1.2rem" color={COLOR.font.sub} margin="0 0 1rem 0">
          {data.place}
        </FlexTextBox>
        <FlexTextBox fontSize="1.2rem" color="black">
          동아리 정보
        </FlexTextBox>
      </FlexBox>
      <ClubDetailCardWrapper info={data} />
      <FlexTextBox fontSize="1.4rem" color="black" margin="1rem 0 0 0">
        동아리 모집공고
      </FlexTextBox>
      <FlexBox width="97.5%" height="12rem" borderRadius="1rem" background="#ECF2FE">
        아직개발중
      </FlexBox>
    </FlexBox>
  );
};

export default ClubDetail;
