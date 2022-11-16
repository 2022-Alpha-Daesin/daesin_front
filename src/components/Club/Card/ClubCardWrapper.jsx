import FlexBox from "components/Common/FlexBox";
import ClubCard from "components/Club/Card/ClubCard";

const ClubCardWrapper = () => {
  return (
    <FlexBox gap="1.5rem" wrap="wrap">
      <ClubCard />
      <ClubCard />
      <ClubCard />
      <ClubCard />
      <ClubCard />
      <ClubCard />
      <ClubCard />
      <ClubCard />
    </FlexBox>
  );
};
export default ClubCardWrapper;
