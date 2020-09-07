import React from "react";
import styled from "styled-components";

const Technologies = () => {
  return (
    <>
      <FlexContainerColumn>
        <Title>Technologies</Title>
        <FlexContainerRow id="technologies">
          <Card>
            <Image src={require(`../Assets/img/technologies/flutter.png`)}/>
            <Level>
              <span className="meter capo"></span>
            </Level>
          </Card>

          <Card>
          <Image src={require(`../Assets/img/technologies/java.png`)}/>
            <Level>
              <span className="meter capo"></span>
            </Level>
          </Card>

          <Card>
          <Image src={require(`../Assets/img/technologies/spring.png`)}/>
            <Level>
              <span className="meter capo"></span>
            </Level>
          </Card>

          <Card>
          <Image src={require(`../Assets/img/technologies/react.png`)}/>
            <Level>
              <span className="meter capo"></span>
            </Level>
          </Card>

          <Card>
          <Image src={require(`../Assets/img/technologies/angular.png`)}/>
            <Level>
              <span className="meter capo"></span>
            </Level>
          </Card>

          <Card>
          <Image src={require(`../Assets/img/technologies/less.png`)}/>
            <Level>
              <span className="meter dios"></span>
            </Level>
          </Card>

          <Card>
            <Image src={require(`../Assets/img/technologies/vue.png`)}/>
            <Level>
              <span className="meter maso"></span>
            </Level>
          </Card>

          <Card>
            <Image src={require(`../Assets/img/technologies/c.png`)}/>
            <Level>
              <span className="meter maso"></span>
            </Level>
          </Card>

          <Card>
            <Image src={require(`../Assets/img/technologies/mysql.png`)}/>
            <Level>
              <span className="meter capo"></span>
            </Level>
          </Card>

          <Card>
            <Image src={require(`../Assets/img/technologies/sqlserver.png`)}/>
            <Level>
              <span className="meter" ></span>
            </Level>
          </Card>

        </FlexContainerRow>
      </FlexContainerColumn>
    </>
  );
};
export default Technologies;

const FlexContainerRow = styled.div`
   {
    display: flex;
    width: 90%;
    flex-wrap: wrap;
    padding: 2em;
    justify-content: space-around;

    @media (max-width: 768px) {
      flex-direction: column;
      height: auto;
      width: 90%;
    }
  }
`;

const FlexContainerColumn = styled.div`
   {
    display: flex;
    flex-direction: column;
    margin: auto;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
      width: 90%;
      padding: 0;
    }
  }
`;

const Card = styled.div`{
 width: 40%;
 display: flex;
 margin: 1em;
    justify-content: space-between;
    position: relative;
    flex-grow: 0;
    box-sizing: border-box;
    align-items: center;
    @media (max-width: 768px) {
      width: 90%;
    }
}`;

const Image = styled.img`
   {
    width: 20%;
    transition: 0.5s;
    &:hover {
      transform: rotate(-10deg);
    }
    @media (max-width: 768px) {
      width: 30%;
    }
  }
`;

const Title = styled.h2`
   {
    color: white;
    background: #4f7dff;
    width: 50%;
    text-align: center;
    margin: 5em 0;
    padding: 2em 0;
    transform: rotate(-1deg);
    overflow: hidden;
    &::before {
      width: 400px;
      height: 400px;
      background: linear-gradient(
        to bottom right,
        #fff 0%,
        #fff 50%,
        #a48d01 50%,
        #a48d01 100%
      );
    }
    transition: 1s;
    &:hover {
      transform: rotate(2deg);
    }
    @media (max-width: 768px) {
      margin: 2em 0;
    }
  }
`;

const Level = styled.div`
   {
      height: 20px;
      position: relative;
      background: #eee;
      border-radius: 7px;
      width: 50%;
      .meter {
        display: block;
        height: 100%;
        background-color: rgb(43,194,83);
        border-radius: 7px;
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
   }`;
