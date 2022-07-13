import styled from "styled-components";
import { Title } from "../Styles";
import redbee from "./../../Assets/img/experience/redbee.svg";
import glamit from "./../../Assets/img/experience/glamit.svg";
import factorit from "./../../Assets/img/experience/factorit.svg";
import sanju from "./../../Assets/img/experience/sanju.png";
import { ThemeProps } from "../../Commons/ThemeProps";
import { TimelineCard } from "./TimelineCard";

export const Experience = ({ theme }: ThemeProps) => {
  return (
    <>
      <FlexContainerColumn id="experience">
        <Title>My work</Title>
        <VerticalTimeline>
          <TimelineCard
            image={redbee}
            title="redbee"
            classname="redbee"
            location="left"
            position="Fullstack developer"
            description={
              "Web and Mobile development. Front and back end using Flutter and Java. Part of Partners pics build."
            }
          />
          <TimelineCard
            image={glamit}
            classname="glamit"
            title="Glamit"
            location="right"
            position="Front end developer"
            description={
              "Frontend developer using ReactJS and Less, Ecommerce builder."
            }
          />
          <TimelineCard
            image={factorit}
            classname="fit"
            title="FactorIT"
            location="left"
            position="Fullstack developer"
            description={"Web development, working building Walmart apps."}
          />
          <TimelineCard
            image={sanju}
            classname="sjt"
            location="right"
            title="Instituto Técnico Industrial San Judas Tadeo"
            position="Profesor"
            description={"IT professor, algorythms and C develompent."}
          />
        </VerticalTimeline>
      </FlexContainerColumn>
    </>
  );
};

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

const VerticalTimeline = styled.div`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 6px;
    background-color: #eaeaea;
    top: 0;
    bottom: 0;
    left: 20%;
    margin-left: -3px;
    @media (max-width: 768px) {
      left: 5%;
      position: relative;
      display: flex;
      flex-direction: column;
      width: 90%;
      box-sizing: border-box;
      justify-content: flex-start;
      margin: 0;
      align-self: flex-start;
    }
  }
`;
