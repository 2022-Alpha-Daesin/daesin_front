import FlexBox from 'components/Common/FlexBox';
import ClubDetailCard from 'components/Club/Card/ClubDetailCard';

const ClubDetailCardWrapper = () => {
  return (
    <FlexBox gap="2.2rem" wrap="wrap">
      <ClubDetailCard />
      <ClubDetailCard />
      <ClubDetailCard />
      <ClubDetailCard />
      <ClubDetailCard />
      <ClubDetailCard />
    </FlexBox>
  );
};
export default ClubDetailCardWrapper;
