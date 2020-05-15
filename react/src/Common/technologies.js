import React from "react";
import styled from "styled-components";

const Technologies = () => {
  return (
    <>
      <FlexContainerRow id="technologies">
        <FlexContainerColumn>
          <Title>Tecnologías</Title>
          <Image></Image>
        </FlexContainerColumn>
      </FlexContainerRow>
    </>
  );
};
export default Technologies;

const FlexContainerRow = styled.div`
   {
    display: flex;
    height: 90vh;
    background: #4f7dff;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

const FlexContainerColumn = styled.div`
   {
    display: flex;
    flex-direction: column;
    padding: 2em;
    margin: auto;
    @media (max-width: 768px) {
      width: 90%;
      padding: 0;
    }
  }
`;

const Image = styled.img`
   {
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
   {
     color: white;
  }
`;
