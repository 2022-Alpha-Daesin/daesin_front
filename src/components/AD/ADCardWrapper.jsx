import FlexBox from 'components/Common/FlexBox';
import ADCard from 'components/AD/ADCard';
import dummyData from 'components/AD/dummyData';

const ADCardWrapper = () => {
  const cardList = dummyData.map((data) => <ADCard title={data.title} content={data.content} />);
  return (
    <FlexBox gap="1.5rem" wrap="wrap">
      {cardList}
    </FlexBox>
  );
};
export default ADCardWrapper;
