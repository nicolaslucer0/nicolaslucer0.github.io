import styled from "styled-components";
import java from "../../Assets/img/technologies/java.png";
import flutter from "../../Assets/img/technologies/flutter.png";
import spring from "../../Assets/img/technologies/spring.png";
import react from "../../Assets/img/technologies/react.png";
import angular from "../../Assets/img/technologies/angular.png";
import less from "../../Assets/img/technologies/less.png";
import vue from "../../Assets/img/technologies/vue.png";
import mysql from "../../Assets/img/technologies/mysql.png";
import sqlserver from "../../Assets/img/technologies/sqlserver.png";
import ts from "../../Assets/img/technologies/ts.png";
import kotlin from "../../Assets/img/technologies/kotlin.png";
import go from "../../Assets/img/technologies/go.png";
import postgre from "../../Assets/img/technologies/postgres.png";
import { Title } from "../Styles";
import { ThemeProps } from "../../Commons/ThemeProps";
import { TechnologyCard } from "./TechnologyCard";

export const Technologies = ({ theme }: ThemeProps) => {
  return (
    <FlexContainerRow id="technologies">
      <Title>Technologies</Title>

      <FlexContainerRow className="parent">
        <FlexContainerColumn className="block alternative1">
          <SeparatorTitle>Front end</SeparatorTitle>
          <FlexContainerRow>
            <TechnologyCard image={react} tooltip="React" />
            <TechnologyCard image={ts} tooltip="Typescript" />
            <TechnologyCard image={less} tooltip="LESS" />
            <TechnologyCard image={flutter} tooltip="Flutter" />
            <TechnologyCard image={angular} tooltip="Angular" />
            <TechnologyCard image={vue} tooltip="VueJS" />
          </FlexContainerRow>
        </FlexContainerColumn>

        <FlexContainerColumn className="block alternative2">
          <SeparatorTitle>Back end</SeparatorTitle>
          <FlexContainerRow>
            <TechnologyCard image={java} tooltip="Java" />
            <TechnologyCard image={spring} tooltip="Spring" />
            <TechnologyCard image={go} tooltip="Go" />
            <TechnologyCard image={kotlin} tooltip="Kotlin" />
          </FlexContainerRow>
        </FlexContainerColumn>

        <FlexContainerColumn className="block alternative3">
          <SeparatorTitle>Data Base</SeparatorTitle>
          <FlexContainerRow>
            <TechnologyCard image={postgre} tooltip="PostgreSQL" />
            <TechnologyCard image={mysql} tooltip="MySQL" />
            <TechnologyCard image={sqlserver} tooltip="SQL Server" />
          </FlexContainerRow>
        </FlexContainerColumn>
      </FlexContainerRow>
    </FlexContainerRow>
  );
};

const FlexContainerRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  &.parent {
    display: flex;
    justify-content: space-between;
    width: 90%;
  }
  @media (max-width: 768px) {
    flex-direction: row;
    height: auto;
    width: 100%;
    &.parent {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 10px;
  &.block {
    width: 30%;
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

const SeparatorTitle = styled.h3`
  font-weight: lighter;
  font-size: 2em;
  text-transform: uppercase;
  margin: 1em 0;
`;
