import React from "react";
import styled from "styled-components";
import java from "../Assets/img/technologies/java.png";
import flutter from "../Assets/img/technologies/flutter.png";
import spring from "../Assets/img/technologies/spring.png";
import react from "../Assets/img/technologies/react.png";
import angular from "../Assets/img/technologies/angular.png";
import less from "../Assets/img/technologies/less.png";
import vue from "../Assets/img/technologies/vue.png";
import mysql from "../Assets/img/technologies/mysql.png";
import sqlserver from "../Assets/img/technologies/sqlserver.png";
import ts from "../Assets/img/technologies/ts.png";
import kotlin from "../Assets/img/technologies/kotlin.png";
import go from "../Assets/img/technologies/go.png";
import postgre from "../Assets/img/technologies/postgres.png";
import { Title } from "./styles";

const Technologies = () => {
  return (
    <>
      <FlexContainerColumn>
        <Title>Technologies</Title>

        <FlexContainerColumn className="block alternative1">
          <SeparatorTitle>Front end</SeparatorTitle>
          <FlexContainerRow id="technologies">
            <Card>
              <Image src={react} />
              <Level>
                <span className="meter dios"></span>
              </Level>
            </Card>
            <Card>
              <Image src={ts} />
              <Level>
                <span className="meter dios"></span>
              </Level>
            </Card>

            <Card>
              <Image src={less} />
              <Level>
                <span className="meter dios"></span>
              </Level>
            </Card>
            <Card>
              <Image src={flutter} />
              <Level>
                <span className="meter capo"></span>
              </Level>
            </Card>

            <Card>
              <Image src={angular} />
              <Level>
                <span className="meter capo"></span>
              </Level>
            </Card>

            <Card>
              <Image src={vue} />
              <Level>
                <span className="meter maso"></span>
              </Level>
            </Card>
          </FlexContainerRow>
        </FlexContainerColumn>

        <FlexContainerColumn className="block alternative2">
          <SeparatorTitle>Back end</SeparatorTitle>
          <FlexContainerRow id="technologies">
            <Card>
              <Image src={java} />
              <Level>
                <span className="meter capo"></span>
              </Level>
            </Card>

            <Card>
              <Image src={spring} />
              <Level>
                <span className="meter capo"></span>
              </Level>
            </Card>
            <Card>
              <Image src={go} />
              <Level>
                <span className="meter maso"></span>
              </Level>
            </Card>
            <Card>
              <Image src={kotlin} />
              <Level>
                <span className="meter maso"></span>
              </Level>
            </Card>
          </FlexContainerRow>
        </FlexContainerColumn>

        <FlexContainerColumn className="block alternative3">
          <SeparatorTitle>Data Base</SeparatorTitle>
          <FlexContainerRow id="technologies">
            <Card>
              <Image src={postgre} />
              <Level>
                <span className="meter capo"></span>
              </Level>
            </Card>

            <Card>
              <Image src={mysql} />
              <Level>
                <span className="meter capo"></span>
              </Level>
            </Card>

            <Card>
              <Image src={sqlserver} />
              <Level>
                <span className="meter capo"></span>
              </Level>
            </Card>
          </FlexContainerRow>
        </FlexContainerColumn>
      </FlexContainerColumn>
    </>
  );
};
export default Technologies;

const FlexContainerRow = styled.div`
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  padding: 2em;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    width: 90%;
  }
`;

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;
  align-items: center;
  .block {
    margin: 1em 0;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 0;
  }
`;

const SeparatorTitle = styled.h3`
  font-weight: lighter;
  font-size: 2em;
  text-transform: uppercase;
  margin: 1em 0;
`;

const Card = styled.div`
  width: 30%;
  display: flex;
  margin: 1em;
  justify-content: space-between;
  position: relative;
  flex-grow: 0;
  box-sizing: border-box;
  align-items: center;
  box-shadow: 3px 3px 5px 0px #00000054;
  padding: 1.5em;
  border-radius: 5px;
  border: 1px solid #ececec;
  transition: 0.5s;
  background-color: white;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 768px) {
    width: 100%;
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 1em auto;
  }
`;

const Image = styled.img`
  width: 20%;
  transition: 0.5s;
  &:hover {
    transform: rotate(-10deg);
  }
  @media (max-width: 768px) {
    width: 60px;
  }
`;

const Level = styled.div`
  height: 10px;
  position: relative;
  background: #eee;
  border-radius: 7px;
  width: 70%;
  @media (max-width: 768px) {
    width: 60%;
  }
  .meter {
    display: block;
    height: 100%;
    background-color: rgb(43, 194, 83);
    border-radius: 1px;
    position: relative;
    overflow: hidden;
    &.malardo {
      width: 25%;
    }
    &.maso {
      width: 50%;
    }
    &.bien {
      width: 75%;
    }
    &.capo {
      width: 90%;
    }
    &.dios {
      width: 100%;
    }
  }
`;
