import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import { ThemeProps } from "../../commons/ThemeProps";
import { Title } from "../Styles";
import factorit from "./../../assets/img/experience/factorit.svg";
import glamit from "./../../assets/img/experience/glamit.svg";
import redbee from "./../../assets/img/experience/redbee.svg";
import sanju from "./../../assets/img/experience/sanju.png";
import { Stepper } from "./Stepper";
import { TimelineCard } from "./TimelineCard";

const steps = [
  <TimelineCard
    image={sanju}
    classname="sjt"
    location="right"
    title="Instituto Técnico Industrial San Judas Tadeo"
    position="Profesor"
    description={"IT professor, algorythms and C develompent."}
  />,
  <TimelineCard
    image={factorit}
    classname="fit"
    title="FactorIT"
    location="left"
    position="Fullstack developer"
    description={"Web development, working building Walmart apps."}
  />,
  <TimelineCard
    image={glamit}
    classname="glamit"
    title="Glamit"
    location="right"
    position="Front end developer"
    description={
      "Frontend developer using ReactJS and Less, Ecommerce builder."
    }
  />,

  <TimelineCard
    image={redbee}
    title="redbee"
    classname="redbee"
    location="left"
    position="Fullstack developer"
    description={
      "Web and Mobile development. Front and back end using Flutter and Java. Part of Partners pics build."
    }
  />,
];

export const Experience = ({ theme }: ThemeProps) => {
  return (
    <>
      <FlexContainerColumn id="experience">
        <Title>My career</Title>
      </FlexContainerColumn>
      <Container>
        <Stepper steps={steps} startOn={3} theme={theme} />
      </Container>
    </>
  );
};

const FlexContainerColumn = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

const Container = styled.div`
  margin: auto;
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;
