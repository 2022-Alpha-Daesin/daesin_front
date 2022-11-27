import FlexBox from "components/Common/FlexBox";
import ADCard from "components/AD/ADCard";
import useADListQuery from "queries/AD/useADListQuery";

const ADCardWrapper = () => {
  const { data: ADList } = useADListQuery();

  const cardList = ADList.map((data) => (
    <ADCard title={data.post.title} content={data.post.content} />
  ));
  return (
    <FlexBox gap="1.5rem" wrap="wrap">
      {cardList}
    </FlexBox>
  );
};
export default ADCardWrapper;
