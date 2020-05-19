import React from "react";
import styled from "styled-components";
import Carousel, { consts } from 'react-elastic-carousel';

const Technologies = () => {

  var w = 4;
  if (window.innerWidth <= 768) 
    w = 2;

  return (
    <>
      <FlexContainerColumn>
        <Title>Tecnologías</Title>
        <FlexContainerRow id="technologies">
        <Carousel itemsToShow={w} renderArrow={myArrow}>
            <Image src={require(`../Assets/img/technologies/java.png`)}></Image>
            <Image src={require(`../Assets/img/technologies/spring.png`)}></Image>
            <Image src={require(`../Assets/img/technologies/angular.png`)}></Image>
            <Image src={require(`../Assets/img/technologies/react.png`)}></Image>
            <Image src={require(`../Assets/img/technologies/flutter.png`)}></Image>
            <Image src={require(`../Assets/img/technologies/vue.png`)}></Image>
            <Image src={require(`../Assets/img/technologies/c.png`)}></Image>
            <Image src={require(`../Assets/img/technologies/less.png`)}></Image>
            <Image src={require(`../Assets/img/technologies/mysql.png`)}></Image>
            <Image src={require(`../Assets/img/technologies/sqlserver.png`)}></Image>
        </Carousel>
        </FlexContainerRow>
      </FlexContainerColumn>
    </>
  );
};
export default Technologies;

const myArrow = ({ type, onClick }) => {
  const pointer = type === consts.PREV ? '<' : '>'
  return <Button onClick={onClick}>{pointer}</Button>
}

const FlexContainerRow = styled.div`
   {
    display: flex;
    height: 90vh;
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

const Image = styled.img`{
  width: 80%;
  @media (max-width: 768px) {
    width: 70%;
  }
}`;

const Button = styled.button`{
  background: none;
  border: none;
  transform: scaleY(2);
  color: #3399aa;
}`;


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
    @media (max-width: 768px) {
      margin: 2em 0;
    }
  }
`;
