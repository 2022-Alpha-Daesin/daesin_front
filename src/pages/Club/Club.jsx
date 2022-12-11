import { FlexBox, FlexTextBox, FlexButton } from "components/Common";
import { ClubCardWrapper, ClubCategory } from "components/Club";
import Searchbar from "components/Navbar/Searchbar";
import styled from "styled-components";
import { useClubListQuery } from "queries/club";

const Text = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(to bottom, #ff8f28, #db00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.9;
`;

const Club = () => {
  const { data } = useClubListQuery();
  console.log("데이터", data);
  return (
    <>
      <FlexBox column margin="2rem 0 0 0" gap="2rem">
        <Searchbar />
        <FlexBox column>
          <FlexBox>
            <Text
              background="linear-gradient(to right, #FF8F28, #DB00FF)"
              color="transparent"
              fontWeight={800}
            >
              동아리
            </Text>
            <FlexButton textDecoration="underline" padding="0.2rem 1rem">
              동아리 문의하기
            </FlexButton>
          </FlexBox>

          <FlexTextBox fontSize="1.8rem" margin="1rem 0 0 0">
            중앙동아리
          </FlexTextBox>
        </FlexBox>
        <ClubCardWrapper clubs={"results" in data ? data.results : []} />
      </FlexBox>
      {/* <FlexBox column margin="2rem 0 0 0" gap="2rem">
        <FlexBox column gap="2rem">
          <FlexTextBox fontSize="1.8rem" margin="1rem 0 0 0">
            과 동아리
          </FlexTextBox>
          <ClubCategory />
        </FlexBox>
        <ClubCardWrapper />
      </FlexBox> */}
    </>
  );
};

export default Club;
