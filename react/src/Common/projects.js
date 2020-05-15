import React from "react";
import styled from "styled-components";

const Projects = () => {
  return (
    <>
      <FlexContainerColumn id="projects">
        <Title>Proyectos</Title>
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
const Text = styled.p`
   {
    font-size: 20px;
  }
`;

const Name = styled.span`
   {
    position: relative;
    font-size: 20px;
    text-shadow: 2px -1px 0px #4f7dff;
    font-weight: 700;
  }
`;

const Title = styled.h2`
{}`;