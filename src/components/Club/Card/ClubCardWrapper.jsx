import FlexBox from "components/Common/FlexBox";
import ClubCard from "components/Club/Card/ClubCard";
import { useNavigate } from "react-router-dom";

const ClubCardWrapper = ({ clubs }) => {
  const navigate = useNavigate();
  return (
    <FlexBox gap="1.5rem" wrap="wrap">
      {clubs &&
        clubs.map((club, idx) => (
          <ClubCard key={idx} club={club} onClick={() => navigate(`/club/${club.id}`)} />
        ))}
    </FlexBox>
  );
};
export default ClubCardWrapper;
