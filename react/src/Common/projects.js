import React from "react";
import styled from "styled-components";

const Projects = () => {
  return (
    <>
      <FlexContainerColumn id="projects">
        <Title>Proyectos</Title>
        <FlexContainerRow>
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
        </FlexContainerRow>
      </FlexContainerColumn>
    </>
  );
};
export default Projects;

const FlexContainerRow = styled.div`
   {
    display: flex;
    height: 90vh;
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

const Image = styled.div`
   {
    width: 30%;
    height: 90vh;
    object-fit: cover;
    background-size: cover;
    @media (max-width: 768px) {
      width: 100%;
      padding: 0;
    }
  }
`;

const Title = styled.h2`
   {
    color: white;
    background: #4f7d33;
    width: 50%;
    text-align: center;
    padding: 2em 0;
    transform: rotate(2deg);
    overflow: hidden;
  }
`;
