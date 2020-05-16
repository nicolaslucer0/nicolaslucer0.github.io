import React from "react";
import styled from "styled-components";

const Technologies = () => {
  return (
    <>
      <FlexContainerColumn>
        <Title>Tecnologías</Title>
        <FlexContainerRow id="technologies">
          <Image src={require(`../Assets/img/technologies/java.png`)}></Image>
          <Image src={require(`../Assets/img/technologies/c.png`)}></Image>
          <Image
            src={require(`../Assets/img/technologies/flutter.png`)}
          ></Image>
          <Image src={require(`../Assets/img/technologies/less.png`)}></Image>
          <Image src={require(`../Assets/img/technologies/mysql.png`)}></Image>
          <Image
            src={require(`../Assets/img/technologies/sqlserver.png`)}
          ></Image>
          <Image src={require(`../Assets/img/technologies/vue.png`)}></Image>
          <Image src={require(`../Assets/img/technologies/react.png`)}></Image>
          <Image
            src={require(`../Assets/img/technologies/angular.png`)}
          ></Image>
          <Image src={require(`../Assets/img/technologies/spring.png`)}></Image>
        </FlexContainerRow>
      </FlexContainerColumn>
    </>
  );
};
export default Technologies;

const FlexContainerRow = styled.div`
   {
    display: flex;
    height: 90vh;
    width: 90%;
    flex-wrap: wrap;
    flex-shrink: 0;
    padding: 2em;
    justify-content: space-around;
    @media (max-width: 768px) {
      flex-direction: column;
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

const Image = styled.img`
   {
    width: auto;
    height: 20%;
    position: relative;
    margin: 10px;
  }
`;

const Title = styled.h2`
   {
    color: white;
    background: #4f7dff;
    width: 50%;
    text-align: center;
    padding: 2em 0;
    transform: rotate(-2deg);
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
  }
`;
