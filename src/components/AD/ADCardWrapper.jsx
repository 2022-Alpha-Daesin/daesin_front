import { useState } from "react";
import FlexBox from "components/Common/FlexBox";
import ADCard from "components/AD/ADCard";
import useADListQuery from "queries/AD/useADListQuery";
import COLOR from "constants/color";
import styled from "styled-components";

const Btn = styled.button`
  width: 6.8rem;
  height: 2.6rem;
  border-radius: 1.6rem;
  border: 1.6px solid ${COLOR.font.select};
  font-size: 0.9rem;
  font-weight: 800;
  color: ${(props) => (props.isClicked ? "white" : "#5c5c5c")};
  background: ${(props) => (props.isClicked ? COLOR.btn.main_gra : "transparent")};
  opacity: 0.7;
  cursor: pointer;
`;

const ADCardWrapper = () => {
  const [isClicked, setClick] = useState([true, false, false, false, false]);
  const [id, setId] = useState(0);
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
