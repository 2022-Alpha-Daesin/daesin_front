import FlexBox from "components/Common/FlexBox";
import ClubDetailCard from "components/Club/Card/ClubDetailCard";

const ClubDetailCardWrapper = ({ info }) => {
  const CardList = () => {
    let infomations = Object.keys(info)
      .map((key) => {
        if (key === "curriculm") {
          if (info["curriculm"]) {
            return ["커리큘럼", info["curriculm"]];
          }
        }
        if (key === "intro") {
          if (info["intro"]) {
            return ["동아리 소개", info["intro"]];
          }
        }
        if (key === "place") {
          if (info["place"]) {
            return ["장소", info["place"]];
          }
        }
        if (key === "members_count") {
          if (info["members_count"]) {
            return ["인원 수 ", `${info["members_count"]} 명`];
          }
        }
      })
      .filter((item) => item)
      .map((card, idx) => {
        return <ClubDetailCard key={idx} title={card[0]} content={card[1]} />;
      });
    return infomations;
  };

  return (
    <FlexBox gap="2.2rem" wrap="wrap">
      {CardList()}
    </FlexBox>
  );
};
export default ClubDetailCardWrapper;
