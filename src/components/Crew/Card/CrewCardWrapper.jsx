import FlexBox from 'components/Common/FlexBox';
import CrewCard from 'components/Card/CrewCard';

const CrewCardWrapper = () => {
  return (
    <FlexBox gap="1rem" margin="1rem" wrap>
      <CrewCard />
      <CrewCard />
      <CrewCard />
      <CrewCard />
    </FlexBox>
  );
};
export default CrewCardWrapper;
