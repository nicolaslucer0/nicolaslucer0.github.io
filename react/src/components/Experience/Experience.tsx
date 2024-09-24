import styled from "styled-components";
import { useTheme } from "../../hooks/useTheme";
import { RelativeContainer, Title } from "../../styles/Styles";
import factorit from "./../../assets/img/experience/factorit.svg";
import glamit from "./../../assets/img/experience/glamit.png";
import modo from "./../../assets/img/experience/modo.webp";
import redbee from "./../../assets/img/experience/redbee.png";
import sanju from "./../../assets/img/experience/sanju.png";
import { TimelineCard } from "./TimelineCard";

const steps = [
  {
    image: modo,
    title: "MODO",
    classname: "modo",
    location: "right",
    position: "Front end engineer",
    description:
      "Front end web delopment, using react, typescript and next. Cotribuiting on MODO's landing and promo hub.",
  },
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

export const Experience = () => {
  const { theme } = useTheme();

  return (
    <RelativeContainer>
      <FlexContainerColumn id="experience">
        <Title theme={theme}>My career</Title>
      </FlexContainerColumn>

      <Timeline>
        <Box>
          <Cards>
            {steps.map(
              ({ image, title, classname, position, description }, index) => (
                <TimelineCard
                  theme={theme}
                  key={title}
                  image={image}
                  title={title}
                  classname={classname}
                  position={position}
                  description={description}
                />
              )
            )}
          </Cards>
        </Box>
      </Timeline>
    </RelativeContainer>
  );
};

const FlexContainerColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  overflow-y: hidden;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

const Timeline = styled.div`
  margin: auto;
  display: flex;
  overflow-y: hidden;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
`;

const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 75%;
  margin: auto;
`;
