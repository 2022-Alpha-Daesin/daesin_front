import FlexBox from 'components/Common/FlexBox';
import CrewCard from 'components/Crew/Card/CrewCard';

const CrewCardWrapper = () => {
  return (
    <FlexBox gap="1.5rem" wrap="wrap">
      <CrewCard />
      <CrewCard />
      <CrewCard />
      <CrewCard />
      <CrewCard />
      <CrewCard />
      <CrewCard />
      <CrewCard />
    </FlexBox>
  );
};
export default CrewCardWrapper;
