import Carousel from "react-multi-carousel";
import styled from "styled-components";
import angular from "../../assets/img/technologies/angular.png";
import flutter from "../../assets/img/technologies/flutter.png";
import go from "../../assets/img/technologies/go.png";
import java from "../../assets/img/technologies/java.png";
import kotlin from "../../assets/img/technologies/kotlin.png";
import less from "../../assets/img/technologies/less.png";
import mysql from "../../assets/img/technologies/mysql.png";
import postgre from "../../assets/img/technologies/postgres.png";
import react from "../../assets/img/technologies/react.png";
import spring from "../../assets/img/technologies/spring.png";
import sqlserver from "../../assets/img/technologies/sqlserver.png";
import ts from "../../assets/img/technologies/ts.png";
import js from "../../assets/img/technologies/js.png";
import terminal from "../../assets/img/technologies/terminal.png";
import git from "../../assets/img/technologies/git.png";
import npm from "../../assets/img/technologies/npm.png";
import vue from "../../assets/img/technologies/vue.png";
import figma from "../../assets/img/technologies/figma.png";
import { ThemeProps } from "../../commons/ThemeProps";
import { techno, Title } from "../Styles";
import { TechnologyCard } from "./TechnologyCard";

export const Technologies = ({ theme }: ThemeProps) => {
  return (
    <>
      <FlexContainerColumn id="technologies">
        <Title>Technologies</Title>
      </FlexContainerColumn>
      <Container>
        <Carousel
          rewind
          autoPlay
          swipeable
          arrows={false}
          pauseOnHover
          autoPlaySpeed={2000}
          responsive={techno}
          rewindWithAnimation={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          <TechnologyCard image={react} tooltip="React" resize />
          <TechnologyCard image={ts} tooltip="Typescript" resize />
          <TechnologyCard image={js} tooltip="Javascript" />
          <TechnologyCard image={less} tooltip="LESS" resize />
          <TechnologyCard image={figma} tooltip="Figma" />
          <TechnologyCard image={flutter} tooltip="Flutter" resize />
          <TechnologyCard image={angular} tooltip="Angular" resize />
          <TechnologyCard image={vue} tooltip="VueJS" resize />
          <TechnologyCard image={npm} tooltip="npm" />
          <TechnologyCard image={git} tooltip="GIT" />
          <TechnologyCard image={java} tooltip="Java" resize />
          <TechnologyCard image={spring} tooltip="Spring" resize />
          <TechnologyCard image={go} tooltip="Go" resize />
          <TechnologyCard image={kotlin} tooltip="Kotlin" resize />
          <TechnologyCard image={terminal} tooltip="Terminal" />
          <TechnologyCard image={postgre} tooltip="PostgreSQL" resize />
          <TechnologyCard image={mysql} tooltip="MySQL" resize />
          <TechnologyCard image={sqlserver} tooltip="SQL Server" resize />
        </Carousel>
      </Container>
    </>
  );
};

const Container = styled.div`
  margin: auto;
  width: 70%;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: flex-start;
  align-items: center;

  &.block {
    margin: 1em 0;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 0;
    &.block {
      width: 100%;
      margin: 1em 0;
    }
  }
`;
