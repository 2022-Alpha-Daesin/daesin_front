import { useParams } from "react-router-dom";
import { FlexBox, FlexTextBox } from "components/Common";
import Searchbar from "components/Navbar/Searchbar";
import useDate from "hooks/useDate";
import { Icon } from "semantic-ui-react";
import { useADQuery } from "queries/AD";
import styled from "styled-components";

const Img = styled.img`
  width: 80%;
  height: 60vh;
`;

const Line = styled.div`
  width: 0.12rem;
  height: 100vh;
  background: #b5b5b5;
`;

const ADArticle = () => {
  const { id } = useParams();
  const { data: ad } = useADQuery(id);
  const date = useDate(ad.postupdated_at);

  return (
    <FlexBox width="100%" column>
      <FlexBox margin="1.9rem 0 0 0">
        <Searchbar />
      </FlexBox>
      <FlexBox width="98%" margin="2.5rem 0 0 0" gap="5%">
        <Line />
        <FlexBox width="98%" column gap="2rem" margin="2rem 0 0 0">
          <FlexBox width="100%" position="relative">
            <FlexBox width="3rem" height="3rem" borderRadius="50%" background="#FFC8C8" />
            <FlexBox column gap="0.2rem" margin="0.2rem 0 0 0.8rem">
              <FlexTextBox fontSize="1.25rem">{ad.post.author.nickname}</FlexTextBox>
              <FlexTextBox fontSize="0.85rem" color="#717171">
                {date}
              </FlexTextBox>
            </FlexBox>
            <FlexBox margin="1rem 0 0 0" position="absolute" right="0" width="5rem">
              <Icon disabled name="bookmark outline" size="large" link />
              <Icon disabled name="paperclip" size="large" link />
            </FlexBox>
          </FlexBox>
          <FlexTextBox fontSize="2rem">{ad.post.title}</FlexTextBox>
          <FlexBox width="100%" center column gap="2rem">
            <FlexBox width="86%" column center background="#DCDCDC">
              <Img src={`${process.env.PUBLIC_URL}/images/ADArticle.png`} />
            </FlexBox>
            <FlexTextBox width="100%" fontSize="1.1rem">
              {ad.post.content}
            </FlexTextBox>
          </FlexBox>
          <FlexTextBox color="#679AFF">#동방있음</FlexTextBox>
        </FlexBox>
        <Line />
      </FlexBox>
    </FlexBox>
  );
};
export default ADArticle;
