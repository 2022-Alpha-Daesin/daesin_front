import FlexBox from "components/Common/FlexBox";
import ADCard from "components/AD/ADCard";
import useADListQuery from "queries/AD/useADListQuery";

const ADCardWrapper = () => {
  const { data: ADList } = useADListQuery();

  return (
    <FlexBox gap="1.5rem" wrap="wrap">
      {"results" in ADList &&
        ADList.results.map((data, idx) => (
          <ADCard key={idx} title={data.title} content={data.content} id={data.id} />
        ))}
    </FlexBox>
  );
};
export default ADCardWrapper;
