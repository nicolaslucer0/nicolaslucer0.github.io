import styled from "styled-components";
import { RelativeContainer, Title, radius } from "../../styles/Styles";
import factorit from "./../../assets/img/experience/factorit.svg";
import glamit from "./../../assets/img/experience/glamit.png";
import redbee from "./../../assets/img/experience/redbee.png";
import sanju from "./../../assets/img/experience/sanju.png";
import { TimelineCard } from "./TimelineCard";
import { blue } from "../../styles/Colors";

const steps = [
  {
    image: redbee,
    title: "redbee",
    classname: "redbee",
    location: "left",
    position: "SR sofware engineer",
    description:
      "Web and Mobile development. Front and back end using Flutter and Java. Part of Partners pics build.",
  },
  {
    image: glamit,
    classname: "glamit",
    title: "Glamit",
    location: "right",
    position: "SSR Front end developer",
    description:
      "Frontend developer using ReactJS and Less, Ecommerce builder.",
  },
  {
    image: factorit,
    classname: "fit",
    title: "FactorIT",
    location: "left",
    position: "SSR Fullstack developer",
    description: "Web development, working building Walmart apps.",
  },
  {
    image: sanju,
    classname: "sjt",
    location: "right",
    title: "Instituto Técnico Industrial San Judas Tadeo",
    position: "Profesor",
    description: "IT professor, algorythms and C develompent.",
  },
];

export const Experience = () => (
  <RelativeContainer>
    <FlexContainerColumn id="experience">
      <Title>My career</Title>
    </FlexContainerColumn>

    <Timeline>
      <Box>
        <Container>
          <Lines>
            <Dot />
            <Line />
            <Dot />
            <Line />
            <Dot />
            <Line />
            <Dot />
            <Line />
          </Lines>

          <Cards>
            {steps.map(({ image, title, classname, position, description }) => (
              <TimelineCard
                key={title}
                image={image}
                title={title}
                classname={classname}
                position={position}
                description={description}
              />
            ))}
          </Cards>
        </Container>
      </Box>
    </Timeline>
  </RelativeContainer>
);

const FlexContainerColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

const Timeline = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

const Box = styled.div`
  display: flex;
`;

const Cards = styled.div`
  margin-left: 12px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 50%;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Lines = styled.div`
  margin-left: 40px;
  margin-top: 6px;
  transform: translateY(100px);
  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;

const Line = styled.div`
  height: 200px;
  width: 3px;
  background: ${blue};
  margin-left: 5.3px;
`;
const Dot = styled.div`
  width: 14px;
  height: 14px;
  background: ${blue};
  border-radius: ${radius};
`;
