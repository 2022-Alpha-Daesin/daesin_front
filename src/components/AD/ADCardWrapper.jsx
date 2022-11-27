import FlexBox from "components/Common/FlexBox";
import ADCard from "components/AD/ADCard";
import useADListQuery from "queries/AD/useADListQuery";

const ADCardWrapper = () => {
  const { data: ADList } = useADListQuery();

  console.log(ADList[0].id);

  const cardList = ADList.map((data, idx) => (
    <ADCard key={idx} title={data.post.title} content={data.post.content} id={data.id} />
  ));
  return (
    <FlexBox gap="1.5rem" wrap="wrap">
      {cardList}
    </FlexBox>
  );
};
export default ADCardWrapper;
