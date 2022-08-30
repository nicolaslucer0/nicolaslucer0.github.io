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
import vue from "../../assets/img/technologies/vue.png";
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
          centerMode={true}
          pauseOnHover={false}
          autoPlaySpeed={2000}
          responsive={techno}
          rewindWithAnimation={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          <TechnologyCard image={react} tooltip="React" />
          <TechnologyCard image={ts} tooltip="Typescript" />
          <TechnologyCard image={less} tooltip="LESS" />
          <TechnologyCard image={flutter} tooltip="Flutter" />
          <TechnologyCard image={angular} tooltip="Angular" />
          <TechnologyCard image={vue} tooltip="VueJS" />
          <TechnologyCard image={java} tooltip="Java" />
          <TechnologyCard image={spring} tooltip="Spring" />
          <TechnologyCard image={go} tooltip="Go" />
          <TechnologyCard image={kotlin} tooltip="Kotlin" />
          <TechnologyCard image={postgre} tooltip="PostgreSQL" />
          <TechnologyCard image={mysql} tooltip="MySQL" />
          <TechnologyCard image={sqlserver} tooltip="SQL Server" />
        </Carousel>
      </Container>
    </>
  );
};

const Container = styled.div`
  margin: auto;
  width: 80%;
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
