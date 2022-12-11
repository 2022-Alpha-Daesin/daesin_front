import FlexBox from "components/Common/FlexBox";
import ClubCard from "components/Club/Card/ClubCard";

const ClubCardWrapper = ({ clubs }) => {
  return (
    <FlexBox gap="1.5rem" wrap="wrap">
      {clubs && clubs.map((club) => <ClubCard club={club} />)}
    </FlexBox>
  );
};
export default ClubCardWrapper;
